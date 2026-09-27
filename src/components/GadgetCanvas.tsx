import React, { useRef, useEffect, useState } from 'react';
import { GadgetOperatingMode } from '../types/gadget';

interface GadgetCanvasProps {
  activeMode: GadgetOperatingMode;
  activeSubsystemId: string | null;
  onSelectSubsystem: (id: string) => void;
  energyLevel: number;
  coherenceLevel: number;
}

export const GadgetCanvas: React.FC<GadgetCanvasProps> = ({
  activeMode,
  activeSubsystemId,
  onSelectSubsystem,
  energyLevel,
  coherenceLevel,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState({ x: 15, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [hoveredRing, setHoveredRing] = useState<string | null>(null);

  // Mouse drag to tilt / rotate the 3D projection
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    setRotationAngle((prev) => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.4)),
      y: prev.y + deltaX * 0.4,
    }));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    // Handle high DPI
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle system for matter synthesis & quantum noise
    const particles: { x: number; y: number; z: number; speed: number; angle: number; rad: number; color: string }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        z: (Math.random() - 0.5) * 80,
        speed: 0.01 + Math.random() * 0.02,
        angle: Math.random() * Math.PI * 2,
        rad: 30 + Math.random() * 140,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#f59e0b' : '#8b5cf6',
      });
    }

    const render = () => {
      t += 0.025;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Deep space grid background
      ctx.save();
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.35)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle crosshairs & technical fiducial markers
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy);
      ctx.lineTo(cx + 30, cy);
      ctx.moveTo(cx, cy - 30);
      ctx.lineTo(cx, cy + 30);
      ctx.stroke();

      // Transform coordinates based on 3D rotation
      const radX = (rotationAngle.x * Math.PI) / 180;
      const radY = (rotationAngle.y * Math.PI) / 180;
      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);
      const cosY = Math.cos(radY);
      const sinY = Math.sin(radY);

      // Helper function to project 3D point to 2D isometric view
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        // Perspective factor
        const scale = 360 / (360 + z2);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          scale,
        };
      };

      // 1. Ambient Glow underneath
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220);
      if (activeMode === 'analyse_scan') {
        grad.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
        grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      } else if (activeMode === 'resonanz_energie') {
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.18)');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      } else if (activeMode === 'bio_regeneration') {
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.16)');
        grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      } else if (activeMode === 'quanten_praediktion') {
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
        grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      } else {
        grad.addColorStop(0, 'rgba(236, 72, 153, 0.15)');
        grad.addColorStop(1, 'rgba(236, 72, 153, 0)');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 220, 0, Math.PI * 2);
      ctx.fill();

      // 2. Outer Ring: Morpho-Graphen Hull (Segmented protective plates)
      const hullHighlighted = activeSubsystemId === 'exo_graphene_hull';
      const hullRadius = 155;
      const numHullSegments = 8;
      ctx.lineWidth = hullHighlighted ? 3 : 1.5;

      for (let s = 0; s < numHullSegments; s++) {
        const segAngleStart = (s * Math.PI * 2) / numHullSegments + t * 0.1;
        const segAngleEnd = segAngleStart + (Math.PI * 2) / numHullSegments - 0.15;
        
        ctx.beginPath();
        const steps = 12;
        for (let i = 0; i <= steps; i++) {
          const a = segAngleStart + ((segAngleEnd - segAngleStart) * i) / steps;
          const rx = Math.cos(a) * hullRadius;
          const ry = Math.sin(a) * hullRadius;
          const { px, py } = project(rx, ry, Math.sin(a * 4 + t) * 8);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = hullHighlighted 
          ? 'rgba(6, 182, 212, 0.95)' 
          : 'rgba(71, 85, 105, 0.6)';
        ctx.stroke();
      }

      // 3. Resonant Energy Coil Ring (Subsystem 02)
      const energyHighlighted = activeSubsystemId === 'micro_fusion_core';
      const energyRadius = 120;
      ctx.lineWidth = energyHighlighted ? 2.5 : 1.2;
      ctx.strokeStyle = energyHighlighted 
        ? 'rgba(245, 158, 11, 0.95)' 
        : activeMode === 'resonanz_energie' 
          ? 'rgba(245, 158, 11, 0.7)' 
          : 'rgba(245, 158, 11, 0.3)';
      
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.1) {
        const wave = Math.sin(a * 16 - t * 3) * (energyLevel / 100) * 6;
        const rx = Math.cos(a) * (energyRadius + wave);
        const ry = Math.sin(a) * (energyRadius + wave);
        const { px, py } = project(rx, ry, wave * 2);
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 4. Quantum Causal Lattice (Subsystem 05)
      const quantumHighlighted = activeSubsystemId === 'quantum_causal_core';
      const qRadius = 90;
      ctx.lineWidth = quantumHighlighted ? 2 : 1;
      ctx.strokeStyle = quantumHighlighted 
        ? 'rgba(139, 92, 246, 0.95)' 
        : 'rgba(139, 92, 246, 0.4)';
      
      const qNodes = 12;
      const nodeCoords: { px: number; py: number }[] = [];
      for (let n = 0; n < qNodes; n++) {
        const na = (n * Math.PI * 2) / qNodes - t * 0.2;
        const rx = Math.cos(na) * qRadius;
        const ry = Math.sin(na) * qRadius;
        const rz = Math.sin(na * 3 + t * 2) * 15;
        const { px, py } = project(rx, ry, rz);
        nodeCoords.push({ px, py });

        // Node dot
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Interconnecting quantum entanglement chords
      ctx.beginPath();
      for (let i = 0; i < nodeCoords.length; i++) {
        const next = nodeCoords[(i + 4) % nodeCoords.length];
        ctx.moveTo(nodeCoords[i].px, nodeCoords[i].py);
        ctx.lineTo(next.px, next.py);
      }
      ctx.stroke();

      // 5. Synaptic Bio-Interface Mesh (Subsystem 04)
      const bciHighlighted = activeSubsystemId === 'synaptic_bci';
      ctx.strokeStyle = bciHighlighted 
        ? 'rgba(16, 185, 129, 0.95)' 
        : 'rgba(16, 185, 129, 0.35)';
      ctx.lineWidth = 1;
      
      for (let ring = 50; ring <= 75; ring += 12) {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
          const wobble = Math.sin(a * 8 + t * 2) * 3;
          const rx = Math.cos(a) * (ring + wobble);
          const ry = Math.sin(a) * (ring + wobble);
          const { px, py } = project(rx, ry, Math.cos(a * 4 - t) * 5);
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 6. Central Photonic Iris Core (Subsystem 03 & 06)
      const irisHighlighted = activeSubsystemId === 'photonic_iris';
      const coreHighlighted = activeSubsystemId === 'nanite_assembler';
      const centerProj = project(0, 0, 0);

      // Central glowing core
      const coreGrad = ctx.createRadialGradient(
        centerProj.px, centerProj.py, 2,
        centerProj.px, centerProj.py, 38
      );
      coreGrad.addColorStop(0, '#ffffff');
      coreGrad.addColorStop(0.3, irisHighlighted || coreHighlighted ? '#38bdf8' : '#06b6d4');
      coreGrad.addColorStop(0.8, 'rgba(6, 182, 212, 0.4)');
      coreGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerProj.px, centerProj.py, 38, 0, Math.PI * 2);
      ctx.fill();

      // Aperture Blades (like camera aperture / crystalline iris)
      const numBlades = 6;
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1.2;
      for (let b = 0; b < numBlades; b++) {
        const bladeA = (b * Math.PI * 2) / numBlades + t * 0.3;
        const p1 = project(Math.cos(bladeA) * 12, Math.sin(bladeA) * 12, 10);
        const p2 = project(Math.cos(bladeA + 0.8) * 32, Math.sin(bladeA + 0.8) * 32, 5);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }

      // 7. Active Mode Overlays
      if (activeMode === 'analyse_scan') {
        // 360° sweeping scan beam
        const scanAngle = t * 1.5;
        const scanLength = 175;
        const targetX = Math.cos(scanAngle) * scanLength;
        const targetY = Math.sin(scanAngle) * scanLength;
        const targetProj = project(targetX, targetY, 0);

        ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerProj.px, centerProj.py);
        ctx.lineTo(targetProj.px, targetProj.py);
        ctx.stroke();

        // Scan sector cone
        ctx.fillStyle = 'rgba(6, 182, 212, 0.12)';
        ctx.beginPath();
        ctx.moveTo(centerProj.px, centerProj.py);
        for (let a = scanAngle - 0.4; a <= scanAngle; a += 0.05) {
          const p = project(Math.cos(a) * scanLength, Math.sin(a) * scanLength, 0);
          ctx.lineTo(p.px, p.py);
        }
        ctx.closePath();
        ctx.fill();
      } else if (activeMode === 'materie_synthese') {
        // Hexagonal molecular projection lattice
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.6)';
        ctx.lineWidth = 1;
        const hexR = 24;
        for (let hx = -2; hx <= 2; hx++) {
          for (let hy = -2; hy <= 2; hy++) {
            const hxPos = hx * hexR * 1.7;
            const hyPos = hy * hexR * 1.5 + (hx % 2) * (hexR * 0.75);
            if (Math.hypot(hxPos, hyPos) < 130) {
              ctx.beginPath();
              for (let i = 0; i < 6; i++) {
                const ha = (i * Math.PI) / 3 + t * 0.1;
                const px3 = hxPos + Math.cos(ha) * (hexR * 0.5);
                const py3 = hyPos + Math.sin(ha) * (hexR * 0.5);
                const p = project(px3, py3, Math.sin(t * 2 + hx + hy) * 10);
                if (i === 0) ctx.moveTo(p.px, p.py);
                else ctx.lineTo(p.px, p.py);
              }
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      } else if (activeMode === 'bio_regeneration') {
        // DNA harmonic wave stream
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const r = 100 + Math.sin(a * 12 + t * 4) * 12;
          const p = project(Math.cos(a) * r, Math.sin(a) * r, Math.cos(a * 6 + t * 3) * 20);
          if (a === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      }

      // 8. Dynamic floating particles (Nanites / Photons)
      particles.forEach((pt) => {
        pt.angle += pt.speed;
        const pxPos = Math.cos(pt.angle) * pt.rad;
        const pyPos = Math.sin(pt.angle) * pt.rad;
        const pzPos = pt.z + Math.sin(pt.angle * 3 + t) * 15;
        const { px, py, scale } = project(pxPos, pyPos, pzPos);

        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, 1.8 * scale), 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeMode, activeSubsystemId, rotationAngle, energyLevel, coherenceLevel]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] md:h-[520px] bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Precision Telemetry HUD */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-1 text-xs font-mono tabular-nums">
        <div className="text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>AETHEON KERN-STATUS: NOMINAL</span>
        </div>
        <div className="text-slate-500 text-[11px]">
          FLUX: {(3.84 + (energyLevel / 100) * 2.1).toFixed(3)} T · KOHÄRENZ: {(99.2 + (coherenceLevel / 100) * 0.79).toFixed(3)} %
        </div>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none text-right font-mono text-[11px] text-slate-500 tabular-nums">
        <div>ROT X: {rotationAngle.x.toFixed(1)}°</div>
        <div>ROT Y: {rotationAngle.y.toFixed(1)}°</div>
        <div className="text-cyan-400/80 mt-1">3D-ORBITAL-PROJEKTION</div>
      </div>

      {/* Interactive Subsystem Quick Selector Pills/Buttons */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 overflow-x-auto p-2 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg text-xs">
        <span className="text-slate-400 font-medium whitespace-nowrap pl-1 text-[11px]">
          Ebenen fokussieren:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {[
            { id: 'exo_graphene_hull', label: '01. Exoskelett' },
            { id: 'micro_fusion_core', label: '02. Fusionszelle' },
            { id: 'photonic_iris', label: '03. Photonen-Iris' },
            { id: 'synaptic_bci', label: '04. Neurale BCI' },
            { id: 'quantum_causal_core', label: '05. Quantenkern' },
            { id: 'nanite_assembler', label: '06. Naniten-Matrix' },
          ].map((sub) => {
            const isActive = activeSubsystemId === sub.id;
            return (
              <button
                key={sub.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectSubsystem(isActive ? '' : sub.id);
                }}
                className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
