import React, { useState } from 'react';
import { Sparkles, Atom, Send, RefreshCw, Copy, Check, BookOpen, Layers } from 'lucide-react';

interface AiSynthesizerLabProps {
  selectedInventions: string[];
  onRemoveInvention: (name: string) => void;
  onClearInventions: () => void;
  onAddInvention: (name: string) => void;
}

export const AiSynthesizerLab: React.FC<AiSynthesizerLabProps> = ({
  selectedInventions,
  onRemoveInvention,
  onClearInventions,
  onAddInvention,
}) => {
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [activeFocusMode, setActiveFocusMode] = useState<string>('Universal-Synthese');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [synthesisOutput, setSynthesisOutput] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const presetScenarios = [
    {
      title: 'Zelluläre Sofort-Heilung & Seuchen-Schild',
      inventions: ['Penicillin & Moderne Antibiotika', 'Laser (Kohärentes Licht)', 'CRISPR-Cas9 molekulare Genschere'],
      prompt: 'Wie heilt das Gadget Gewebeverletzungen und neutralisiert multiresistente Erreger in Echtzeit?',
      mode: 'Biomedizinische Fusion',
    },
    {
      title: 'Autonome Wasser- & Materie-Gewinnung',
      inventions: ['Dampfmaschine & Thermodynamik', '3D-Druck (Additive Fertigung)', 'Graphen & 2D-Metamaterialien'],
      prompt: 'Wie generiert AETHEON ultra-reines Trinkwasser und sterile Werkzeuge in ariden Wüsten?',
      mode: 'Materie-Assemblierung',
    },
    {
      title: 'Interstellare Orientierung & Telemetrie',
      inventions: ['Magnetkompass', 'GPS (Satellitennavigation)', 'Quantencomputer & Qubit-Verschränkung'],
      prompt: 'Wie orientiert sich das Gadget im Tiefraum und in Höhlen ohne Satelliten?',
      mode: 'Quanten-Navigation',
    },
    {
      title: 'Latenzfreie Gedankensteuerung & Wissens-Download',
      inventions: ['Schrift & Symbol-Codierung', 'Buchdruck mit beweglichen Lettern', 'Neuronale Schnittstellen (BCI)'],
      prompt: 'Wie wird das gesamte Wissen der Menschheit direkt im menschlichen Kortex abrufbar?',
      mode: 'Synaptische Symbiose',
    },
  ];

  const handleSynthesize = async (promptOverride?: string, inventionsOverride?: string[]) => {
    setIsLoading(true);
    setErrorMsg(null);

    const promptToSend = promptOverride || customPrompt;
    const inventionsToSend = inventionsOverride || selectedInventions;

    try {
      const response = await fetch('/api/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: promptToSend,
          selectedInventions: inventionsToSend,
          mode: activeFocusMode,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server antwortete mit Status ${response.status}`);
      }

      const data = await response.json();
      setSynthesisOutput(data.result);
    } catch (err: any) {
      setErrorMsg(err.message || 'Fehler bei der Synthese-Generierung.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!synthesisOutput) return;
    navigator.clipboard.writeText(synthesisOutput);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleApplyPreset = (preset: typeof presetScenarios[0]) => {
    onClearInventions();
    preset.inventions.forEach((inv) => onAddInvention(inv));
    setCustomPrompt(preset.prompt);
    setActiveFocusMode(preset.mode);
    handleSynthesize(preset.prompt, preset.inventions);
  };

  return (
    <div id="syntheselabor" className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          02. KI-Syntheselabor & Zukunfts-Generator
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
          Kreuzungs-Matrix: Verschmelze Erfindungen zu neuen Gadget-Fähigkeiten
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Wähle beliebige Erfindungen der Menschheit aus der Historie oder formuliere ein physikalisches Zielszenario. Die server-seitige KI-Synthese berechnet die wissenschaftliche Konvergenz im AETHEON-Gadget.
        </p>
      </div>

      {/* Preset Scenarios Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {presetScenarios.map((sc, i) => (
          <button
            key={i}
            onClick={() => handleApplyPreset(sc)}
            className="p-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl text-left transition-all flex flex-col justify-between gap-2 cursor-pointer group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono text-cyan-400 font-medium">{sc.mode}</span>
              <h4 className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {sc.title}
              </h4>
            </div>
            <div className="text-[11px] text-slate-400 line-clamp-2">
              {sc.inventions.join(' + ')}
            </div>
          </button>
        ))}
      </div>

      {/* Main Synthesizer Workstation */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col gap-4">
        {/* Selected Inventions Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Atom className="w-4 h-4 text-cyan-400" />
              Ausgewählte Erfindungs-Gene ({selectedInventions.length}):
            </span>
            {selectedInventions.length > 0 && (
              <button
                onClick={onClearInventions}
                className="text-slate-400 hover:text-slate-200 text-xs cursor-pointer"
              >
                Auswahl leeren
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 min-h-[38px] p-2 bg-slate-950 border border-slate-800/80 rounded-lg">
            {selectedInventions.length === 0 ? (
              <span className="text-xs text-slate-500 italic pl-1">
                Klicke in der Genealogie-Tabelle auf "Für Synthese", wähle oben ein Szenario oder tippe unten eine Frage ein.
              </span>
            ) : (
              selectedInventions.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-cyan-950/40 border border-cyan-800/50 rounded text-xs text-cyan-300"
                >
                  <span>{name}</span>
                  <button
                    onClick={() => onRemoveInvention(name)}
                    className="hover:text-red-400 font-bold ml-1 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Custom Prompt & Focus Mode */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="z.B. Wie nutzt AETHEON die Dampfmaschine und Quanten-Qubits zur Null-Emissions-Energie?"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSynthesize();
              }}
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            onClick={() => handleSynthesize()}
            disabled={isLoading}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            {isLoading ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>Synthese berechnen</span>
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-lg text-xs text-red-300">
            {errorMsg}
          </div>
        )}

        {/* Output Presentation Box */}
        {synthesisOutput && (
          <div className="mt-2 bg-slate-950 border border-slate-800/90 rounded-xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-slate-200">
                  Wissenschaftliches Gutachten: Evolutionärer Konvergenzvektor
                </h3>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{isCopied ? 'Kopiert' : 'Kopieren'}</span>
              </button>
            </div>

            {/* Markdown rendered content formatted with clean prose */}
            <div className="text-xs text-slate-300 leading-relaxed space-y-4 font-normal">
              {synthesisOutput.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('###') || paragraph.startsWith('**1.') || paragraph.startsWith('**2.') || paragraph.startsWith('**3.') || paragraph.startsWith('**4.')) {
                  return (
                    <div key={idx} className="font-semibold text-slate-100 text-sm border-l-2 border-cyan-500 pl-3 pt-1">
                      {paragraph.replace(/###/g, '').trim()}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
