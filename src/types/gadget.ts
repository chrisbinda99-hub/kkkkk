export type InventionEpoch = 
  | 'urzeit_antike' 
  | 'renaissance_aufklaerung' 
  | 'industrie_elektrizitaet' 
  | 'information_halbleiter' 
  | 'spitzenforschung_frontier';

export type InventionDomain = 
  | 'mechanik_material' 
  | 'energie_thermodynamik' 
  | 'signal_information' 
  | 'biologie_medizin' 
  | 'optik_quanten';

export interface HumanInvention {
  id: string;
  name: string;
  year: string;
  epoch: InventionEpoch;
  domain: InventionDomain;
  pioneers: string;
  breakthroughConcept: string;
  legacyImpact: string;
  gadgetEvolution: {
    targetSubsystem: string;
    subsystemId: string;
    transformationPrinciple: string;
    futureCapability: string;
  };
}

export type GadgetOperatingMode = 
  | 'analyse_scan' 
  | 'materie_synthese' 
  | 'bio_regeneration' 
  | 'quanten_praediktion' 
  | 'resonanz_energie';

export interface GadgetSubsystem {
  id: string;
  name: string;
  designation: string;
  ancestorInventions: string[];
  physicsPrinciple: string;
  technicalSpecs: {
    key: string;
    value: string;
    unit: string;
  }[];
  description: string;
  readinessLevel: string;
  accentColor: string;
}
