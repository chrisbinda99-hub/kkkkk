import { HumanInvention, GadgetSubsystem } from '../types/gadget';

export const GADGET_SUBSYSTEMS: GadgetSubsystem[] = [
  {
    id: 'exo_graphene_hull',
    name: 'Morpho-Graphen Exoskelett',
    designation: 'Subsystem 01 // Physikalische Struktur & Metamaterie',
    ancestorInventions: ['Rad & Achse', 'Bronze- & Eisenmetallurgie', 'Formgedächtnislegierungen', 'Graphen-Synthese'],
    physicsPrinciple: 'Kohlenstoff-Allotrop-Hexagonal-Gitter mit piezoelektrischen Nanotubes für adaptive Härte und molekulare Dämpfung',
    technicalSpecs: [
      { key: 'Zugfestigkeit', value: '130', unit: 'GPa' },
      { key: 'Dichte', value: '0.16', unit: 'g/cm³' },
      { key: 'Form-Adaptionszeit', value: '4.8', unit: 'ms' },
      { key: 'Thermischer Schutz', value: '3800', unit: '°C' }
    ],
    description: 'Das Gehäuse passt sich biomechanisch der menschlichen Handfläche oder jedem Werkzeugträger an. Es widersteht extremen Drücken, Hitze und Vakuum und kann Kanten, Griffe oder feine Sonden ausbilden.',
    readinessLevel: 'Labortestung (TRL 5)',
    accentColor: '#06b6d4'
  },
  {
    id: 'micro_fusion_core',
    name: 'Resonante Nullpunkt- & Fusionszelle',
    designation: 'Subsystem 02 // Primäre Energiequelle & Umwandlung',
    ancestorInventions: ['Beherrschung des Feuers', 'Dampfmaschine & Carnot-Zyklus', 'Galvanische Batterie', 'Kernspaltung', 'Tokamak-Fusion'],
    physicsPrinciple: 'Trägheits-Mikro-Deuterium-Fusion gekoppelt mit piezoelektrischer Vakuum-Fluktuations-Ernte (Casimir-Resonanz)',
    technicalSpecs: [
      { key: 'Dauerleistung', value: '42.5', unit: 'kW' },
      { key: 'Puls-Spitzenlast', value: '1.2', unit: 'MW' },
      { key: 'Neutrino-Einfangrate', value: '99.4', unit: '%' },
      { key: 'Autarkie-Laufzeit', value: '120', unit: 'Jahre' }
    ],
    description: 'Vollkommen autarke Energieversorgung ohne fossile Brennstoffe oder Steckdosen. Verbraucht minimale Umgebungsatome und erntet kosmische Neutrinos für unbegrenzte Lebensdauer.',
    readinessLevel: 'Konzept & Teilplasma (TRL 4)',
    accentColor: '#f59e0b'
  },
  {
    id: 'photonic_iris',
    name: 'Optoelektronische Photonen-Iris',
    designation: 'Subsystem 03 // Festes Licht & Haptische Holographie',
    ancestorInventions: ['Glas- & Quarzlinsen', 'Mikroskop & Teleskop', 'Maxwell-Lichtwellen', 'Laser & Glasfaser'],
    physicsPrinciple: 'Akusto-optische Beugungsgitter und kohärente Laser-Interferenz zur Verdichtung von Photonen zu taktilem "festem Licht"',
    technicalSpecs: [
      { key: 'Hologramm-Auflösung', value: '64.000', unit: 'DPI' },
      { key: 'Haptischer Gegendruck', value: '45.0', unit: 'N/cm²' },
      { key: 'Spektralbereich', value: '0.1 - 1200', unit: 'nm' },
      { key: 'Projektions-Radius', value: '8.5', unit: 'm' }
    ],
    description: 'Ersetzt jeden Glasbildschirm der Menschheit. Erzeugt freischwebende, vollwertig greifbare 3D-Interfaces, Werkzeug-Projektionen und optische Schutzschilde im Raum.',
    readinessLevel: 'Optische Vorstufen (TRL 6)',
    accentColor: '#38bdf8'
  },
  {
    id: 'synaptic_bci',
    name: 'Synaptischer Resonanz-Transducer',
    designation: 'Subsystem 04 // Neurale Kognition & Bio-Symbiose',
    ancestorInventions: ['Schrift & Keilschrift', 'Gutenberg-Druck', 'Telegraph & Telefon', 'Elektroenzephalographie (EEG)', 'Neuralink BCI'],
    physicsPrinciple: 'Quanten-Magneto-Enzephalographie (MEG) im Sub-Pikotesla-Bereich zur Erfassung neuronaler Aktionspotenziale ohne Gewebepenetration',
    technicalSpecs: [
      { key: 'Latenz Gedanke-Aktion', value: '0.8', unit: 'ms' },
      { key: 'Kanal-Dichte', value: '10.000.000', unit: 'Synapsen/s' },
      { key: 'Biokompatibilität', value: '100', unit: '%' },
      { key: 'Semantische Treue', value: '99.98', unit: '%' }
    ],
    description: 'Macht Tasten, Mäuse und Sprachbefehle obsolet. Das Gadget erfasst die Absicht des Nutzers synchron mit der neuronalen Entladung und antwortet über mikroskopische Haptik-Reize.',
    readinessLevel: 'Frontier-Neurowissenschaft (TRL 5)',
    accentColor: '#10b981'
  },
  {
    id: 'quantum_causal_core',
    name: 'Supraleitender Quanten-Kausalitätsring',
    designation: 'Subsystem 05 // Prädiktive Kausal-Berechnung',
    ancestorInventions: ['Antikythera-Mechanismus', 'Abakus & Rechenschieber', 'Turing-Maschine', 'Transistor & Siliziumchip', 'Qubit-Prozessoren'],
    physicsPrinciple: 'Topologische Majorana-Qubits mit phononischer Schwingungsdämpfung für fehlerkorrigierte Quantenüberlagerung bei Raumtemperatur',
    technicalSpecs: [
      { key: 'Kohärente Qubits', value: '4.096', unit: 'Qubits' },
      { key: 'Gatter-Fehlerrate', value: '10⁻¹²', unit: '1/Gate' },
      { key: 'Kausalitäts-Horizont', value: '72', unit: 'Stunden' },
      { key: 'Berechnungs-Dichte', value: '10²⁴', unit: 'Ops/s' }
    ],
    description: 'Berechnet physikalische Wahrscheinlichkeiten von Wetter, Materialermüdung, Krankheitsausbrüchen und chemischen Reaktionen in Echtzeit und bietet optimale Entscheidungsvektoren.',
    readinessLevel: 'Frontier-Quantenphysik (TRL 4)',
    accentColor: '#8b5cf6'
  },
  {
    id: 'nanite_assembler',
    name: 'Atomarer Naniten-Matrix-Assembler',
    designation: 'Subsystem 06 // Universelle Materie-Synthese',
    ancestorInventions: ['Steinwerkzeuge & Faustkeile', 'Dampf-Webstühle', '3D-Drucker & Stereolithographie', 'CRISPR-Cas9', 'Molekulare Assembler'],
    physicsPrinciple: 'Optisch gesteuerte Nanoroboter mit molekularen Greifern zur schrittweisen Synthese von chemischen Verbindungen, Werkzeugen und Medizin',
    technicalSpecs: [
      { key: 'Assemblierungs-Tempo', value: '25.0', unit: 'g/min' },
      { key: 'Atomare Präzision', value: '0.12', unit: 'nm' },
      { key: 'Recycling-Effizienz', value: '99.95', unit: '%' },
      { key: 'Element-Vorratsbank', value: '92', unit: 'Elemente' }
    ],
    description: 'Ermöglicht dem Träger, aus Schmutz, Wasser und Luft reine Trinkwasserfilter, medizinische Antidote, chirurgische Instrumente oder Ersatzteile direkt vor Ort zu erzeugen.',
    readinessLevel: 'Nanotech-Synthese (TRL 4)',
    accentColor: '#ec4899'
  }
];

