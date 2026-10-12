export interface ServiceItem {
  id: string;
  name: string;
  shortSummary: string;
  purpose: string;
  value: string;
  benefits: string[];
  scopePoints: string[];
  testingMethods: string[];
  standardsReferenced: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  keyApplications: string[];
  relevance: string;
}

export const COMPANY_INFO = {
  name: 'Sutton Oasis Technical Services LLC',
  legalName: 'Sutton Oasis Technical Services L.L.C.',
  location: 'Dubai, United Arab Emirates',
  postalAddress: 'P.O. Box 187007, Dubai, UAE',
  email: 'info@suttonoasis.com',
  telephone: '+971 54 130 4006',
  telephoneRaw: '+971541304006',
  workingHours: 'Sunday – Thursday: 8:00 AM – 5:30 PM | Friday: By Appointment',
  tagline: 'Precision MEP Testing, Commissioning Validation & Diagnostic Engineering',
  motto: 'Precision. Performance. Peace of Mind.',
  pillars: [
    { title: 'Testing', icon: 'Wind', description: 'Empirical measurement and diagnostic evaluation across HVAC and electrical systems.' },
    { title: 'Commissioning', icon: 'Cog', description: 'Systematic functional verification ensuring equipment runs to design intent.' },
    { title: 'Validation', icon: 'ShieldCheck', description: 'Independent compliance auditing and verified condition surveying.' },
    { title: 'Performance Optimization', icon: 'TrendingUp', description: 'Energy efficiency, airflow balancing, and asset longevity enhancement.' },
  ],
  establishedNote: 'Serving Dubai and across the United Arab Emirates',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hvac-testing-balancing',
    name: 'HVAC Testing and Balancing (TAB)',
    shortSummary: 'Comprehensive air and hydronic system measurement, regulation, and verification to achieve specified design performance.',
    purpose: 'To ensure all air handling units, fan coil units, duct networks, and terminal diffusers deliver the exact designed volumetric airflow rates, temperature distribution, and air pressure differentials across all occupied zones.',
    value: 'Eliminates hot spots, poor indoor air circulation, excessive noise, and thermal discomfort while lowering fan motor energy consumption through balanced system resistance.',
    benefits: [
      'Balanced indoor comfort and temperature stability across all building zones',
      'Lower energy consumption through optimized fan speed and hydraulic distribution',
      'Compliance with project MEP design specifications and handover criteria',
      'Early identification of restricted dampers, duct bends, and ductwork bottlenecks',
    ],
    scopePoints: [
      'Total system volumetric airflow (CFM / L/s) measurement at AHUs and FCUs',
      'Terminal air diffuser and grille balancing using calibrated airflow capture hoods',
      'Static pressure profiling, filter differential pressure checks, and fan RPM verification',
      'Hydronic chilled water balancing of control valves and secondary pump circuits',
    ],
    testingMethods: [
      'Calibrated electronic capture hoods (balometers) for terminal air devices',
      'Pitot tube traverse in straight duct sections for high-accuracy velocity profiles',
      'Digital micro-manometers for differential pressure measurements',
      'Optical tachometers and clamp-on electrical power meters for fan speed and motor load',
    ],
    standardsReferenced: 'Executed in line with ASHRAE, CIBSE Code W, and NEBB testing guidelines',
    iconName: 'Wind',
    imageSrc: '/images/hvac-air-handler.jpg',
    imageAlt: 'Commercial HVAC Air Handling Unit and air distribution balancing plant in Dubai',
  },
  {
    id: 'mep-validation-survey',
    name: 'MEP Validation Survey',
    shortSummary: 'Rigorous engineering audit and condition survey of installed mechanical, electrical, and plumbing infrastructure.',
    purpose: 'To provide commercial developers, tenants, facility managers, and engineering consultants with an empirical, non-biased verification of installed MEP plant condition, installation integrity, and operational capacity prior to fit-out, handover, or lease transition.',
    value: 'Prevents unexpected handover delays, mitigates commercial liabilities, identifies legacy defects before tenancy fit-outs, and cross-checks actual installation against as-built drawings.',
    benefits: [
      'Independent technical verification for pre-lease and pre-handover milestones',
      'Clear itemized defect registers and non-compliance schedules with corrective recommendations',
      'Baseline capacity assessment for tenancy upgrades and fit-out approvals',
      'Full verification of schematic accuracy versus physical on-site installations',
    ],
    scopePoints: [
      'Plant room equipment condition assessment (chillers, pumps, fans, panels, risers)',
      'Verification of equipment nameplate data against approved MEP submittals and drawings',
      'Pipework, valve stations, and ductwork routing inspection for physical installation standards',
      'Identification of accessibility constraints for ongoing facility maintenance operations',
    ],
    testingMethods: [
      'Physical visual and dimensional inspection protocols by seasoned MEP engineers',
      'Operational capacity spot-checks under live building loads',
      'Systematic photo-documented defect reporting referenced by floor and plant room',
      'Review of testing logs, maintenance history, and as-built schematic reconciliation',
    ],
    standardsReferenced: 'Aligned with UAE MEP engineering practices and local authority guidelines',
    iconName: 'ClipboardCheck',
    imageSrc: '/images/mep-validation.jpg',
    imageAlt: 'Mechanical room piping and central plant MEP validation survey inspection',
  },
  {
    id: 'thermographic-survey',
    name: 'Thermographic Survey',
    shortSummary: 'Non-destructive infrared thermal imaging to identify electrical overloads, high-resistance connections, and insulation failures.',
    purpose: 'To detect elevated temperatures, thermal anomalies, phase imbalances, and loose electrical connections inside distribution boards, switchgear, and control panels before catastrophic failures or fire hazards occur.',
    value: 'Completely non-invasive diagnostic testing conducted while systems remain safely energized under normal operational load—minimizing costly downtime and preventing unplanned outages.',
    benefits: [
      'Early detection of high-resistance terminals, phase imbalances, and overloaded breakers',
      'Prevention of electrical fire hazards and catastrophic switchboard burnouts',
      'Zero interruption to business operations—performed under active live facility loads',
      'Comprehensive radiometric thermograms provided with precise delta-T temperature differential analysis',
    ],
    scopePoints: [
      'Main Distribution Boards (MDB), Sub-Main Boards (SMDB), and Final Distribution Boards (DB)',
      'Motor Control Centers (MCC), busbar trunking joints, and capacitor banks',
      'Transformer terminal connections and uninterruptible power supply (UPS) links',
      'Building envelope and cold-room insulation thermal bridge assessment',
    ],
    testingMethods: [
      'High-resolution calibrated thermal infrared imaging cameras',
      'Emissivity adjustment according to conductor materials and surface finishes',
      'Delta-T severity grading based on temperature differentials above ambient / adjacent phases',
      'Simultaneous true-color digital photography for exact physical component identification',
    ],
    standardsReferenced: 'Conducted according to ASTM E1934 and NFPA 70B infrared inspection guidelines',
    iconName: 'Flame',
    imageSrc: '/images/thermographic-survey.jpg',
    imageAlt: 'Infrared radiometric thermogram of electrical switchboard showing hotspot inspection',
  },
  {
    id: 'duct-leakage-testing',
    name: 'Duct Leakage Testing',
    shortSummary: 'Precision positive and negative pressure testing to quantify air leakage rates in supply, return, and exhaust duct networks.',
    purpose: 'To verify that fabricated and installed sheet metal air duct systems comply with airtightness specifications and maximum allowable air leakage limits prior to ceiling closure and insulation.',
    value: 'Ensures that conditioned cooling air reaches intended occupied spaces rather than escaping into ceiling plenums, directly preventing moisture condensation, cooling loss, and bloated utility bills.',
    benefits: [
      'Ensures full compliance with project specifications before ceiling closure',
      'Direct reduction in HVAC cooling loads and chilled air losses in hot UAE climate conditions',
      'Prevents unconditioned air infiltration, ceiling condensation, and indoor humidity issues',
      'Authoritative testing reports required for consultant sign-off and building completion',
    ],
    scopePoints: [
      'High, medium, and low-pressure supply, return, and fresh air ductwork sections',
      'Temporary pneumatic or sealed bladder isolation of test sections and branch taps',
      'Static pressure verification to specified test pressures (e.g. 250 Pa, 500 Pa, 1000 Pa)',
      'Permissible leakage rate calculation based on duct surface area and classification class',
    ],
    testingMethods: [
      'Calibrated duct leakage tester with calibrated orifice flow nozzles',
      'Precision digital differential pressure transmitters',
      'Acoustic and smoke tracing for pinpointing joint and seam leakages if threshold exceeded',
      'Re-testing and immediate verification post-resealing of detected leak points',
    ],
    standardsReferenced: 'Compliant with DW/144 Class A, B, C and SMACNA HVAC Air Duct Leakage Test standards',
    iconName: 'ShieldAlert',
    imageSrc: '/images/duct-installation.jpg',
    imageAlt: 'Galvanized commercial air distribution ductwork system undergoing leakage testing',
  },
  {
    id: 'electrical-testing',
    name: 'Electrical Testing (Live, Cold & Continuity)',
    shortSummary: 'Rigorous safety, insulation, loop impedance, and continuity testing for commercial and industrial electrical installations.',
    purpose: 'To ensure all electrical circuits, earthing systems, protective devices, and cabling are properly installed, safe to energize, and fully compliant with wiring regulations and technical specifications.',
    value: 'Guarantees operational safety for building occupants and maintenance personnel, verifies protective trip coordination, and prevents short circuits, nuisance tripping, and electrical equipment damage.',
    benefits: [
      'Complete safety verification before first energization (Cold Testing)',
      'Live operational parameter verification under actual supply voltage (Live Testing)',
      'Confirmation of continuous protective conductor pathways to earth (Continuity Testing)',
      'Accurate test sheets and schedules of test results for regulatory and consultant submittals',
    ],
    scopePoints: [
      'Cold Testing: Protective conductor continuity, ring final circuit continuity, insulation resistance (500V/1000V DC)',
      'Cold Testing: Polarity verification across all protective devices and socket outlets',
      'Live Testing: Earth fault loop impedance (Zs) and external loop impedance (Ze)',
      'Live Testing: Residual Current Device (RCD) trip time and trip current verification',
      'Phase rotation, voltage levels, and neutral-to-earth voltage assessment',
    ],
    testingMethods: [
      'Calibrated multi-function electrical installation testers',
      'High-voltage insulation resistance testing sets (500V / 1000V DC testing)',
      'Low-resistance 4-wire milliohm continuity meters for protective bonding conductors',
      'Digital earth resistance ground stake testers for lightning protection and main earth pits',
    ],
    standardsReferenced: 'Aligned with BS 7671 (IET Wiring Regulations), DEWA regulations, and IEC standards',
    iconName: 'Zap',
    imageSrc: '/images/electrical-switchgear.jpg',
    imageAlt: 'Commercial electrical switchgear distribution board undergoing live and continuity testing',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'commercial',
    title: 'Commercial Buildings & Office Towers',
    description: 'Corporate headquarters, multi-tenant commercial towers, and mixed-use commercial developments across Dubai and the UAE.',
    keyApplications: ['Air balancing in variable air volume (VAV) zones', 'Distribution board thermography during peak business hours', 'Pre-tenancy MEP validation surveys'],
    relevance: 'Maintaining precise indoor air quality and temperature uniformity across high-density office floors while eliminating electrical disruptions.',
  },
  {
    id: 'residential',
    title: 'Residential Developments & High-Rises',
    description: 'Luxury high-rise residential towers, gated villa communities, and large-scale residential compounds.',
    keyApplications: ['FCU airflow verification and noise mitigation', 'Duct leakage testing in apartment risers and corridors', 'Cold and live electrical testing for landlord panels'],
    relevance: 'Delivering uncompromised resident acoustic and thermal comfort and verifying electrical safety across common assets.',
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities & Warehouses',
    description: 'Manufacturing plants, logistics hubs, cold storage warehouses, and light industrial processing units.',
    keyApplications: ['Motor control center (MCC) infrared thermographic scans', 'Ventilation and smoke extraction airflow testing', 'High-amperage electrical continuity and earthing audits'],
    relevance: 'Preventing unplanned plant stoppage, ensuring electrical fire safety under heavy duty cycles, and verifying adequate industrial ventilation.',
  },
  {
    id: 'construction',
    title: 'Construction & Fit-Out Projects',
    description: 'Commercial interior fit-outs, retail fit-outs, and new construction developments moving toward practical completion.',
    keyApplications: ['Duct leakage testing prior to ceiling board installation', 'Testing and Balancing (TAB) for consultant sign-off', 'Handover validation surveys and snag rectification'],
    relevance: 'Providing independent, credible testing reports required by engineering consultants, project managers, and clients for handover approvals.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Leisure Developments',
    description: 'Hotels, resorts, luxury dining venues, and entertainment facilities requiring non-disruptive precision testing.',
    keyApplications: ['Kitchen extract and ecology unit airflow balancing', 'Guest room FCU airflow and noise verification', 'Preventative thermal imaging of switchboards'],
    relevance: 'Preserving premium guest experience, silent HVAC operation, and preventing kitchen ventilation or electrical interruptions.',
  },
  {
    id: 'critical-infrastructure',
    title: 'Critical Infrastructure & Data Centers',
    description: 'Telecommunications facilities, server rooms, and critical power infrastructure requiring zero-tolerance reliability.',
    keyApplications: ['Precision cooling airflow and CRAC unit testing', 'UPS and battery bank thermographic inspections', 'Insulation resistance and earthing grid testing'],
    relevance: 'Detecting micro-anomalies and hot-spots before thermal runaway or power interruption can occur.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Precision & Calibrated Instruments',
    description: 'All testing is performed using industry-recognized, calibrated diagnostic instruments with up-to-date calibration certificates to ensure accurate, repeatable data.',
  },
  {
    title: 'Professional Engineering Execution',
    description: 'Hands-on execution by experienced technical specialists who understand local building dynamics, MEP schematic layouts, and project milestones.',
  },
  {
    title: 'Dependable & Transparent Reporting',
    description: 'Clear, concise engineering reports featuring raw data logs, photographic evidence, schematic references, and actionable recommendations formatted for consultants.',
  },
  {
    title: 'Safety-Conscious On-Site Practices',
    description: 'Uncompromising adherence to UAE health and safety standards, risk assessments, personal protective equipment (PPE), and safe isolation procedures.',
  },
  {
    title: 'Energy & Performance Optimization',
    description: 'Beyond basic compliance, our testing identifies systemic air leakage, hydraulic imbalances, and high-resistance faults that silently drive up operating costs.',
  },
];
