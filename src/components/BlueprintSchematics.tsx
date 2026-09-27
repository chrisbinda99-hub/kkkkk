import React, { useState } from 'react';
import { GADGET_SUBSYSTEMS } from '../data/inventions';
import { GadgetSubsystem } from '../types/gadget';
import { Cpu, ShieldCheck, Zap, Layers, Compass, Crosshair, ArrowUpRight } from 'lucide-react';

interface BlueprintSchematicsProps {
  onSelectSubsystemForCanvas: (subsystemId: string) => void;
  activeSubsystemId: string | null;
}

export const BlueprintSchematics: React.FC<BlueprintSchematicsProps> = ({
  onSelectSubsystemForCanvas,
  activeSubsystemId,
}) => {
  const [selectedSubsystem, setSelectedSubsystem] = useState<GadgetSubsystem>(
    GADGET_SUBSYSTEMS[0]
  );

  return (
    <div id="bauplan" className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          03. Technische Bauplan-Spezifikation (CAD-Cutaway)
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
          Die 6 Primär-Subsysteme des Evolutionären Zukunftsgadgets
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Exakte physikalische Architektur, Materialdaten und ancestrale Erfindungsketten des AETHEON-Geräts.
        </p>
      </div>

      {/* Grid of Subsystems and Detailed Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Subsystem Navigation List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          {GADGET_SUBSYSTEMS.map((sub, idx) => {
            const isSelected = selectedSubsystem.id === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubsystem(sub);
                  onSelectSubsystemForCanvas(sub.id);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-md'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold">0{idx + 1} // SUBSYSTEM</span>
                  <span className="text-[11px] text-slate-500">{sub.readinessLevel}</span>
                </div>
                <div className="text-sm font-semibold text-slate-100 flex items-center justify-between">
                  <span>{sub.name}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {sub.ancestorInventions.join(' · ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detail Inspection Card (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
            <div className="text-xs font-mono text-cyan-400 uppercase">
              {selectedSubsystem.designation}
            </div>
            <h3 className="text-xl font-bold text-slate-100">{selectedSubsystem.name}</h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              {selectedSubsystem.description}
            </p>
          </div>

          {/* Physics & Theory Box */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800/80 flex flex-col gap-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
              Fundamentales Physikalisches Wirkprinzip:
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-mono text-[11px]">
              {selectedSubsystem.physicsPrinciple}
            </p>
          </div>

          {/* Precision Metrics Grid according to Domain Science Spec */}
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
              Kalibrierte Labordaten & Messwerte:
            </div>
            <div className="grid grid-cols-2 gap-3">
              {selectedSubsystem.technicalSpecs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {spec.key}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl font-bold font-mono tabular-nums text-slate-100">
                      {spec.value}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">{spec.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ancestor Pedigree List */}
          <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Evolutionäre Ahnen-Erfindungen:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {selectedSubsystem.ancestorInventions.map((anc, aIdx) => (
                <span
                  key={aIdx}
                  className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium"
                >
                  {anc}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>INTERNE SYSTEM-INTEGRITÄT 100%</span>
            </div>

            <button
              onClick={() => onSelectSubsystemForCanvas(selectedSubsystem.id)}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
            >
              Im 3D-Kern hervorheben
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
