// Timeline Heritage Data for Rajvant Palace
// This file contains all timeline events for better maintainability and performance

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'Architecture' | 'Political' | 'Heritage' | 'Recognition' | 'Digital' | 'Technology';
  artifacts: string[];
  significance?: 'high' | 'medium' | 'low';
  location?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1930s",
    title: "Construction of Rajvant Palace",
    description: "Construction of Rajvant Palace begins under Maharaja Vijaysinhji of the Gohil dynasty. Built with a blend of European and Indian architectural styles, it overlooks the scenic river in Rajpipla.",
    type: "Architecture",
    artifacts: ["Construction Photos", "Architectural Plans", "Royal Commission", "Material Records"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1940s",
    title: "Royal Residency and Administration",
    description: "Rajvant Palace serves as the royal residence and administrative hub of the Rajpipla princely state during the final years of British rule.",
    type: "Political",
    artifacts: ["Royal Correspondence", "Administrative Records", "Furniture Pieces", "Royal Orders"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1947",
    title: "Post-Independence Transformation",
    description: "After India's independence, the princely state of Rajpipla merges into the Indian Union. The palace transitions from royal residence to a heritage landmark.",
    type: "Political",
    artifacts: ["Merger Documents", "Photographs", "Personal Effects", "Public Records"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1960s",
    title: "Heritage Preservation Awareness",
    description: "Efforts to preserve the architectural and cultural value of Rajvant Palace begin with basic restoration and tourism interest from domestic visitors.",
    type: "Heritage",
    artifacts: ["Tourism Brochures", "Restoration Reports", "Photographic Archives"],
    significance: "medium",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1980s",
    title: "Local Conservation Initiatives",
    description: "Local bodies initiate conservation efforts to preserve Rajvant Palace. Minor restorations and documentation projects begin.",
    type: "Heritage",
    artifacts: ["Conservation Plans", "Architectural Surveys", "Interior Photos"],
    significance: "medium",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "2000s",
    title: "Cultural Engagement Initiatives",
    description: "Cultural festivals and tourism efforts increase. Modern visitor amenities are introduced to support heritage tourism.",
    type: "Recognition",
    artifacts: ["Visitor Facilities", "Festival Records", "Public Engagement Programs"],
    significance: "medium",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "2010s",
    title: "Digital Heritage Initiatives",
    description: "Initial steps taken to digitally document Rajvant Palace through photographs and online content. Heritage information is made accessible to a wider audience.",
    type: "Digital",
    artifacts: ["Digital Archives", "Online Gallery", "Photography Collections", "Tourism Websites"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "2020s",
    title: "Immersive Heritage Experiences",
    description: "Virtual tour and digital storytelling initiatives proposed. Integration of immersive technologies explored for heritage education and outreach.",
    type: "Technology",
    artifacts: ["VR Concepts", "Digital Roadmap", "Engagement Reports", "Interactive Maps"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  }
];

// Helper functions for data manipulation
export const getTimelineByType = (type: TimelineEvent['type']) => {
  return timelineEvents.filter(event => event.type === type);
};

export const getTimelineBySignificance = (significance: TimelineEvent['significance']) => {
  return timelineEvents.filter(event => event.significance === significance);
};

export const searchTimeline = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return timelineEvents.filter(event => 
    event.title.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.artifacts.some(artifact => artifact.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTimelineStats = () => {
  const totalEvents = timelineEvents.length;
  const typeCounts = timelineEvents.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const significanceCounts = timelineEvents.reduce((acc, event) => {
    const sig = event.significance || 'low';
    acc[sig] = (acc[sig] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalEvents,
    typeCounts,
    significanceCounts,
    yearRange: {
      start: timelineEvents[0]?.year,
      end: timelineEvents[timelineEvents.length - 1]?.year
    }
  };
};
