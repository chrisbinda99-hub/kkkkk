import React, { useState, useMemo } from 'react';
import { HUMAN_INVENTIONS } from '../data/inventions';
import { HumanInvention, InventionEpoch, InventionDomain } from '../types/gadget';
import { Search, Filter, ArrowRight, Sparkles, ExternalLink, Cpu } from 'lucide-react';

interface InventionTimelineProps {
  onHighlightSubsystem: (subsystemId: string) => void;
  onSelectForSynthesis: (inventionName: string) => void;
  selectedInventionsForSynthesis: string[];
}

export const InventionTimeline: React.FC<InventionTimelineProps> = ({
  onHighlightSubsystem,
  onSelectForSynthesis,
  selectedInventionsForSynthesis,
}) => {
  const [selectedEpoch, setSelectedEpoch] = useState<string>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedInventionId, setExpandedInventionId] = useState<string | null>(null);

  const epochs: { id: string; label: string; time: string }[] = [
    { id: 'all', label: 'Alle Epochen', time: 'Gesamte Historie' },
    { id: 'urzeit_antike', label: 'Urzeit & Antike', time: '1 Mio. v. Chr. – 500 n. Chr.' },
    { id: 'renaissance_aufklaerung', label: 'Renaissance & Aufklärung', time: '1400 – 1800' },
    { id: 'industrie_elektrizitaet', label: 'Industrie & Elektrik', time: '1800 – 1940' },
    { id: 'information_halbleiter', label: 'Information & Halbleiter', time: '1940 – 2000' },
    { id: 'spitzenforschung_frontier', label: 'Spitzenforschung & Quanten', time: '2000 – 2030+' },
  ];

  const domains: { id: string; label: string }[] = [
    { id: 'all', label: 'Alle Fachbereiche' },
    { id: 'mechanik_material', label: 'Mechanik & Metamaterial' },
    { id: 'energie_thermodynamik', label: 'Energie & Thermodynamik' },
    { id: 'signal_information', label: 'Signal & Information' },
    { id: 'biologie_medizin', label: 'Biologie & Medizin' },
    { id: 'optik_quanten', label: 'Optik & Quanten' },
  ];

  const filteredInventions = useMemo(() => {
    return HUMAN_INVENTIONS.filter((inv) => {
      const matchEpoch = selectedEpoch === 'all' || inv.epoch === selectedEpoch;
      const matchDomain = selectedDomain === 'all' || inv.domain === selectedDomain;
      const matchQuery =
        searchQuery === '' ||
        inv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.pioneers.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.breakthroughConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.gadgetEvolution.targetSubsystem.toLowerCase().includes(searchQuery.toLowerCase());
      return matchEpoch && matchDomain && matchQuery;
    });
  }, [selectedEpoch, selectedDomain, searchQuery]);

  return (
    <div id="genealogie" className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          01. Genealogie der Menschlichen Genialität
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
          Wie 1.000.000 Jahre Menschheitserfindungen in AETHEON konvergieren
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Keine Technologie entsteht im Vakuum. Jede Faser des evolutionären Zukunftsgadgets baut auf konkreten Durchbrüchen der Weltgeschichte auf – vom ersten Funken des Urmenschen bis zur Qubit-Verschränkung.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between bg-slate-900/60 p-3 rounded-xl border border-slate-800">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Nach Erfindungen, Pionieren oder Gadget-Funktionen suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Epoch Selector */}
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          <span className="text-[11px] text-slate-500 font-mono px-2 hidden sm:inline">EPOCHE:</span>
          {epochs.map((ep) => (
            <button
              key={ep.id}
              onClick={() => setSelectedEpoch(ep.id)}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedEpoch === ep.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {ep.label}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Quick Filters */}
      <div className="flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-500 text-[11px] font-mono shrink-0">DISZIPLIN:</span>
        {domains.map((dom) => (
          <button
            key={dom.id}
            onClick={() => setSelectedDomain(dom.id)}
            className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
              selectedDomain === dom.id
                ? 'bg-slate-200 text-slate-900 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {dom.label}
          </button>
        ))}
        <span className="text-slate-500 text-xs ml-auto font-mono shrink-0 tabular-nums">
          {filteredInventions.length} Treffer
        </span>
      </div>

      {/* Inventions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInventions.map((inv) => {
          const isExpanded = expandedInventionId === inv.id;
          const isSelectedForSynth = selectedInventionsForSynthesis.includes(inv.name);

          return (
            <div
              key={inv.id}
              className={`bg-slate-950/70 border rounded-xl p-4 transition-all flex flex-col justify-between ${
                isSelectedForSynth
                  ? 'border-cyan-500/60 bg-cyan-950/20 shadow-md'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Clean unboxed metadata according to Zero-Pill discipline */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-2">
                  <span className="text-cyan-400 font-semibold">{inv.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{inv.pioneers}</span>
                </div>

                <h3 className="text-base font-semibold text-slate-100 mb-1.5 flex items-center justify-between">
                  <span>{inv.name}</span>
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {inv.breakthroughConcept}
                </p>

                {/* Subsystem convergence link box */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 mb-3 flex flex-col gap-1">
                  <div className="text-[10px] uppercase font-mono text-cyan-400/90 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> Konvergenz-Ziel in AETHEON:
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {inv.gadgetEvolution.targetSubsystem}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-normal">
                    {inv.gadgetEvolution.transformationPrinciple}
                  </div>
                </div>

                {/* Expanded capability preview */}
                {isExpanded && (
                  <div className="bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60 mb-3 text-xs flex flex-col gap-1.5 text-slate-300">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">
                      Erweiterte Gadget-Funktion:
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {inv.gadgetEvolution.futureCapability}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-900 mt-2">
                <button
                  onClick={() => onHighlightSubsystem(inv.gadgetEvolution.subsystemId)}
                  className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded text-xs transition-colors flex items-center gap-1 cursor-pointer font-medium"
                  title="Im 3D-Modell hervorheben"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                  <span>Subsystem</span>
                </button>

                <button
                  onClick={() => onSelectForSynthesis(inv.name)}
                  className={`px-2.5 py-1.5 rounded text-xs transition-colors flex items-center gap-1 cursor-pointer font-medium ${
                    isSelectedForSynth
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{isSelectedForSynth ? 'Gewählt' : 'Für Synthese'}</span>
                </button>

                <button
                  onClick={() => setExpandedInventionId(isExpanded ? null : inv.id)}
                  className="text-xs text-slate-400 hover:text-slate-200 ml-auto cursor-pointer"
                >
                  {isExpanded ? 'Weniger' : 'Details'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
