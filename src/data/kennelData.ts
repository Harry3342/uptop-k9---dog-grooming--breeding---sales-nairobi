import { Breed, Puppy, ServiceItem, HealthCheckpoint } from '../types';

export const KENNEL_CONTACT = {
  name: 'Uptop K9',
  location: 'Nasra Gardens Estate, Umoja, Nairobi',
  fullAddress: 'Nasra Gardens Estate, Gate B, Next to Naivas Umoja, Muthaiga Gate A, HS 829, Rooftop, Nairobi, Kenya',
  phone: '0796784945',
  phoneFormatted: '+254 796 784 945',
  email: 'uptopk9@gmail.com',
  instagram: 'uptop_k_9',
  tiktok: 'uptop_k_9',
  whatsapp: '254796784945',
  mpesaPaybill: '247247',
  mpesaAccount: 'UPTOP945',
  mpesaTill: '6941587',
  mpesaBusinessName: 'UPTOP K9 KENNELS',
  openingHours: 'Mon - Sun: 7:30 AM - 6:30 PM (Visits by appointment)',
  tagline: "Kenya's premier kennel for guardian, working and companion breeds in Nasra Gardens Estate, Nairobi.",
  subtagline: "We keep the parents and sell the puppies — imported parent dogs, health-guaranteed, $450–$550. Authentic working & companion lines.",
  deliveryCoverage: 'Countrywide door-to-door delivery across Nairobi, Kiambu, Machakos, Mombasa, Nakuru, Eldoret & Kisumu, plus East Africa regional transport.'
};

