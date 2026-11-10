export interface Breed {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullStory: string;
  dob: string;
  parentName: string;
  origin: string;
  lifespan: string;
  weight: string;
  height: string;
  tags: string[];
  ratings: {
    energy: number; // 1 to 5
    trainability: number;
    familyFriendly: number;
    guardianInstinct: number;
    shedding: number;
  };
  attributes: string[];
  image: string;
  parentImage: string;
  priceUSD: number;
  priceKES: number;
  varieties?: string[];
  kennelDogs?: string[];
}

export interface Puppy {
  id: string;
  name: string;
  breedId: string;
  breedName: string;
  gender: 'Male' | 'Female';
  ageWeeks: number;
  color: string;
  priceUSD: number;
  priceKES: number;
  status: 'Available' | 'Reserved' | 'Adopted';
  image: string;
  healthGuarantee: string;
  registration: string;
  rating: number;
  microchipId: string;
  vaccinations: string[];
  dob: string;
  temperament: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
  priceKES?: string;
  badge?: string;
}

export interface BookingSubmission {
  serviceId: string;
  serviceName: string;
  petName: string;
  petBreed: string;
  petAge: string;
  petWeight: string;
  notes: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  locationArea: string;
  serviceType: 'in_kennel' | 'mobile_home_visit';
  date: string;
  timeSlot: string;
  estimatedCostKES: number;
}

export interface HealthCheckpoint {
  id: string;
  title: string;
  system: string;
  status: 'Optimal' | 'Checked & Verified' | 'Immune Certified';
  metric: string;
  details: string;
  careTips: string;
  color: string;
  cameraFocus: [number, number, number];
}
