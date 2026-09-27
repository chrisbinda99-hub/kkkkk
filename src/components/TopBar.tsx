import React from 'react';

interface TopBarProps {
  onTriggerQuickScan: () => void;
  onNavigateToSection: (id: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onTriggerQuickScan,
  onNavigateToSection,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-slate-100 font-display hover:text-cyan-400 transition-colors whitespace-nowrap"
        >
          AETHEON
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <a
            href="#simulator"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('simulator');
            }}
            className="hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            Simulator
          </a>
          <a
            href="#genealogie"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('genealogie');
            }}
            className="hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            Genealogie
          </a>
          <a
            href="#syntheselabor"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('syntheselabor');
            }}
            className="hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            KI-Syntheselabor
          </a>
          <a
            href="#bauplan"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('bauplan');
            }}
            className="hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            Bauplan
          </a>
          <a
            href="#vision"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('vision');
            }}
            className="hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            Vision
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onTriggerQuickScan}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Impuls-Scan
          </button>
        </div>
      </div>
    </header>
  );
};