export const BREEDS_DATA: Breed[] = [
  {
    id: 'boerboel-mastiff',
    name: 'South African Boerboel & Mastiff',
    tagline: 'Massive bone density, calm composure & supreme compound deterrence',
    description: 'Directly featured in our kennel lineup: Black Boerboel (Mastiff), Fawn Boerboel, and Heavyweight Black Mastiff. Supreme estate guardians with rock-solid temperaments.',
    fullStory: 'Our South African Boerboels and Mastiffs represent the ultimate heavy guardian. Muscular, athletic despite their immense mass, and deeply loyal to the household pack. In our kennel lineup, you will meet our Black Boerboel, Fawn Boerboel, and solid Black Mastiff — all calm, discerning guardians who evaluate every visitor with quiet intelligence.',
    dob: '14th August 2024',
    parentName: 'Titan (Black Boerboel) & Simba (Fawn Boerboel)',
    origin: 'South Africa',
    lifespan: '10 - 12 Years',
    weight: '60 - 80 kg',
    height: '65 - 72 cm',
    tags: ['Heavy Guardian', 'Massive Bone', 'Black Boerboel', 'Fawn Boerboel', 'Calm Sentinel'],
    varieties: ['Black Boerboel (Mastiff)', 'Fawn Boerboel', 'Dignified Black Mastiff'],
    kennelDogs: ['Titan (Black Boerboel)', 'Simba (Fawn Boerboel)', 'Kratos (Mastiff)'],
    ratings: {
      energy: 3,
      trainability: 4,
      familyFriendly: 5,
      guardianInstinct: 5,
      shedding: 2,
    },
    attributes: [
      'Natural perimeter guardian with immense physical presence',
      'Gentle, tolerant and deeply affectionate with family children',
      'Short, low-maintenance wash-and-wear coat',
      'Requires early leash handling and confident pack leadership'
    ],
    image: '/assets/dogs/Black-Mastiff-on-Grass-Platform.png',
    parentImage: '/assets/dogs/Black-Dog-Portrait.png',
    priceUSD: 550,
    priceKES: 71500,
  },
  {
    id: 'german-shepherd',
    name: 'German Shepherd (Working Lines)',
    tagline: 'High intelligence, laser focus & versatile protection drive',
    description: 'Raised at our Umoja kennel in three authentic varieties: Solid Jet-Black ("Kai"), Black & Tan ("Bruno"), and Long-Haired Sable. Unmatched trainability for personal defense and loyalty.',
    fullStory: 'Our German Shepherds descend from proven Czech and East German working bloodlines. Whether it is our majestic long-haired shepherd in the center of our pack lineup, our jet-black powerhouse Kai, or classic black-and-tan Bruno, these dogs deliver intense work ethic, laser focus, and fearless loyalty for Kenyan compounds.',
    dob: '24th September 2024',
    parentName: 'Bruno (Black & Tan) & Kai (Solid Black)',
    origin: 'Germany',
    lifespan: '11 - 14 Years',
    weight: '35 - 45 kg',
    height: '60 - 66 cm',
    tags: ['Solid Black (Kai)', 'Black & Tan (Bruno)', 'Long-Haired', 'Working Line', 'Laser Focus'],
    varieties: ['Solid Black German Shepherd (Kai)', 'Black & Tan German Shepherd (Bruno)', 'Long-Haired German Shepherd'],
    kennelDogs: ['Bruno (Black & Tan)', 'Kai (Solid Black)', 'Valkyrie (Long-Haired)'],
    ratings: {
      energy: 5,
      trainability: 5,
      familyFriendly: 5,
      guardianInstinct: 5,
      shedding: 4,
    },
    attributes: [
      'Supreme intelligence and rapid command acquisition',
      'Excels in personal protection, obedience, and scent work',
      'Deep, unwavering loyalty to its handler and immediate pack',
      'Double coat requiring weekly raking and grooming blowout'
    ],
    image: '/assets/dogs/long-haired-german-shephard.png',
    parentImage: '/assets/dogs/Black-and-Tan-Dog-Begging.png',
    priceUSD: 500,
    priceKES: 65000,
  },
  {
    id: 'border-collie',
    name: 'Border Collie',
    tagline: 'Intelligent • Energetic • Loyal',
    description: 'The world’s smartest canine breed. Captured in our studio portrait with handler, our Border Collies combine breathtaking black & white aesthetics with boundless agility and devoted heart.',
    fullStory: 'Officially represented by our studio portrait dog with bandana and handler: "Border Collie • Intelligent • Energetic • Loyal". Border Collies possess peerless problem-solving abilities, lightning-fast reflexes, and an unquenchable desire to interact with their human companion. Ideal for active Kenyan pet owners, agility sport, and loving households.',
    dob: '10th October 2024',
    parentName: 'Bandit & Luna',
    origin: 'Scotland / England',
    lifespan: '12 - 15 Years',
    weight: '14 - 22 kg',
    height: '48 - 56 cm',
    tags: ['Intelligent', 'Energetic', 'Loyal', 'Studio Star', 'Agility Ace', 'Devoted Companion'],
    varieties: ['Classic Black & White Rough Coat', 'Agility Working Line'],
    kennelDogs: ['Bandit (Studio Portrait Champion)', 'Luna'],
    ratings: {
      energy: 5,
      trainability: 5,
      familyFriendly: 5,
      guardianInstinct: 3,
      shedding: 3,
    },
    attributes: [
      'Ranked #1 canine breed for raw intelligence and trainability',
      'Incredible stamina — perfect jogging, hiking & agility partner',
      'Intensely loyal shadow that learns commands in under 5 repetitions',
      'Silky black and white coat requiring regular brushing'
    ],
    image: '/assets/dogs/Border-Collie-in-Sleek-Studio-Portrait.png',
    parentImage: '/assets/dogs/Border-Collie-Portrait-with-Owner.png',
    priceUSD: 480,
    priceKES: 62400,
  },
  {
    id: 'kangal',
    name: 'Turkish Kangal Shepherd',
    tagline: 'The supreme Turkish livestock & compound guardian',
    description: 'Distinguished by its black mask, curled tail, and legendary bite force paired with gentle discretion around children. The ultimate flock and large compound perimeter sentinel.',
    fullStory: 'The Kangal is the standard against which all livestock and compound guardians are judged. Renowned for having the strongest bite in the canine world (743 PSI) and, far more importantly, for the calm judgement to almost never use it. Calm, patient and astonishingly gentle with children, it patrols a boundary all night and rests by the door all day.',
    dob: '19th October 2024',
    parentName: 'Aslan & Ayla',
    origin: 'Sivas, Turkey',
    lifespan: '12 - 15 Years',
    weight: '50 - 65 kg',
    height: '72 - 86 cm',
    tags: ['Black Mask', 'Curled Tail', '743 PSI Bite', 'Estate Guardian', 'Gentle @ Home'],
    varieties: ['Classic Sivas Fawn with Black Mask', 'Curled-Tail Working Line'],
    kennelDogs: ['Aslan (Sivas Sire)', 'Ayla (Dam)'],
    ratings: {
      energy: 3,
      trainability: 4,
      familyFriendly: 5,
      guardianInstinct: 5,
      shedding: 3,
    },
    attributes: [
      'Room to patrol and a compound boundary worth protecting',
      'Early socialisation matters more than strict obedience drilling',
      'Weekly brushing; heavier blowout during seasonal moult',
      'Naturally affectionate with family & gentle with small children'
    ],
    image: '/assets/dogs/Majestic-Kangal.png',
    parentImage: '/assets/dogs/Kangal-Shepherd.png',
    priceUSD: 550,
    priceKES: 71500,
  },
  {
    id: 'american-bully',
    name: 'American Bully / Pitbull Guardian',
    tagline: 'Athletic muscle, fearless loyalty and vigilant compound sentry',
    description: 'Captured on sentry duty on the red terrazzo stairs of our facility. Robust bone density, wide chest, agile reflexes, and affectionate devotion to the household pack.',
    fullStory: 'Our American Bully / Pitbull Guardian dogs combine remarkable muscular conditioning with a playful, deeply devoted nature. Pictured standing watch on our facility stairs with chain collar, they are athletic, confident, and alert to every perimeter sound, making them exemplary compound security companions.',
    dob: '5th November 2024',
    parentName: 'Diesel & Roxie',
    origin: 'United States',
    lifespan: '10 - 14 Years',
    weight: '32 - 45 kg',
    height: '45 - 53 cm',
    tags: ['Muscular Frame', 'Athletic Agility', 'Compound Sentry', 'Fearless Loyalty', 'Short Coat'],
    varieties: ['Black & White Tuxedo', 'Muscular Heavyweight Classic'],
    kennelDogs: ['Diesel (Staircase Guardian)', 'Roxie'],
    ratings: {
      energy: 4,
      trainability: 4,
      familyFriendly: 5,
      guardianInstinct: 5,
      shedding: 1,
    },
    attributes: [
      'Remarkable muscular power and explosive athletic speed',
      'Short, glossy single coat requiring almost zero maintenance',
      'Intensely loving and eager to please family members',
      'High physical stamina suitable for active compound play'
    ],
    image: '/assets/dogs/b&w2.png',
    parentImage: '/assets/dogs/b&w3.png',
    priceUSD: 500,
    priceKES: 65000,
  },
  {
    id: 'tan-mastiff-mix',
    name: 'Tan Mastiff Mix / Fluffy Guardian',
    tagline: 'Majestic lion-like mane, heavy bone structure & calm mountain sentinel',
    description: 'Featured in our kennel lineup as the "Tan Mastiff Mix" and with our handlers. Dense golden coat, dark facial mask, and an imposing presence that commands instant respect.',
    fullStory: 'Shown prominently on the right of our handler lineup ("Tan Mastiff Mix") and during morning exercise walks, this magnificent guardian breed features a thick, weather-resistant golden double coat and dark face. Unfazed by cold highland nights, they patrol fences with tranquil authority.',
    dob: '19th October 2024',
    parentName: 'Thor & Kira',
    origin: 'Eurasian Mountain / Mastiff Cross',
    lifespan: '10 - 13 Years',
    weight: '55 - 75 kg',
    height: '70 - 80 cm',
    tags: ['Tan Mastiff Mix', 'Lion Mane', 'Double Coat', 'Mountain Guardian', 'Formidable Deterrent'],
    varieties: ['Golden Tan Double-Coat', 'Black-Masked Mountain Mix'],
    kennelDogs: ['Leo (Lineup Tan Mastiff)', 'Kira'],
    ratings: {
      energy: 3,
      trainability: 3,
      familyFriendly: 4,
      guardianInstinct: 5,
      shedding: 5,
    },
    attributes: [
      'Natural territorial deterrent with unmatched visual presence',
      'Dense double coat ideal for cool upcountry and highland Kenyan estates',
      'Requires experienced owner with calm, consistent leadership',
      'High grooming needs — benefits from our monthly blowout spa'
    ],
    image: '/assets/dogs/brown-dog.png',
    parentImage: '/assets/dogs/Fluffy-Guardian-Dog.png',
    priceUSD: 550,
    priceKES: 71500,
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler (Working Line)',
    tagline: 'Precision, raw power & unwavering personal protection',
    description: 'Working German line personal protection dogs seen on our daily Nairobi pack walks. Powerful chest, distinct rust markings, and unflinching fidelity.',
    fullStory: 'Our Rottweilers are working-line personal and property protectors. Calm in everyday routine, affectionate with their family handlers, yet instantaneously alert when a threat approaches. Trained with positive reinforcement and structured bite inhibition right here in Umoja.',
    dob: '2nd October 2024',
    parentName: 'Major & Nala',
    origin: 'Germany',
    lifespan: '9 - 12 Years',
    weight: '42 - 58 kg',
    height: '61 - 69 cm',
    tags: ['Working Line', 'Personal Protection', 'Black & Rust', 'High Trainability', 'Solid Bone'],
    varieties: ['German Working Line', 'Broad-Headed Protection Line'],
    kennelDogs: ['Major (Pack Leader)', 'Nala'],
    ratings: {
      energy: 4,
      trainability: 5,
      familyFriendly: 4,
      guardianInstinct: 5,
      shedding: 2,
    },
    attributes: [
      'Commanding deterrent with immense bite strength and muscular frame',
      'Exceptional obedience focus and handler attunement',
      'Short coat requiring minimal grooming maintenance',
      'Thrives with mental stimulation and structured daily walks'
    ],
    image: '/assets/dogs/Rottweiler-Studio-Portrait.png',
    parentImage: '/assets/dogs/rottweilerw.png',
    priceUSD: 520,
    priceKES: 67600,
  },
  {
    id: 'plott-hound',
    name: 'Plott Hound / Brindle Tracker',
    tagline: 'High-endurance tracking hound with striking tiger-brindle coat',
    description: 'Distinctive brindle tracking hound photographed walking with our handlers in Nairobi. Tremendous endurance, acute scent tracking, and agile athleticism.',
    fullStory: 'Seen walking side-by-side with our handlers on the streets of Nairobi, our Plott Hound / Brindle Trackers bring world-class scent work and stamina to the kennel. Their sleek tiger-brindle coat, deep chest, and tireless drive make them perfect for expansive compounds, farms, and outdoor tracking.',
    dob: '1st November 2024',
    parentName: 'Hunter & Cleo',
    origin: 'North Carolina / Working Hound',
    lifespan: '11 - 14 Years',
    weight: '25 - 35 kg',
    height: '55 - 65 cm',
    tags: ['Tiger Brindle', 'Scent Tracker', 'High Endurance', 'Agile Athlete', 'Kennel Pack Star'],
    varieties: ['Dark Brindle', 'Tiger Brindle Scent Line'],
    kennelDogs: ['Hunter (Street Pack Tracker)', 'Cleo'],
    ratings: {
      energy: 5,
      trainability: 4,
      familyFriendly: 5,
      guardianInstinct: 4,
      shedding: 2,
    },
    attributes: [
      'Peerless olfactory tracking and perimeter patrol awareness',
      'Intelligent, vocal baying when alerting to unfamiliar presence',
      'Sleek weather-resistant brindle coat with low maintenance',
      'Friendly and gentle companion when off-duty at home'
    ],
    image: '/assets/dogs/3.png',
    parentImage: '/assets/dogs/3.png',
    priceUSD: 450,
    priceKES: 58500,
  }
];

