import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { GadgetCanvas } from './components/GadgetCanvas';
import { GadgetOsConsole } from './components/GadgetOsConsole';
import { InventionTimeline } from './components/InventionTimeline';
import { AiSynthesizerLab } from './components/AiSynthesizerLab';
import { BlueprintSchematics } from './components/BlueprintSchematics';
import { GadgetOperatingMode } from './types/gadget';
import { Sparkles, ArrowDown, Shield, Infinity, Compass, Cpu } from 'lucide-react';

export default function App() {
  const [activeMode, setActiveMode] = useState<GadgetOperatingMode>('analyse_scan');
  const [activeSubsystemId, setActiveSubsystemId] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number>(85);
  const [coherenceLevel, setCoherenceLevel] = useState<number>(98);
  const [selectedInventionsForSynthesis, setSelectedInventionsForSynthesis] = useState<string[]>([
    'Das Rad & die Drehachse',
    'Transistor',
    'Quantencomputer & Qubit-Verschränkung',
  ]);

  const handleToggleInventionForSynthesis = (name: string) => {
    setSelectedInventionsForSynthesis((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleClearInventions = () => {
    setSelectedInventionsForSynthesis([]);
  };

  const handleAddInvention = (name: string) => {
    if (!selectedInventionsForSynthesis.includes(name)) {
      setSelectedInventionsForSynthesis((prev) => [...prev, name]);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerQuickScan = () => {
    setActiveMode('analyse_scan');
    scrollToSection('simulator');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 3-Zone Top Bar */}
      <TopBar
        onTriggerQuickScan={handleTriggerQuickScan}
        onNavigateToSection={scrollToSection}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-16 md:gap-24 w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-8 pb-4">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            Die Evolutionäre Konvergenz der Menschheit
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 max-w-4xl text-balance font-display">
            AETHEON: Das Universal-Gadget der Zukunft
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed text-balance">
            Ausgehend von 1.000.000 Jahren Pioniergeist verschmelzen Feuerbeherrschung, das Rad, Optik, Elektromagnetismus, Halbleiter und moderne Quantenbiotechnologie in einem autonomen, morphischen Resonanzgerät.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollToSection('simulator')}
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-sm transition-colors cursor-pointer shadow-lg shadow-cyan-500/10"
            >
              Interaktiven Simulator bedienen
            </button>
            <button
              onClick={() => scrollToSection('genealogie')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-lg text-sm transition-colors cursor-pointer"
            >
              Genealogie der Erfindungen erkunden
            </button>
          </div>

          {/* Quantitative Claim-to-Proof Metric Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-y border-slate-800/80 py-5">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-100">
                1.000.000+
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                Jahre Ahnenlinie
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-cyan-400">
                6 Subsysteme
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                Konvergente Schichten
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-400">
                42.5 kW
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                Fusions-Dauerleistung
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-400">
                0.8 ms
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                Synaptische Latenz
              </span>
            </div>
          </div>
        </section>

        {/* Section 1: The Interactive Holographic Simulator */}
        <section id="simulator" className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              Operatives Terminal // AETHEON OS
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">
              Der Interaktive 3D-Katalysator
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Klicke und drehe das morphische Gadget in 3D. Wechsle zwischen den fünf Betriebsmodi oder fokussiere gezielt einzelne Subsysteme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 3D Visualizer Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <GadgetCanvas
                activeMode={activeMode}
                activeSubsystemId={activeSubsystemId}
                onSelectSubsystem={(id) => setActiveSubsystemId(id)}
                energyLevel={energyLevel}
                coherenceLevel={coherenceLevel}
              />
            </div>

            {/* Operating Console (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <GadgetOsConsole
                activeMode={activeMode}
                onModeChange={(mode) => setActiveMode(mode)}
                energyLevel={energyLevel}
                onEnergyChange={setEnergyLevel}
                coherenceLevel={coherenceLevel}
                onCoherenceChange={setCoherenceLevel}
                onSelectSubsystem={(id) => setActiveSubsystemId(id)}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Die Genealogie der Menschlichen Erfindungen */}
        <InventionTimeline
          onHighlightSubsystem={(id) => {
            setActiveSubsystemId(id);
            scrollToSection('simulator');
          }}
          onSelectForSynthesis={handleToggleInventionForSynthesis}
          selectedInventionsForSynthesis={selectedInventionsForSynthesis}
        />

        {/* Section 3: KI-Syntheselabor */}
        <AiSynthesizerLab
          selectedInventions={selectedInventionsForSynthesis}
          onRemoveInvention={handleToggleInventionForSynthesis}
          onClearInventions={handleClearInventions}
          onAddInvention={handleAddInvention}
        />

        {/* Section 4: Technische Bauplan-Spezifikation */}
        <BlueprintSchematics
          activeSubsystemId={activeSubsystemId}
          onSelectSubsystemForCanvas={(id) => {
            setActiveSubsystemId(id);
            scrollToSection('simulator');
          }}
        />

        {/* Section 5: Philosophische Vision & Synthese */}
        <section id="vision" className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              Manifest der Technologischen Evolution
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">
              Warum AETHEON das finale Werkzeug des Homo Faber darstellt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-slate-300">
            <div className="flex flex-col gap-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <Infinity className="w-4 h-4 text-cyan-400" />
                Befreiung von Ressourcenknappheit
              </h3>
              <p className="text-slate-400">
                Durch die Verschmelzung von atomarer Nanomaterie und ressourcenloser Neutrino-Energie wandelt das Gadget Umgebungsmaterie in sterile Werkzeuge, Trinkwasser und Nahrung um. Der Mensch ist überall auf der Erde und im Weltall autark.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                Vollkommene biologische Resilienz
              </h3>
              <p className="text-slate-400">
                Die Fortführung von Penicillin, CRISPR-Cas9 und moderner Spektroskopie schafft einen unsichtbaren Schutzschild gegen zelluläre Alterung, genetische Defekte und pandemische Erreger.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                Symbiotische Kognition
              </h3>
              <p className="text-slate-400">
                Statt den Menschen durch Bildschirme zu isolieren, fungiert AETHEON als neurale Brücke. Es übersetzt Gedanken in physische Realität und stellt das gesamte kollektive Wissen der Zivilisation zur Verfügung.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet, Clean Footer */}
      <footer className="border-t border-slate-800/80 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            AETHEON · Synthese aller Erfindungen der Menschheit
          </div>
          <div>
            Entwickelt für wissenschaftliche & zukunftsforscherische Exploration
          </div>
        </div>
      </footer>
    </div>
  );
}
