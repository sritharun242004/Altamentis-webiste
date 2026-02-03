export interface TeamMember {
  role: string;
  expertise: string[];
  description: string;
  badge: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    role: "Director",
    badge: "Director",
    expertise: ["SAP S/4HANA", "Transformation", "Stakeholder Alignment"],
    description: "20+ years of experience in SAP consulting. Specializes in leading large-scale S/4HANA transformations and ensuring stakeholder alignment across complex enterprise projects."
  },
  {
    role: "Solution Architect",
    badge: "Solution Architect",
    expertise: ["SAP BTP", "Integration", "Hybrid Landscapes"],
    description: "20+ years of experience as an SAP BTP specialist. Expert in designing seamless integrations and architecting hybrid landscapes for modern enterprise solutions."
  },
  {
    role: "Principal Consultant",
    badge: "Principal Consultant",
    expertise: ["FI/CO", "MM", "SD", "Value Realisation"],
    description: "20+ years of domain expertise spanning FI/CO, MM, and SD modules. Focuses on driving value realisation and optimizing business processes for clients."
  }
];
