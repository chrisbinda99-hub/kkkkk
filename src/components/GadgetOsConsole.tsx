import React, { useState } from 'react';
import { GadgetOperatingMode } from '../types/gadget';
import { 
  Scan, 
  Layers, 
  HeartPulse, 
  GitBranch, 
  Zap, 
  Activity, 
  Cpu, 
  SlidersHorizontal,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface GadgetOsConsoleProps {
  activeMode: GadgetOperatingMode;
  onModeChange: (mode: GadgetOperatingMode) => void;
  energyLevel: number;
  onEnergyChange: (val: number) => void;
  coherenceLevel: number;
  onCoherenceChange: (val: number) => void;
  onSelectSubsystem: (id: string) => void;
}

export const GadgetOsConsole: React.FC<GadgetOsConsoleProps> = ({
  activeMode,
  onModeChange,
  energyLevel,
  onEnergyChange,
  coherenceLevel,
  onCoherenceChange,
  onSelectSubsystem,
}) => {
  const [scanDepth, setScanDepth] = useState<number>(75);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simLog, setSimLog] = useState<string[]>([
    'AETHEON OS v1.0 initialisiert. Quantenfeld stabil.',
    'Alle 6 evolutionären Subsysteme mit Biosignal synchronisiert.',
    'Bereit für telepathische Instruktion oder manuelle Kalibrierung.'
  ]);

  const modeDescriptions: Record<GadgetOperatingMode, {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    ancestors: string;
    actionLabel: string;
  }> = {
    analyse_scan: {
      title: 'Multispektral-Scan & Molekulare Durchleuchtung',
      subtitle: 'Erfasst atomare Zusammensetzung, verdeckte Hohlräume und Biosignale kontaktlos.',
      icon: <Scan className="w-4 h-4 text-cyan-400" />,
      color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
      ancestors: 'Linsen (1500 v. Chr.) → Mikroskop (1590) → Röntgen (1895) → MRT → Terahertz-Optik',
      actionLabel: 'Umgebungs-Scan auslösen',
    },
    materie_synthese: {
      title: 'Naniten-Matrix & Materie-Rekonfiguration',
      subtitle: 'Formt aus Umgebungsatomen und Kohlenstoff elementare Werkzeuge, Filter und Bauteile.',
      icon: <Layers className="w-4 h-4 text-pink-400" />,
      color: 'border-pink-500/50 bg-pink-500/10 text-pink-300',
      ancestors: 'Faustkeil → Metallguss → Webstühle → 3D-Druck (1984) → Molekulare Assembler',
      actionLabel: 'Molekulare Assemblierung starten',
    },
    bio_regeneration: {
      title: 'Zelluläre Homöostase & Bio-Schild',
      subtitle: 'Analysiert zelluläre Vitalwerte, neutralisiert Viren/Gifte und beschleunigt Wundheilung.',
      icon: <HeartPulse className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
      ancestors: 'Pflanzenmedizin → Mikrobiologie (Pasteur) → Penicillin (1928) → CRISPR-Cas9 (2012)',
      actionLabel: 'Zell-Harmonisierung aktivieren',
    },
    quanten_praediktion: {
      title: 'Kausalitäts-Simulation & Entscheidungsvektoren',
      subtitle: 'Berechnet physikalische Wahrscheinlichkeiten und Gefahrenpfade bis zu 72 Stunden im Voraus.',
      icon: <GitBranch className="w-4 h-4 text-purple-400" />,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
      ancestors: 'Antikythera (100 v. Chr.) → Rechenmaschine → Turing-Maschine (1936) → Quanten-Qubits',
      actionLabel: 'Kausalitäts-Kalkulation berechnen',
    },
    resonanz_energie: {
      title: 'Drahtlose Resonanz-Induktion & Feldschild',
      subtitle: 'Erzeugt ein abstoßendes Magneto-Schutzfeld und versorgt externe Geräte berührungslos mit Strom.',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
      ancestors: 'Feuer → Dampfmaschine → Volta-Batterie (1800) → Faraday-Induktion → Netto-Fusion',
      actionLabel: 'Resonanz-Feld emittieren',
    },
  };

  const handleRunAction = () => {
    setIsSimulating(true);
    const timestamp = new Date().toLocaleTimeString('de-DE');

    const modeActions: Record<GadgetOperatingMode, string[]> = {
      analyse_scan: [
        `[${timestamp}] Impuls-Laserstrahl emittiert (Wellenlänge: 0.14 nm).`,
        `Durchdringt Zielobjekt bis zu ${scanDepth} mm Tiefe. Dichte: 2.4 g/cm³.`,
        `Spektroskopie: 78.1% Silizium-Kohlenstoff, 21.9% biogene Polymere. Keine Gefahrenstoffe detektiert.`
      ],
      materie_synthese: [
        `[${timestamp}] Naniten-Assembler aktiviert. Energieaufnahme: ${(energyLevel * 0.42).toFixed(1)} kW.`,
        `Extrahierte Umgebungskohlenstoff-Atome in hexagonale Graphen-Waben umgeordnet.`,
        `Gegenstand manifestiert: Ultra-leichter, steriler Mehrzweck-Filter (Zugfestigkeit: 110 GPa).`
      ],
      bio_regeneration: [
        `[${timestamp}] Subkutane Vital-Erfassung über Handteller-Sensorik: Puls 68 bpm, SpO₂ 99.4%.`,
        `Lokale Entzündungsmarker identifiziert. Mikromagnetische Resonanztherapie initiiert.`,
        `Zelluläre ATP-Produktion um +28% stimuliert. Geweberegeneration beschleunigt.`
      ],
      quanten_praediktion: [
        `[${timestamp}] 4.096 Majorana-Qubits in kohärente Superposition versetzt (${coherenceLevel}% Güte).`,
        `Simuliere 10.000.000 Wahrscheinlichkeits-Pfade für Umgebungsrisiken (Wetter, Erschütterung).`,
        `Optimaler Handlungskorridor berechnet. Sicherheitsindex: 99.982%. Keine Anomalien.`
      ],
      resonanz_energie: [
        `[${timestamp}] Resonanzfrequenz 142.8 MHz an Tokamak-Mikrozelle angelegt.`,
        `Kugelförmiges Schutzfeld etabliert (Radius: 2.8 Meter).`,
        `Drahtloser Energiefluss aktiv: Speist externe Geräte mit 1.4 kW kontaktlos.`
      ]
    };

    setTimeout(() => {
      setSimLog(prev => [...modeActions[activeMode], ...prev.slice(0, 6)]);
      setIsSimulating(false);
    }, 450);
  };

  const current = modeDescriptions[activeMode];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col gap-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-200">
            AETHEON Kontrollmatrix & Betriebsmodi
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-400 tabular-nums">
          SYSTEM-MODUS: <span className="text-cyan-400 uppercase">{activeMode.replace('_', ' ')}</span>
        </div>
      </div>

      {/* Mode Selector Segmented Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {(Object.keys(modeDescriptions) as GadgetOperatingMode[]).map((modeKey) => {
          const info = modeDescriptions[modeKey];
          const isActive = activeMode === modeKey;
          return (
            <button
              key={modeKey}
              onClick={() => onModeChange(modeKey)}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                isActive
                  ? `${info.color} shadow-sm`
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {info.icon}
                <span className="text-xs font-medium truncate">
                  {modeKey === 'analyse_scan' && 'Scan & Analyse'}
                  {modeKey === 'materie_synthese' && 'Nanomaterie'}
                  {modeKey === 'bio_regeneration' && 'Bio-Regenerator'}
                  {modeKey === 'quanten_praediktion' && 'Kausal-Prädiktion'}
                  {modeKey === 'resonanz_energie' && 'Resonanz-Energie'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Mode Details Banner */}
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-slate-100">{current.title}</h3>
          </div>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            {current.subtitle}
          </p>
          <div className="text-[11px] text-slate-500 font-mono mt-1">
            <span className="text-slate-400 font-semibold">Ahnenlinie:</span> {current.ancestors}
          </div>
        </div>

        <button
          onClick={handleRunAction}
          disabled={isSimulating}
          className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-50"
        >
          {isSimulating ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <CheckCircle2 className="w-3.5 h-3.5" />
          )}
          <span>{current.actionLabel}</span>
        </button>
      </div>

      {/* Real-time Fine Calibration Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-lg border border-slate-800/60">
        {/* Slider 1: Energiezufuhr */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400" /> Fusions-Energiefluss
            </span>
            <span className="font-mono tabular-nums text-amber-400 font-medium">{energyLevel} %</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={energyLevel}
            onChange={(e) => onEnergyChange(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <span className="text-[10px] text-slate-500 font-mono">
            Ausbeute: {(energyLevel * 0.425).toFixed(2)} kW Dauerlast
          </span>
        </div>

        {/* Slider 2: Quantenkohärenz */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-purple-400" /> Majorana-Kohärenz
            </span>
            <span className="font-mono tabular-nums text-purple-400 font-medium">{coherenceLevel} %</span>
          </div>
          <input
            type="range"
            min="50"
            max="100"
            value={coherenceLevel}
            onChange={(e) => onCoherenceChange(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <span className="text-[10px] text-slate-500 font-mono">
            Phasenrauschen: &lt; 10⁻¹² rad/s
          </span>
        </div>

        {/* Slider 3: Scan-Tiefe / Naniten-Dichte */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-cyan-400" /> Sensor-Eindringtiefe
            </span>
            <span className="font-mono tabular-nums text-cyan-400 font-medium">{scanDepth} mm</span>
          </div>
          <input
            type="range"
            min="10"
            max="150"
            value={scanDepth}
            onChange={(e) => setScanDepth(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <span className="text-[10px] text-slate-500 font-mono">
            Subatomare Auflösung: 0.12 nm
          </span>
        </div>
      </div>

      {/* Telemetry Output Terminal */}
      <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 flex flex-col gap-1 font-mono text-xs">
        <div className="text-[11px] text-slate-500 flex items-center justify-between border-b border-slate-900 pb-1 mb-1">
          <span>LIVE-EREIGNISPROTOKOLL (AETHEON HARDWARE BUS)</span>
          <span className="text-emerald-500">● VERBUNDEN</span>
        </div>
        <div className="flex flex-col gap-1 max-h-28 overflow-y-auto pr-1">
          {simLog.map((log, idx) => (
            <div
              key={idx}
              className={`leading-relaxed text-[11px] ${
                idx === 0 ? 'text-cyan-300 font-medium' : 'text-slate-400'
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
