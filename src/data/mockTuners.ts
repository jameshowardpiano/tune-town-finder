
import { TunerInfo } from '../components/TunerCard';

// Mock data for piano tuners
export const mockTuners: Record<string, TunerInfo[]> = {
  "New York": [
    {
      id: 1,
      name: "Harmony Piano Services",
      location: "Manhattan, NY",
      rating: 4.9,
      phone: "(212) 555-0123",
      website: "https://example.com",
      distance: "1.2 miles"
    },
    {
      id: 2,
      name: "Grand Piano Specialists",
      location: "Brooklyn, NY",
      rating: 4.7,
      phone: "(718) 555-0456",
      website: "https://example.com",
      distance: "3.5 miles"
    },
    {
      id: 3,
      name: "Perfect Pitch Tuning",
      location: "Queens, NY",
      rating: 4.8,
      phone: "(347) 555-0789",
      distance: "5.1 miles"
    },
    {
      id: 4,
      name: "Classic Keys",
      location: "Bronx, NY",
      rating: 4.5,
      phone: "(929) 555-1234",
      website: "https://example.com",
      distance: "7.3 miles"
    },
    {
      id: 5,
      name: "Metropolitan Piano Techs",
      location: "Staten Island, NY",
      rating: 4.6,
      phone: "(917) 555-5678",
      distance: "10.8 miles"
    }
  ],
  "California": [
    {
      id: 6,
      name: "Golden State Piano",
      location: "San Francisco, CA",
      rating: 4.9,
      phone: "(415) 555-9012",
      website: "https://example.com",
      distance: "0.8 miles"
    },
    {
      id: 7,
      name: "Pacific Tuning Co.",
      location: "Los Angeles, CA",
      rating: 4.8,
      phone: "(213) 555-3456",
      website: "https://example.com",
      distance: "2.4 miles"
    },
    {
      id: 8,
      name: "SoCal Piano Services",
      location: "San Diego, CA",
      rating: 4.7,
      phone: "(619) 555-7890",
      distance: "4.2 miles"
    }
  ],
  "Texas": [
    {
      id: 9,
      name: "Lone Star Tuning",
      location: "Austin, TX",
      rating: 4.8,
      phone: "(512) 555-2345",
      website: "https://example.com",
      distance: "1.5 miles"
    },
    {
      id: 10,
      name: "Harmony House Music",
      location: "Houston, TX",
      rating: 4.6,
      phone: "(713) 555-6789",
      distance: "3.7 miles"
    }
  ],
  "": [
    {
      id: 1,
      name: "Harmony Piano Services",
      location: "Manhattan, NY",
      rating: 4.9,
      phone: "(212) 555-0123",
      website: "https://example.com",
      distance: "1.2 miles"
    },
    {
      id: 6,
      name: "Golden State Piano",
      location: "San Francisco, CA",
      rating: 4.9,
      phone: "(415) 555-9012",
      website: "https://example.com",
      distance: "0.8 miles"
    },
    {
      id: 9,
      name: "Lone Star Tuning",
      location: "Austin, TX",
      rating: 4.8,
      phone: "(512) 555-2345",
      website: "https://example.com",
      distance: "1.5 miles"
    },
  ]
};

// Function to get tuners by location
export const getTunersByLocation = (location: string): TunerInfo[] => {
  // Check if we have exact match
  if (mockTuners[location]) {
    return mockTuners[location];
  }

  // Check for partial matches
  const lowercaseLocation = location.toLowerCase();
  
  for (const [key, tuners] of Object.entries(mockTuners)) {
    if (key.toLowerCase().includes(lowercaseLocation) || 
        lowercaseLocation.includes(key.toLowerCase())) {
      return tuners;
    }
    
    // Check tuner locations
    const matchingTuners = tuners.filter(tuner => 
      tuner.location.toLowerCase().includes(lowercaseLocation)
    );
    
    if (matchingTuners.length > 0) {
      return matchingTuners;
    }
  }
  
  // Return empty if no match
  return [];
};
