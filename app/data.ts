// data/projectsData.ts

export interface Project {
    id: string;
    title: string;
    location: string;
    totalArea: string;
    description: string;
    client: string;
    year: number;
    material: string;
    image: string;
  }
  
  export const projectsData: Project[] = [
    {
      id: "project-001",
      title: "Hilltop Eco Villa",
      location: "Nanyuki, Kenya",
      totalArea: "250 sqm",
      description: "A sustainable villa built with local materials and passive cooling design for year-round comfort.",
      client: "Private Client",
      year: 2022,
      material: "Earth blocks & timber",
      image: "/hero-1.jpg",
    },
    {
      id: "project-002",
      title: "Urban Commercial Hub",
      location: "Nairobi CBD",
      totalArea: "1,200 sqm",
      description: "A multi-story commercial building optimized for natural light and modular office spaces.",
      client: "Dara Developers Ltd.",
      year: 2023,
      material: "Concrete, steel, glass",
      image: "/hero-2.jpg",
    },
    {
      id: "project-003",
      title: "Modern Bungalow",
      location: "Karen, Nairobi",
      totalArea: "180 sqm",
      description: "A modern take on traditional bungalow architecture with smart home integration.",
      client: "Muriithi Family",
      year: 2021,
      material: "Brick, concrete",
      image: "/hero-3.jpg",
    },
  ];
  