export const PUPPIES_DATA: Puppy[] = [
  {
    id: 'pup-1',
    name: 'Simba Jr.',
    breedId: 'boerboel-mastiff',
    breedName: 'BOERBOEL (FAWN)',
    gender: 'Male',
    ageWeeks: 10,
    color: 'Rich Fawn with Black Mask',
    priceUSD: 550,
    priceKES: 71500,
    status: 'Available',
    image: '/assets/dogs/Fluffy-Guardian-Dog.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Direct Pedigree from Lineup Parents',
    rating: 5,
    microchipId: '985141004829101',
    vaccinations: ['DHPPi 1st & 2nd Dose', 'Parvovirus Booster', 'Dewormed at 2, 4, 8 & 10 wks'],
    dob: '14th August 2024',
    temperament: 'Massive bone density, calm demeanor, affectionate with children.'
  },
  {
    id: 'pup-2',
    name: 'Onyx',
    breedId: 'boerboel-mastiff',
    breedName: 'BOERBOEL (BLACK MASTIFF)',
    gender: 'Male',
    ageWeeks: 11,
    color: 'Solid Jet Black Mastiff',
    priceUSD: 550,
    priceKES: 71500,
    status: 'Available',
    image: '/assets/dogs/black-dog.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Titan Bloodline',
    rating: 5,
    microchipId: '985141004829102',
    vaccinations: ['DHPPi Complete', 'Parvo Shield', 'Drontal Dewormer'],
    dob: '10th August 2024',
    temperament: 'Imposing chest, calm watchful guardian, deeply bonded.'
  },
  {
    id: 'pup-3',
    name: 'Skye',
    breedId: 'border-collie',
    breedName: 'BORDER COLLIE',
    gender: 'Female',
    ageWeeks: 9,
    color: 'Classic Black & White Rough Coat',
    priceUSD: 480,
    priceKES: 62400,
    status: 'Available',
    image: '/assets/dogs/Border-Collie-Puppy.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Intelligent • Energetic • Loyal Line',
    rating: 5,
    microchipId: '985141004829103',
    vaccinations: ['DHPPi 1st Dose', 'Intranasal Kennel Cough', 'Dewormed bi-weekly'],
    dob: '10th October 2024',
    temperament: 'Laser focus, eager eye contact, loves fetching toys, cuddly.'
  },
  {
    id: 'pup-4',
    name: 'Bruno Jr.',
    breedId: 'german-shepherd',
    breedName: 'GERMAN SHEPHERD (BLACK & TAN)',
    gender: 'Male',
    ageWeeks: 12,
    color: 'Rich Black & Tan Czech Working Line',
    priceUSD: 500,
    priceKES: 65000,
    status: 'Available',
    image: '/assets/dogs/German-Shepherd-Puppy.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Sire Bruno Working Line',
    rating: 5,
    microchipId: '985141004829104',
    vaccinations: ['DHPPi 1st & 2nd', 'Parvo Shield', 'Broad spectrum deworming'],
    dob: '24th September 2024',
    temperament: 'High ball drive, strong nerves, alert ears, fearless courage.'
  },
  {
    id: 'pup-5',
    name: 'Kai II',
    breedId: 'german-shepherd',
    breedName: 'GERMAN SHEPHERD (LONG-HAIRED)',
    gender: 'Male',
    ageWeeks: 11,
    color: 'Rich Long Coat with Deep Mask',
    priceUSD: 500,
    priceKES: 65000,
    status: 'Available',
    image: '/assets/dogs/German-Shepherd-Puppy-Portrait.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Sire Kai Working Line',
    rating: 5,
    microchipId: '985141004829105',
    vaccinations: ['DHPPi 1st & 2nd', 'Dewormed every 2 weeks'],
    dob: '28th September 2024',
    temperament: 'Intense eye contact, athletic build, responsive to voice commands.'
  },
  {
    id: 'pup-6',
    name: 'Aslan Jr.',
    breedId: 'kangal',
    breedName: 'TURKISH KANGAL (MALE)',
    gender: 'Male',
    ageWeeks: 13,
    color: 'Fawn with Jet-Black Mask & Curled Tail',
    priceUSD: 550,
    priceKES: 71500,
    status: 'Available',
    image: '/assets/dogs/Masked-Kangal-Puppy.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Sivas Turkey Authentic Bloodline',
    rating: 5,
    microchipId: '985141004829106',
    vaccinations: ['DHPPi Complete', 'Dewormed bi-weekly', 'Health Booklet stamped'],
    dob: '19th October 2024',
    temperament: 'Calm, observant, massive paws, natural guardian discretion.'
  },
  {
    id: 'pup-6b',
    name: 'Elif',
    breedId: 'kangal',
    breedName: 'TURKISH KANGAL (FEMALE)',
    gender: 'Female',
    ageWeeks: 10,
    color: 'Fawn with Black Mask & Pink Collar',
    priceUSD: 550,
    priceKES: 71500,
    status: 'Available',
    image: '/assets/dogs/Masked-Shepherd-Puppy-Portrait.png',
    healthGuarantee: 'Written Health Guarantee : KUC registered',
    registration: 'Authentic Sivas Kangal Female',
    rating: 5,
    microchipId: '985141004829110',
    vaccinations: ['DHPPi 1st & 2nd Dose', 'KVB Certified Microchip', 'Dewormed'],
    dob: '19th October 2024',
    temperament: 'Gentle, attentive, poised Turkish flock & family guardian.'
  },
  {
    id: 'pup-7',
    name: 'Diesel Jr.',
    breedId: 'american-bully',
    breedName: 'AMERICAN BULLY / GUARDIAN',
    gender: 'Male',
    ageWeeks: 10,
    color: 'Black & White Tuxedo',
    priceUSD: 500,
    priceKES: 65000,
    status: 'Available',
    image: '/assets/dogs/b&w2.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Diesel Staircase Guardian Line',
    rating: 5,
    microchipId: '985141004829107',
    vaccinations: ['DHPPi 1st & 2nd', 'Anti-Tick & Flea treated'],
    dob: '5th November 2024',
    temperament: 'Broad chest, athletic bounce, eager to cuddle, alert guard dog.'
  },
  {
    id: 'pup-8',
    name: 'Leo Jr.',
    breedId: 'tan-mastiff-mix',
    breedName: 'TAN MASTIFF MIX (FLUFFY)',
    gender: 'Female',
    ageWeeks: 12,
    color: 'Golden Tan Lion-Coat with Dark Mask',
    priceUSD: 550,
    priceKES: 71500,
    status: 'Available',
    image: '/assets/dogs/Curled-Tail-Puppy-Portrait.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Lineup Tan Mastiff Pedigree',
    rating: 5,
    microchipId: '985141004829108',
    vaccinations: ['DHPPi Complete', 'Parvo Shield', 'Dewormed'],
    dob: '19th October 2024',
    temperament: 'Thick fluffy coat, dignified, gentle giant demeanor.'
  },
  {
    id: 'pup-9',
    name: 'Max',
    breedId: 'rottweiler',
    breedName: 'ROTTWEILER',
    gender: 'Male',
    ageWeeks: 11,
    color: 'Black with Rich Mahogany Markings',
    priceUSD: 520,
    priceKES: 67600,
    status: 'Available',
    image: '/assets/dogs/Rottweiler-Studio-Portrait.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Working Protection Line',
    rating: 5,
    microchipId: '985141004829109',
    vaccinations: ['DHPPi 1st & 2nd', 'Parvo Shield', 'Dewormed'],
    dob: '2nd October 2024',
    temperament: 'High food motivation, confident gait, solid bone structure.'
  },
  {
    id: 'pup-10',
    name: 'Milo',
    breedId: 'plott-hound',
    breedName: 'PLOTT HOUND (TIGER BRINDLE)',
    gender: 'Male',
    ageWeeks: 9,
    color: 'Striped Tiger Brindle Tracking Line',
    priceUSD: 450,
    priceKES: 58500,
    status: 'Available',
    image: '/assets/dogs/Black-and-White-Puppy-Portrait.png',
    healthGuarantee: 'Written Health Guarantee & Vet Stamped',
    registration: 'Kennel Street Scent Tracking Line',
    rating: 5,
    microchipId: '985141004829111',
    vaccinations: ['DHPPi 1st Dose', 'Dewormed bi-weekly', 'Health Booklet stamped'],
    dob: '1st November 2024',
    temperament: 'High endurance, agile pouncing, eager to track toys, gentle companion.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'careful-breeding',
    title: 'Careful Breeding',
    iconName: 'HeartHandshake',
    badge: 'Ethical Foundation',
    description: 'Our parent dogs were imported as puppies and are raised here. We breed a small number of litters a year, keep the mothers, and let you meet them before you choose. Our dogs are not Kennel Club registered and we make no pedigree claim.',
    bullets: [
      'Prioritize Health: We breed only healthy dogs and conduct genetic and veterinary health screenings.',
      'Avoid Overbreeding: We allow adequate recovery time between litters and limit breeding frequency.',
      'Maintain Proper Welfare: Provide clean shelter, nutritious food, exercise, and proper veterinary care.',
      'Breed Responsibly: We select dogs with sound temperaments and desirable health traits, not just appearance.'
    ],
    priceKES: 'From KES 58,500 ($450)'
  },
  {
    id: 'dog-training',
    title: 'Dog Training',
    iconName: 'Award',
    badge: 'Elite Handlers',
    description: 'From basic manners to advanced personal-protection work, our certified handlers deliver structured, force-balanced training for you and your dog.',
    bullets: [
      'Obedience and house manners (leash control, recall, sit/stay/heel)',
      'Family protection and estate guarding instincts',
      'Advanced personal-protection work & bite-work desensitization',
      'Handler-led sessions for you and your dog in Umoja or at your residence'
    ],
    priceKES: 'KES 25,000 / Month'
  },
  {
    id: 'veterinary-health',
    title: 'Veterinary & Health Care',
    iconName: 'Stethoscope',
    badge: 'Vet Endorsed',
    description: 'Every Buckingham & Uptop dog leaves fully vaccinated, dewormed, microchipped and vet-checked, with its vaccination record and our written health guarantee.',
    bullets: [
      'Comprehensive veterinary booklet signed by licensed Kenya KVB vet',
      'Universal ISO 15-digit microchip implantation',
      'Strict multi-stage deworming and core vaccination schedule',
      '30-day health replacement warranty & lifetime hereditary advice'
    ],
    priceKES: 'Included with all pups'
  },
  {
    id: 'puppy-foundation',
    title: 'Puppy Foundation & Socialisation',
    iconName: 'Sparkles',
    badge: 'Underfoot Raised',
    description: 'Every litter is raised underfoot with early neurological stimulation, daily handling and exposure to household noise, stock and strangers, so a puppy arrives settled rather than starting from nothing.',
    bullets: [
      'Early Neurological Stimulation (ENS) from Day 3 to 16',
      'Daily tactile handling, sound desensitization & crate prep',
      'Interaction with children, farm animals & household traffic',
      'Potty schedule training and bite inhibition fundamentals'
    ],
    priceKES: 'Built into upbringing'
  },
  {
    id: 'grooming-spa',
    title: 'Grooming & Spa',
    iconName: 'Scissors',
    badge: 'Premier Grooming Salon',
    description: 'Keep your companion looking regal with our full grooming services, carried out by trained professional groomers at our Umoja salon or mobile van.',
    bullets: [
      'Bathing and deep high-velocity warm blow drying',
      'De-shedding and undercoat raking for double-coated breeds',
      'Coat care, conditioning, detangling & precision scissor trim',
      'Nail clipping, paw pad moisturizing, ear flushing & teeth gel'
    ],
    priceKES: 'KES 3,500 - 6,500 / Session'
  },
  {
    id: 'nationwide-delivery',
    title: 'Nationwide & Global Delivery',
    iconName: 'Truck',
    badge: 'Safe Transit',
    description: 'We arrange safe ground and air transport with all documentation, so your new companion arrives calm, healthy and on schedule.',
    bullets: [
      'Direct chauffeured delivery to homes across Nairobi and Kiambu',
      'Safe door-to-door transit to Mombasa, Nakuru, Kisumu, Eldoret',
      'IATA-compliant pet travel crates & airport veterinary clearance',
      'Regional road/air delivery across Uganda, Tanzania & Rwanda'
    ],
    priceKES: 'Nairobi Free; Upcountry KES 3,500'
  },
  {
    id: 'owner-mentorship',
    title: 'Owner Mentorship',
    iconName: 'Users',
    badge: 'Lifetime Support',
    description: 'Uptop owners join a lifetime support network — nutrition, training and health guidance for the entire life of your dog.',
    bullets: [
      'Direct WhatsApp helpline with Uptop lead handlers 7 days a week',
      'Raw feeding (BARF) & high-performance kibble dietary planning',
      'Adolescent behavior guidance and compound security audits',
      'Annual kennel reunions and pack walk training sessions'
    ],
    priceKES: 'Complimentary Lifetime'
  }
];

