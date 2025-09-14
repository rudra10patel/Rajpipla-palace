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
    year: "1915",
    title: "Construction of Rajvant (Vijay) Palace",
    description: "Built by Maharajah Vijay Singhji in European/Indo-Saracenic style, featuring Romanesque dome, Corinthian columns, Gothic arches, and Venetian doors.",
    type: "Architecture",
    artifacts: ["Architectural Plans", "Construction Records", "Design Sketches", "Material Specifications"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1934-1939",
    title: "Construction of Indrajit-Padmini Mahal (Vadia Palace)",
    description: "Commissioned by Maharaja Vijaysinhji after his 1932 Epsom Derby win; designed by Burjor Sohrab J. Aga in Indo-Saracenic with Art Deco interiors, Italian marble, Burma teak staircases, and frescoes by Armande Vallee.",
    type: "Architecture",
    artifacts: ["Architectural Drawings", "Design Documents", "Construction Photos", "Artwork Records"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1948",
    title: "Accession to the Indian Union",
    description: "Rajpipla State officially acceded, and parts of the palaces began transitioning from royal residences to public heritage sites.",
    type: "Political",
    artifacts: ["Accession Documents", "Transition Records", "Public Announcements", "Administrative Changes"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1960s",
    title: "Initiation of Conservation Efforts",
    description: "Regional heritage bodies initiated preservation of palace structures and museum collections, recognizing their cultural value.",
    type: "Heritage",
    artifacts: ["Conservation Reports", "Heritage Assessments", "Preservation Plans", "Cultural Documentation"],
    significance: "medium",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "1980s",
    title: "Official Heritage Recognition & Restoration",
    description: "State and national agencies designated the palaces as protected monuments; major restoration projects commenced to safeguard architecture and interiors.",
    type: "Recognition",
    artifacts: ["Heritage Designation", "Restoration Reports", "Protection Orders", "Conservation Studies"],
    significance: "high",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "2010s",
    title: "Early Digital Documentation",
    description: "Photographic archives and small-scale virtual tours of palace interiors emerged online, but lacked standardized metadata and interactive 3D components.",
    type: "Digital",
    artifacts: ["Digital Archives", "Photography Collections", "Basic Virtual Tours", "Online Documentation"],
    significance: "medium",
    location: "Rajpipla, Gujarat"
  },
  {
    year: "2020s",
    title: "Advanced Digital Heritage Initiatives",
    description: "Development of comprehensive digital archives, 360° tours, and 3D models for cultural heritage; your IIIF-based platform project builds upon these foundations.",
    type: "Technology",
    artifacts: ["IIIF Platform", "3D Models", "360° Tours", "Interactive Archives", "AI Integration"],
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