export const HUMAN_INVENTIONS: HumanInvention[] = [
  // URZEIT & ANTIKE
  {
    id: 'fire_control',
    name: 'Beherrschung des Feuers',
    year: 'ca. 1.000.000 v. Chr.',
    epoch: 'urzeit_antike',
    domain: 'energie_thermodynamik',
    pioneers: 'Homo erectus',
    breakthroughConcept: 'Katalyse chemischer Exothermie zur Beherrschung von Wärme, Schutz und Energie.',
    legacyImpact: 'Fundament aller menschlichen Technologie, Metallbearbeitung und Energieübertragung.',
    gadgetEvolution: {
      targetSubsystem: 'Resonante Nullpunkt- & Fusionszelle',
      subsystemId: 'micro_fusion_core',
      transformationPrinciple: 'Von unkontrollierter Holz-Oxidation über Verbrennung zur magnetisch eingesperrten Plasma-Mikrofusion.',
      futureCapability: 'Ermöglicht dem Gadget, hochenergetische Plasmen als Energiequelle und Schneidstrahl auf Abruf zu halten.'
    }
  },
  {
    id: 'wheel_and_axle',
    name: 'Das Rad & die Drehachse',
    year: 'ca. 3.500 v. Chr.',
    epoch: 'urzeit_antike',
    domain: 'mechanik_material',
    pioneers: 'Mesopotamische Zivilisation',
    breakthroughConcept: 'Umwandlung von Reibungswiderstand in rotierende Kraftübertragung und Translation.',
    legacyImpact: 'Basis aller Maschinen, Fuhrwerke, Turbinen, Getriebe und Trägheitsnavigationssysteme.',
    gadgetEvolution: {
      targetSubsystem: 'Morpho-Graphen Exoskelett',
      subsystemId: 'exo_graphene_hull',
      transformationPrinciple: 'Vom Holzrad mit Schmierachse zu supraleitenden, berührungslosen Quanten-Gyroskopen ohne Verschleiß.',
      futureCapability: 'Verleiht AETHEON gyroskopische Eigenstabilität in der Luft und reibungslose kinetische Dämpfung.'
    }
  },
  {
    id: 'metallurgy_bronze_iron',
    name: 'Metallurgie (Bronze & Eisen)',
    year: 'ca. 3.300 - 1.200 v. Chr.',
    epoch: 'urzeit_antike',
    domain: 'mechanik_material',
    pioneers: 'Frühe Hochkulturen (Naher Osten / Anatolien)',
    breakthroughConcept: 'Gezielte Schmelze, Legierungsbildung und kristalline Härtung von Metallen.',
    legacyImpact: 'Löste die Steinzeit ab und schuf dauerhafte Werkzeuge, Rüstungen und Strukturmaterialien.',
    gadgetEvolution: {
      targetSubsystem: 'Morpho-Graphen Exoskelett',
      subsystemId: 'exo_graphene_hull',
      transformationPrinciple: 'Von Kupfer-Zinn-Gemischen zu atomar präzisen Graphen-Titan-Verbundstoffen mit programmierbarer Kristallstruktur.',
      futureCapability: 'Unzerstörbare Gehäusestruktur, die sich bei Stößen verhärtet (nicht-newtonsche Metamaterie).'
    }
  },
  {
    id: 'script_and_cuneiform',
    name: 'Schrift & Symbol-Codierung',
    year: 'ca. 3.200 v. Chr.',
    epoch: 'urzeit_antike',
    domain: 'signal_information',
    pioneers: 'Sumerer (Keilschrift) / Ägypter (Hieroglyphen)',
    breakthroughConcept: 'Entkopplung von Information von biologischer Präsenz und flüchtiger Sprache in beständige Zeichen.',
    legacyImpact: 'Ermöglichte kumulatives menschliches Wissen über Generationen hinweg.',
    gadgetEvolution: {
      targetSubsystem: 'Synaptischer Resonanz-Transducer',
      subsystemId: 'synaptic_bci',
      transformationPrinciple: 'Von Tontafeln über Buchdruck und Maschinencode zu direkter neuronaler Symbol- und Konzept-Telepathie.',
      futureCapability: 'Gedankliche Echtzeit-Kommunikation und semantisches Wissens-Streaming ohne Textanzeige.'
    }
  },
  {
    id: 'optics_glass_lenses',
    name: 'Glasherstellung & Optische Linsen',
    year: 'ca. 1.500 v. Chr. / 1. Jhdt. n. Chr.',
    epoch: 'urzeit_antike',
    domain: 'optik_quanten',
    pioneers: 'Phönizier / Römer / Später Nimrud-Linse',
    breakthroughConcept: 'Refraktion elektromagnetischer Wellen zur Vergrößerung, Bündelung und Abbildung der Welt.',
    legacyImpact: 'Voraussetzung für Brillen, Mikroskope, Teleskope, Kameras und Laser.',
    gadgetEvolution: {
      targetSubsystem: 'Optoelektronische Photonen-Iris',
      subsystemId: 'photonic_iris',
      transformationPrinciple: 'Von geschliffenem Quarzglas zu photonischen Metamaterialien mit negativem Brechungsindex.',
      futureCapability: 'Ermöglicht sub-lichtwellige Fokussierung und die Generierung von festem Licht im freien Raum.'
    }
  },
  {
    id: 'antikythera_mechanism',
    name: 'Antikythera-Mechanismus',
    year: 'ca. 100 v. Chr.',
    epoch: 'urzeit_antike',
    domain: 'signal_information',
    pioneers: 'Griechische Astronomen / Archimedes-Schule',
    breakthroughConcept: 'Erster analoger Getrieberechner zur Vorhersage von Himmelsbewegungen und Finsternissen.',
    legacyImpact: 'Geburtsstunde der mechanischen Simulation und kybernetischen Zukunftsprädiktion.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von 30 Bronzezahnrädern zum 4.096-Qubit-Topologiekern, der Kausalitätswellen berechnet.',
      futureCapability: 'Simuliert makroskopische Zukunftsverläufe und liefert Wahrscheinlichkeitsentscheidungen in Mikrosekunden.'
    }
  },
  {
    id: 'magnetic_compass',
    name: 'Magnetkompass',
    year: 'ca. 200 v. Chr. / 11. Jhdt.',
    epoch: 'urzeit_antike',
    domain: 'signal_information',
    pioneers: 'Han-Dynastie (China)',
    breakthroughConcept: 'Nutzung des planetaren Erdmagnetfelds zur absoluten vektoriellen Orientierung.',
    legacyImpact: 'Ermöglichte globale Seefahrt, Entdeckungsreisen und moderne Geoinformationssysteme.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von der magnetisierten Eisennadel zur Messung gravitativer Raumzeit-Krümmungen und Quantenfeld-Tensoren.',
      futureCapability: 'Exakte Lokalisierung im interstellaren Raum und in Höhlen ohne GPS-Satellitenverbindung.'
    }
  },

  // RENAISSANCE & AUFKLÄRUNG
  {
    id: 'gutenberg_press',
    name: 'Buchdruck mit beweglichen Lettern',
    year: '1440',
    epoch: 'renaissance_aufklaerung',
    domain: 'signal_information',
    pioneers: 'Johannes Gutenberg',
    breakthroughConcept: 'Mechanisierte Reproduzierbarkeit von Wissen und dezentrale Informations-Demokratisierung.',
    legacyImpact: 'Zündfunke für wissenschaftliche Revolution, Alphabetisierung und weltweite Bildungsnetzwerke.',
    gadgetEvolution: {
      targetSubsystem: 'Synaptischer Resonanz-Transducer',
      subsystemId: 'synaptic_bci',
      transformationPrinciple: 'Vom Bleisatz zum instantanen Download des gesamten Wissensbestands der Menschheit in das neurale Interface.',
      futureCapability: 'Jedes Buch, Patent und wissenschaftliche Paper ist im Gadget in 0 Millisekunden abrufbereit.'
    }
  },
  {
    id: 'microscope_telescope',
    name: 'Mikroskop & Astronomisches Teleskop',
    year: '1590 / 1608',
    epoch: 'renaissance_aufklaerung',
    domain: 'optik_quanten',
    pioneers: 'Zacharias Janssen / Hans Lippershey / Galileo Galilei',
    breakthroughConcept: 'Erweiterung der menschlichen Sehkraft in den Mikrokosmos (Zellen) und Makrokosmos (Planeten).',
    legacyImpact: 'Entdeckung von Mikroorganismen und Bestätigung des heliozentrischen Weltbilds.',
    gadgetEvolution: {
      targetSubsystem: 'Optoelektronische Photonen-Iris',
      subsystemId: 'photonic_iris',
      transformationPrinciple: 'Von zweilinsigen Röhren zur multimodalen Sensorik, die Moleküle und ferne Galaxien im selben Strahl erfasst.',
      futureCapability: 'Durchleuchtet feste Materie und zeigt molekulare Bindungen holographisch in Echtzeit an.'
    }
  },
  {
    id: 'steam_engine',
    name: 'Dampfmaschine & Thermodynamik',
    year: '1712 / 1769',
    epoch: 'renaissance_aufklaerung',
    domain: 'energie_thermodynamik',
    pioneers: 'Thomas Newcomen / James Watt / Sadi Carnot',
    breakthroughConcept: 'Thermodynamische Wandlung von Wärme- und Druckenergie in mechanische Nutzarbeit.',
    legacyImpact: 'Startschuss der ersten Industriellen Revolution, Eisenbahnen und Fabriksysteme.',
    gadgetEvolution: {
      targetSubsystem: 'Resonante Nullpunkt- & Fusionszelle',
      subsystemId: 'micro_fusion_core',
      transformationPrinciple: 'Von kochendem Wasserdampf zu ultra-dichten phononischen Wärmekraftwandlern auf Nanometerebene.',
      futureCapability: 'Wandelt jede Form von Umgebungshitze oder Kälteverlust zu 98,6 % rückwirkend in elektrische Ladung um.'
    }
  },
  {
    id: 'voltaic_pile',
    name: 'Voltasche Säule (Erste Batterie)',
    year: '1800',
    epoch: 'industrie_elektrizitaet',
    domain: 'energie_thermodynamik',
    pioneers: 'Alessandro Volta',
    breakthroughConcept: 'Elektrochemische Erzeugung eines kontinuierlichen elektrischen Gleichstroms.',
    legacyImpact: 'Ermöglichte Telegrafie, Galvanik und die gesamte moderne Akku- und Mobiltechnologie.',
    gadgetEvolution: {
      targetSubsystem: 'Resonante Nullpunkt- & Fusionszelle',
      subsystemId: 'micro_fusion_core',
      transformationPrinciple: 'Von Zink-Kupfer-Scheiben in Salzlake zu Festkörper-Quantenkondensatoren mit Tera-Farad-Kapazität.',
      futureCapability: 'Lädt sich in Femtosekunden auf und speichert Gigawatt-Pulse auf der Größe einer Münze.'
    }
  },

  // INDUSTRIE & ELEKTRIZITÄT
  {
    id: 'electromagnetic_induction',
    name: 'Elektromagnetische Induktion',
    year: '1831',
    epoch: 'industrie_elektrizitaet',
    domain: 'energie_thermodynamik',
    pioneers: 'Michael Faraday / Joseph Henry',
    breakthroughConcept: 'Erzeugung elektrischer Spannung durch zeitliche Veränderung magnetischer Flussdichte.',
    legacyImpact: 'Grundlage aller Generatoren, Elektromotoren, Transformatoren und des Stromnetzes.',
    gadgetEvolution: {
      targetSubsystem: 'Resonante Nullpunkt- & Fusionszelle',
      subsystemId: 'micro_fusion_core',
      transformationPrinciple: 'Von Kupferdrahtspulen zu drahtloser Magnetfeldresonanz-Energieübertragung über Kilometer.',
      futureCapability: 'Drahtlose Speisung externer Implantate und Schutzschilde ohne physischen Kontakt.'
    }
  },
  {
    id: 'electric_telegraph',
    name: 'Elektrischer Telegraf & Morse-Code',
    year: '1837',
    epoch: 'industrie_elektrizitaet',
    domain: 'signal_information',
    pioneers: 'Samuel Morse / William Fothergill Cooke',
    breakthroughConcept: 'Binäre elektrische Signalübertragung über Kontinentaldistanzen mit Lichtgeschwindigkeit.',
    legacyImpact: 'Überwand die Distanzbarriere und schuf das erste telekommunikative Nervensystem der Erde.',
    gadgetEvolution: {
      targetSubsystem: 'Synaptischer Resonanz-Transducer',
      subsystemId: 'synaptic_bci',
      transformationPrinciple: 'Vom Kupfertastenklick zur quantenverschränkten, abhörsicheren Null-Latenz-Kommunikation.',
      futureCapability: 'Verbindet den Träger mit weltweiten Mesh-Netzwerken ohne Funkwellenabstrahlung.'
    }
  },
  {
    id: 'maxwell_equations',
    name: 'Maxwells Elektrodynamik & Lichttheorie',
    year: '1865',
    epoch: 'industrie_elektrizitaet',
    domain: 'optik_quanten',
    pioneers: 'James Clerk Maxwell',
    breakthroughConcept: 'Mathematische Vereinigung von Elektrizität, Magnetismus und Licht als elektromagnetische Welle.',
    legacyImpact: 'Theoretisches Fundament von Funk, Radar, Laser, Telekommunikation und Relativität.',
    gadgetEvolution: {
      targetSubsystem: 'Optoelektronische Photonen-Iris',
      subsystemId: 'photonic_iris',
      transformationPrinciple: 'Vier Maxwell-Gleichungen werden im Gadget durch Quantenelektrodynamik (QED) erweitert.',
      futureCapability: 'Kontrolle von Licht und Feldern, die Lichtpartikel abbremsen und als feste Grenzschicht fixieren.'
    }
  },
  {
    id: 'x_ray_discovery',
    name: 'Röntgenstrahlung & Bildgebung',
    year: '1895',
    epoch: 'industrie_elektrizitaet',
    domain: 'biologie_medizin',
    pioneers: 'Wilhelm Conrad Röntgen',
    breakthroughConcept: 'Nicht-invasive Durchleuchtung von biologischem und materiellem Gewebe mit ionisierender Strahlung.',
    legacyImpact: 'Revolutionierte die medizinische Diagnostik, Materialprüfung und Kristallographie.',
    gadgetEvolution: {
      targetSubsystem: 'Atomarer Naniten-Matrix-Assembler',
      subsystemId: 'nanite_assembler',
      transformationPrinciple: 'Von schädlicher Röntgenstrahlung zu kohärenten Terahertz- und Neutrinowellen mit 0 % Strahlenschaden.',
      futureCapability: 'Vollständiger 3D-Körperscan und Knochenanalyse innerhalb von 500 Millisekunden ohne Schutzkleidung.'
    }
  },
  {
    id: 'radio_wireless',
    name: 'Drahtlose Funkübertragung & Radio',
    year: '1895',
    epoch: 'industrie_elektrizitaet',
    domain: 'signal_information',
    pioneers: 'Nikola Tesla / Guglielmo Marconi / Heinrich Hertz',
    breakthroughConcept: 'Übertragung von Sprache und Daten durch den freien Äther mittels hochfrequenter Wellen.',
    legacyImpact: 'Grundstein für Rundfunk, Radar, WLAN, Mobilfunk und Raumfahrt-Kommunikation.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Vom Funkeninduktor zum orbitalen Sub-Terahertz-Mesh mit planetarer Abdeckung.',
      futureCapability: 'Empfängt Signale aus dem Ozeanboden, tiefen Bunkern und dem erdnahen Orbit störungsfrei.'
    }
  },
  {
    id: 'penicillin_antibiotics',
    name: 'Penicillin & Moderne Antibiotika',
    year: '1928',
    epoch: 'industrie_elektrizitaet',
    domain: 'biologie_medizin',
    pioneers: 'Alexander Fleming / Florey / Chain',
    breakthroughConcept: 'Biochemische Hemmung bakterieller Zellwandsynthese zur Bekämpfung tödlicher Infektionen.',
    legacyImpact: 'Rettete hunderte Millionen Leben und erhöhte die globale Lebenserwartung dramatisch.',
    gadgetEvolution: {
      targetSubsystem: 'Atomarer Naniten-Matrix-Assembler',
      subsystemId: 'nanite_assembler',
      transformationPrinciple: 'Vom Schimmelpilz-Extrakt zu programmierbaren Nanobots, die Pathogene mechanisch zerlegen.',
      futureCapability: 'Zerstört multiresistente Keime, Viren und Toxine im Blutstrom in Sekunden, ohne Resistenzen.'
    }
  },

  // INFORMATION & HALBLEITER
  {
    id: 'turing_machine',
    name: 'Turing-Maschine & Universelle Logik',
    year: '1936',
    epoch: 'information_halbleiter',
    domain: 'signal_information',
    pioneers: 'Alan Turing',
    breakthroughConcept: 'Mathematisches Modell eines universellen Automaten, der jedes berechenbare Problem lösen kann.',
    legacyImpact: 'Geburtsstunde der theoretischen Informatik, Software und Künstlichen Intelligenz.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von der sequentiellen Turing-Band-Maschine zu massiv verschränkten Quanten-Zustandsräumen.',
      futureCapability: 'Löst NP-schwere Optimierungsprobleme und Proteinfaltungen in Sekundenbruchteilen.'
    }
  },
  {
    id: 'transistor',
    name: 'Der Halbleiter-Transistor',
    year: '1947',
    epoch: 'information_halbleiter',
    domain: 'information_halbleiter' as any,
    pioneers: 'John Bardeen / Walter Brattain / William Shockley (Bell Labs)',
    breakthroughConcept: 'Elektronischer Festkörperschalter und Verstärker auf Basis dotierter Halbleiterkristalle.',
    legacyImpact: 'Das wichtigste Bauteil des 20. Jahrhunderts; Basis aller Mikrochips, Computer und Smartphones.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von Germanium-Spitzenkontakten zu 1-Atom-Graphen-Transistoren und optischen Spin-Logikgattern.',
      futureCapability: 'Milliardenschichten von Logikgattern auf der Dicke einer Zellmembran mit nahezu 0 Watt Abwärme.'
    }
  },
  {
    id: 'dna_structure',
    name: 'DNA-Doppelhelix & Genetischer Code',
    year: '1953',
    epoch: 'information_halbleiter',
    domain: 'biologie_medizin',
    pioneers: 'Rosalind Franklin / James Watson / Francis Crick',
    breakthroughConcept: 'Entschlüsselung des molekularen Trägers aller biologischen Erbinformationen.',
    legacyImpact: 'Begründete die molekulare Genetik, Gentherapie und Biotechnologie.',
    gadgetEvolution: {
      targetSubsystem: 'Atomarer Naniten-Matrix-Assembler',
      subsystemId: 'nanite_assembler',
      transformationPrinciple: 'Vom passiven Auslesen des genetischen Codes zur aktiven Reprogrammierung geschädigter Zellen.',
      futureCapability: 'Ermöglicht epigenetische Verjüngung und sofortige Korrektur von Zellmutationen.'
    }
  },
  {
    id: 'laser_coherent_light',
    name: 'Der Laser (Kohärentes Licht)',
    year: '1960',
    epoch: 'information_halbleiter',
    domain: 'optik_quanten',
    pioneers: 'Theodore Maiman / Charles Townes',
    breakthroughConcept: 'Stimulierte Emission elektromagnetischer Strahlung zur Erzeugung monochromatischen, phasengleichen Lichts.',
    legacyImpact: 'Chirurgie, Glasfaserinternet, Barcode-Scanner, Kernfusionszündung und Halbleiter-Lithographie.',
    gadgetEvolution: {
      targetSubsystem: 'Optoelektronische Photonen-Iris',
      subsystemId: 'photonic_iris',
      transformationPrinciple: 'Vom Rubin-Kristall-Laser zu Femtosekunden-Phasen-Arrays, die optische Pinzetten im Raum formen.',
      futureCapability: 'Fasst Gegenstände berührungslos mit Lichtstrahlen (Traktorstrahl-Effekt auf Mikroskala).'
    }
  },
  {
    id: 'internet_tcp_ip',
    name: 'Internet & TCP/IP Protokoll',
    year: '1973 - 1983',
    epoch: 'information_halbleiter',
    domain: 'signal_information',
    pioneers: 'Vint Cerf / Bob Kahn / DARPA',
    breakthroughConcept: 'Paketvermitteltes, ausfallsicheres Kommunikationsprotokoll über heterogene Netzwerke hinweg.',
    legacyImpact: 'Vernetzte die Menschheit in Echtzeit und bildete das Rückgrat der globalen Zivilisation.',
    gadgetEvolution: {
      targetSubsystem: 'Synaptischer Resonanz-Transducer',
      subsystemId: 'synaptic_bci',
      transformationPrinciple: 'Vom Kupferkabel-Routing zum dezentralen Quanten-Teleportations-Mesh ohne Routerknoten.',
      futureCapability: 'Erlaubt kollektive Schwarm-Berechnung mit anderen AETHEON-Einheiten weltweit.'
    }
  },
  {
    id: 'gps_satellite_navigation',
    name: 'GPS (Satellitennavigation)',
    year: '1978',
    epoch: 'information_halbleiter',
    domain: 'signal_information',
    pioneers: 'Gladys West / Ivan Getting / Bradford Parkinson',
    breakthroughConcept: 'Relativistische Zeitmessung synchronisierter Atomuhren im Orbit zur 3D-Positionierung auf Erden.',
    legacyImpact: 'Veränderte zivile Luftfahrt, Seefahrt, Logistik und Smartphone-Ortung für immer.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von Mikrowellensatelliten zur quantenoptischen Trägheits- und Gravitationsgradienten-Kartierung.',
      futureCapability: 'Exakte Lokalisierung bis auf 0,1 Millimeter – selbst tief unter der Erde oder auf fremden Planeten.'
    }
  },
  {
    id: 'additive_manufacturing_3d',
    name: '3D-Druck (Additive Fertigung)',
    year: '1984 - 1986',
    epoch: 'information_halbleiter',
    domain: 'mechanik_material',
    pioneers: 'Chuck Hull (Stereolithographie)',
    breakthroughConcept: 'Schichtweiser Aufbau beliebiger 3D-Geometrien direkt aus digitalen CAD-Modellen.',
    legacyImpact: 'Machte Rapid Prototyping, personalisierte Implantate und werkzeuglose Produktion möglich.',
    gadgetEvolution: {
      targetSubsystem: 'Atomarer Naniten-Matrix-Assembler',
      subsystemId: 'nanite_assembler',
      transformationPrinciple: 'Vom Aushärten von UV-Harzen zum atomweisen Assemblieren von Molekülketten in Nanosekunden.',
      futureCapability: 'Erzeugt physische Gegenstände (Skalpelle, Schlüssel, Medikamente) frei schwebend aus der Luft.'
    }
  },

  // SPITZENFORSCHUNG & ZUKUNFTS-FRONTIER
  {
    id: 'graphene_2d_materials',
    name: 'Graphen & 2D-Metamaterialien',
    year: '2004',
    epoch: 'spitzenforschung_frontier',
    domain: 'mechanik_material',
    pioneers: 'Andre Geim / Konstantin Novoselov',
    breakthroughConcept: 'Einlagige Kohlenstoff-Wabenstruktur mit extremer Leitfähigkeit und 200-facher Festigkeit von Stahl.',
    legacyImpact: 'Eröffnete das Zeitalter der 2D-Materialien, flexiblen Elektronik und ballistischen Barrieren.',
    gadgetEvolution: {
      targetSubsystem: 'Morpho-Graphen Exoskelett',
      subsystemId: 'exo_graphene_hull',
      transformationPrinciple: 'Vom Tesafilm-Graphit-Abzug zu mehrwandigen, piezo-reaktiven Metamaterial-Geflechten.',
      futureCapability: 'Chassis wiegt unter 120 Gramm und fängt Überschallgeschosse oder Stürze aus dem Orbit schadlos ab.'
    }
  },
  {
    id: 'crispr_cas9',
    name: 'CRISPR-Cas9 molekulare Genschere',
    year: '2012',
    epoch: 'spitzenforschung_frontier',
    domain: 'biologie_medizin',
    pioneers: 'Emmanuelle Charpentier / Jennifer Doudna',
    breakthroughConcept: 'Präzises Schneiden und Umschreiben von DNA-Sequenzen in lebenden Organismen.',
    legacyImpact: 'Mögliche Heilung genetischer Erbkrankheiten, Ertragssteigerung von Pflanzen und synthetische Biologie.',
    gadgetEvolution: {
      targetSubsystem: 'Atomarer Naniten-Matrix-Assembler',
      subsystemId: 'nanite_assembler',
      transformationPrinciple: 'Vom bakteriellen Abwehrenzym zum vollautomatisierten In-Vivo-Genom-Korrektor im Gadget.',
      futureCapability: 'Scannt Viren- oder Krebs-Mutationen und synthestisiert in 3 Sekunden maßgeschneiderte mRNA-Gegenmittel.'
    }
  },
  {
    id: 'quantum_supremacy_qubits',
    name: 'Quantencomputer & Qubit-Verschränkung',
    year: '2019 - 2026+',
    epoch: 'spitzenforschung_frontier',
    domain: 'optik_quanten',
    pioneers: 'Forschungsteams weltweit (Google Quantum AI, IBM, Harvard, QuEra)',
    breakthroughConcept: 'Ausnutzung von Superposition und Quantenverschränkung zur simultanen Berechnung exponentieller Lösungsräume.',
    legacyImpact: 'Löst Berechnungen in Minuten, für die Supercomputer zehntausende Jahre bräuchten.',
    gadgetEvolution: {
      targetSubsystem: 'Supraleitender Quanten-Kausalitätsring',
      subsystemId: 'quantum_causal_core',
      transformationPrinciple: 'Von kryogenen Kühlschränken bei 15 Millikelvin zu raumtemperaturtauglichen topologischen Qubits.',
      futureCapability: 'Echtzeit-Optimierung aller komplexen Systeme in der Umgebung (Verkehr, Energiefluss, Wetter).'
    }
  },
  {
    id: 'brain_computer_interfaces',
    name: 'Neuronale Schnittstellen (BCI)',
    year: '2020 - 2026+',
    epoch: 'spitzenforschung_frontier',
    domain: 'biologie_medizin',
    pioneers: 'Stanford BCI / Neuralink / Synchron / Blackrock Neurotech',
    breakthroughConcept: 'Direkte bidirektionale elektrische Kopplung zwischen Großhirnrinde und digitalen Rechensystemen.',
    legacyImpact: 'Wiederherstellung von Mobilität bei Gelähmten, Prothesensteuerung und Gehirn-zu-Computer-Symbiose.',
    gadgetEvolution: {
      targetSubsystem: 'Synaptischer Resonanz-Transducer',
      subsystemId: 'synaptic_bci',
      transformationPrinciple: 'Von implantierten Elektrodenfäden zu opto-akustischen Resonanzfeldern über die Hautoberfläche.',
      futureCapability: 'Absolut schmerzfreie, nicht-invasive Schnittstelle: Denken genügt, um das Gadget vollumfänglich zu lenken.'
    }
  },
  {
    id: 'nuclear_fusion_net_gain',
    name: 'Netto-Energie Kernfusion',
    year: '2022 - 2030+',
    epoch: 'spitzenforschung_frontier',
    domain: 'energie_thermodynamik',
    pioneers: 'National Ignition Facility (NIF) / ITER / Helion Energy / Commonwealth Fusion',
    breakthroughConcept: 'Kontrollierte Verschmelzung von Wasserstoff-Isotopen mit höherem Energieertrag als Energieaufwand (Q > 1).',
    legacyImpact: 'Die ultimative Lösung der weltweiten Energiekrise: Unerschöpfliche, emissionsfreie und sichere Grundlastenergie.',
    gadgetEvolution: {
      targetSubsystem: 'Resonante Nullpunkt- & Fusionszelle',
      subsystemId: 'micro_fusion_core',
      transformationPrinciple: 'Vom fußballfeldgroßen Lasersystem zur münzgroßen magnetischen Trägheitsfusions-Kavität.',
      futureCapability: 'Liefert konstante 42 kW Leistung ohne radioaktive Abfälle oder Nachfüllbedarf für ein Menschenleben.'
    }
  }
];