export const GROOMING_PACKAGES = [
  {
    name: 'Fresh Paw Bath & Dry',
    price: 'KES 3,500',
    duration: '1.5 Hours',
    recommendedFor: 'Short coat / quick freshen up',
    includes: [
      'Hypoallergenic warm bath with tea-tree shampoo',
      'High-velocity blowout & coat brushing',
      'Ear cleaning & nail trimming',
      'Fresh scented coat mist'
    ]
  },
  {
    name: 'Full Royal Spa & De-Shedding',
    price: 'KES 5,500',
    popular: true,
    duration: '2.5 Hours',
    recommendedFor: 'Double coated breeds (Kangal, Shepherds, Akita)',
    includes: [
      'Undercoat blowout & Furminator de-shedding treatment',
      'Medicated deep conditioning skin therapy',
      'Paw pad trimming, moisturizing balm & sanitary shave',
      'Ear canal flushing, dental enzyme application',
      'Anal gland check (on request)'
    ]
  },
  {
    name: 'Puppy First Spa Experience',
    price: 'KES 3,000',
    duration: '1 Hour',
    recommendedFor: 'Pups 2 to 6 months old',
    includes: [
      'Gentle no-tear calming oat shampoo bath',
      'Slow velocity warm air drying introduction',
      'Gentle paw massage & nail tip blunting',
      'Positive reinforcement treats & confidence play'
    ]
  }
];

export const HEALTH_CHECKPOINTS: HealthCheckpoint[] = [
  {
    id: 'cranial-dental',
    title: 'Cranial & Dentition Integrity',
    system: 'Dentition & Cranium',
    status: 'Optimal',
    metric: 'Full 42-Teeth Scissor Bite',
    details: 'Sound skull conformation with broad jaw alignment. Healthy pink gums, zero tartar buildup, and clean ear canals with no mite infestation or moisture redness.',
    careTips: 'Brush teeth weekly or provide raw marrow bones; inspect floppy and erect ears twice a month.',
    color: '#84cc16',
    cameraFocus: [0, 1.4, 1.2]
  },
  {
    id: 'cardio-pulmonary',
    title: 'Cardio-Pulmonary Vitals',
    system: 'Heart & Respiratory',
    status: 'Checked & Verified',
    metric: 'Resting 78 BPM | Clear Lungs',
    details: 'Stethoscopic examination confirms clear vesicular sounds with no murmurs, arrhythmias, or respiratory congestion even under intense Nairobi equatorial warmth.',
    careTips: 'Schedule morning runs before 10 AM to prevent heat stress in heavy guardian breeds.',
    color: '#06b6d4',
    cameraFocus: [0, 1.1, 0.4]
  },
  {
    id: 'skeletal-hips',
    title: 'Orthopedic & Hip Clearance',
    system: 'Hips & Skeletal Frame',
    status: 'Optimal',
    metric: 'OFA/FCI Grade A Clear',
    details: 'Parent dogs are radiographed for hip and elbow dysplasia prior to breeding. Robust femur head insertion with tight acetabular fit, ensuring longevity and agility.',
    careTips: 'Avoid repetitive stairs during the first 8 months while growth plates are still fusing.',
    color: '#eab308',
    cameraFocus: [0, 0.9, -0.6]
  },
  {
    id: 'dermal-coat',
    title: 'Dermatological Double-Coat',
    system: 'Integumentary System',
    status: 'Checked & Verified',
    metric: 'Zero Parasites | Dense Undercoat',
    details: 'Resistant outer guard hairs and soft insulating underwool. Free of mange, ticks, fleas, hot-spots, and dandruff with natural sebum barrier preserved.',
    careTips: 'Use de-shedding rakes bi-weekly during seasonal changes; never shave double-coated breeds.',
    color: '#10b981',
    cameraFocus: [0, 1.2, 0.0]
  },
  {
    id: 'paws-locomotion',
    title: 'Paws & Musculoskeletal Gait',
    system: 'Paws & Limbs',
    status: 'Optimal',
    metric: 'Compact Cat-Feet & Tough Pads',
    details: 'Thick, melanized paw pads conditioned for tough Kenyan soil, rocky compound terrain, and daily perimeter patrols. Strong pasterns with shock absorption.',
    careTips: 'Inspect paws after perimeter patrols; trim dewclaws regularly.',
    color: '#8b5cf6',
    cameraFocus: [0, 0.4, 0.8]
  },
  {
    id: 'digestive-immunity',
    title: 'Digestive & Immunity Profile',
    system: 'Immune & GI Tract',
    status: 'Immune Certified',
    metric: 'Parvo Shielded | KVB Booklet',
    details: 'Complete DHLPPi vaccination regime with microchip record. Stool samples screened negative for Giardia, Coccidia, and roundworms.',
    careTips: 'Feed 60% high-protein animal muscle/bone raw diet or premium large-breed puppy formula.',
    color: '#ec4899',
    cameraFocus: [0, 0.9, -0.1]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Kennel Lineup: Boerboels, German Shepherd & Mastiff',
    category: 'Kennel Life',
    image: '/assets/aistudio/Gemini_Generated_Image_2fqi982fqi982fqi_7b7f7d03.jpg',
    caption: 'Official lineup in front of stone wall: Black Boerboel (Mastiff), Fawn Boerboel, German Shepherd (center), Boerboel (Mastiff), and Tan Mastiff Mix with our handlers.'
  },
  {
    id: 'gal-2',
    title: 'Border Collie: Intelligent • Energetic • Loyal',
    category: 'Breeds',
    image: '/assets/dogs/Border-Collie-Portrait-with-Owner.png',
    caption: 'Studio portrait with owner: Champion Border Collie wearing black bandana with handler.'
  },
  {
    id: 'gal-3',
    title: 'American Bully / Pitbull Guardian on Staircase Duty',
    category: 'Kennel Life',
    image: '/assets/dogs/b&w3.png',
    caption: 'Athletic black-and-white tuxedo American Bully on sentry watch with stainless chain collar.'
  },
  {
    id: 'gal-4',
    title: 'Turkish Kangal Shepherd Adult on Mountain Outcrop',
    category: 'Breeds',
    image: '/assets/dogs/Majestic-Kangal.png',
    caption: 'Legendary Turkish Kangal livestock guardian with black mask, fawn coat, and trademark curled tail.'
  },
  {
    id: 'gal-5',
    title: 'German Shepherd Working Line — Studio Portrait',
    category: 'Breeds',
    image: '/assets/dogs/long-haired-german-shephard.png',
    caption: 'Purebred working-line German Shepherd "Bruno" displaying high alert focus, erect ears, and rich black & tan markings.'
  },
  {
    id: 'gal-6',
    title: 'Rottweiler Working Protection Dog with Chain Collar',
    category: 'Breeds',
    image: '/assets/dogs/Rottweiler-Studio-Portrait.png',
    caption: 'Working line Rottweiler portrait labeled with chain collar, solid broad head, and rich mahogany markings.'
  },
  {
    id: 'gal-7',
    title: 'Dignified Black Boerboel / Mastiff Platform Portrait',
    category: 'Breeds',
    image: '/assets/dogs/Black-Mastiff-on-Grass-Platform.png',
    caption: 'Heavyweight solid black Boerboel mastiff with leather collar and massive bone structure.'
  },
  {
    id: 'gal-8',
    title: 'Tan Mastiff Mix & Fluffy Mountain Guardian with Handler',
    category: 'Kennel Life',
    image: '/assets/dogs/brown-dog.png',
    caption: 'Dense golden lion-coat mountain guardian leaning affectionately with handler in Manchester City blue jersey.'
  },
  {
    id: 'gal-9',
    title: 'Plott Hound & Rottweiler Pack Walk',
    category: 'Training',
    image: '/assets/dogs/3.png',
    caption: 'Street pack walk: Tiger-brindle Plott Hound tracking hound in foreground with alert Rottweiler in background.'
  },
  {
    id: 'gal-10',
    title: 'Turkish Kangal Male Puppy (13 Weeks)',
    category: 'Puppies',
    image: '/assets/dogs/Masked-Kangal-Puppy.png',
    caption: 'Calm masked Turkish Kangal male puppy standing in studio, heavy bone structure and black mask.'
  },
  {
    id: 'gal-11',
    title: 'Turkish Kangal Female Puppy "Elif" (10 Weeks)',
    category: 'Puppies',
    image: '/assets/dogs/Masked-Shepherd-Puppy-Portrait.png',
    caption: 'Turkish Kangal female puppy with pink collar and expressive dark eyes, calm family guardian disposition.'
  },
  {
    id: 'gal-12',
    title: 'Long-Haired German Shepherd in Facility',
    category: 'Breeds',
    image: '/assets/dogs/long-haired-german-shephard.png',
    caption: 'Majestic long-coated German Shepherd seated on checkered tiles with bright tongue and alert posture.'
  },
  {
    id: 'gal-13',
    title: 'American Bully in Athletic Vest on Outdoor Terrace',
    category: 'Kennel Life',
    image: '/assets/dogs/b&w2.png',
    caption: 'American Bully outfitted in black vest surveying the compound from our rooftop exercise terrace.'
  },
  {
    id: 'gal-14',
    title: 'Playful Garden Puppy at Play',
    category: 'Puppies',
    image: '/assets/dogs/Black-and-White-Puppy-Portrait.png',
    caption: 'Curious puppy in the sunny garden practicing early agility, socialization, and motor confidence.'
  },
  {
    id: 'gal-15',
    title: 'Playful Rottweiler Begging Posture',
    category: 'Training',
    image: '/assets/dogs/Rottweiler-Studio-Portrait.png',
    caption: 'Rottweiler demonstrating high handler attunement, positive reinforcement responsiveness, and joyful motivation.'
  },
  {
    id: 'gal-16',
    title: 'Uptop K9 Handlers Team & Pack Lineup',
    category: 'Kennel Life',
    image: '/assets/dogs/two-german-sherphards.png',
    caption: 'Our certified handling team with Boerboels, German Shepherds, and Rottweilers during morning exercise in Nairobi.'
  }
];

export const FAQS_DATA = [
  {
    q: 'Where is Uptop K9 located and can I come visit before buying?',
    a: 'We are situated in Nasra Gardens Estate, Nairobi, Kenya. Our facility is at Gate B, next to Naivas Umoja, by Muthaiga Gate A, HS 829, Rooftop. We welcome prospective pet owners to visit our facility, meet the parent dogs, and observe the puppies in their natural environment. We kindly ask that you schedule your visit at least 24 hours in advance so our handlers can give you undivided attention.'
  },
  {
    q: 'How does Lipa na M-Pesa payment work for puppy reservation and grooming?',
    a: 'Bookings are submitted on our website. For manual payment, use M-PESA Buy Goods Till Number 6941587 (UPTOP K9 KENNELS) and share the transaction confirmation with our handlers.'
  },
  {
    q: 'Are your puppies vaccinated and health guaranteed?',
    a: 'Yes, 100%. Every puppy leaves our kennel with a comprehensive veterinary health booklet signed by a registered Kenya Veterinary Board (KVB) veterinarian. Puppies receive all scheduled dewormings, core DHPPi vaccinations, and an international 15-digit microchip. We provide a signed written health guarantee.'
  },
  {
    q: 'Do you deliver puppies outside Nairobi?',
    a: 'Absolutely. We offer safe, climate-controlled ground delivery across Kenya including Mombasa, Nakuru, Kisumu, Eldoret, Naivasha, and Thika. We also handle cross-border veterinary permits and air transport for clients in Uganda, Tanzania, and Rwanda.'
  },
  {
    q: 'What is included in the dog grooming session?',
    a: 'Our grooming packages include a warm hydrotherapy bath with hypoallergenic shampoo, high-velocity blowout and undercoat de-shedding, nail trimming, ear canal flushing, paw pad balm, and coat conditioning. Mobile home grooming van visits are also available across Nairobi.'
  },
  {
    q: 'Why are your parent dogs not Kennel Club registered?',
    a: 'Our imported parent dogs were sourced directly from authentic working, shepherd and livestock guardian bloodlines where temperament, sound bone structure, and real guarding instincts take precedence over show-ring paper registries. We are completely transparent: we keep the parent dogs, health-test them, and offer puppies at honest, accessible rates of $450 to $550 (approx KES 58,500 – 71,500).'
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Captain Dennis Mwangi',
    location: 'Karen, Nairobi',
    breed: 'Kangal Puppy (Bruno Jr.)',
    rating: 5,
    quote: 'Our Kangal is now 9 months old and has transformed the security of our 2-acre compound. Calm around our children yet astonishingly watchful at night. Uptop K9 is genuine and transparent.'
  },
  {
    name: 'Dr. Sharon Otieno',
    location: 'Runda, Nairobi',
    breed: 'White Swiss Shepherd',
    rating: 5,
    quote: 'The grooming service is phenomenal. My long-coat shepherd came back smelling fresh, completely de-shedded, with nails neatly clipped. M-Pesa payment was seamless.'
  },
  {
    name: 'Evans Kiprono',
    location: 'Eldoret, Uasin Gishu',
    breed: 'Caucasian Shepherd (Thor)',
    rating: 5,
    quote: 'I was hesitant about shipping a pup to Eldoret, but Uptop arranged air transport with all KVB paperwork and travel crate. Arrived happy and energetic!'
  }
];
