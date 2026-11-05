export type HaryanaCity = 
  | 'Ambala'
  | 'Yamunanagar'
  | 'Kurukshetra'
  | 'Panchkula'
  | 'Pinjore'
  | 'Karnal'
  | 'Hisar'
  | 'Rohtak'
  | 'Faridabad'
  | 'Gurugram'
  | 'Panipat'
  | 'Sirsa';

export interface Destination {
  id: string;
  title: string;
  city: HaryanaCity;
  category: 'Heritage' | 'Nature' | 'Spiritual' | 'Culinary' | 'Handicraft' | 'Hidden Gem';
  tagline: string;
  description: string;
  detailedStory: string;
  reasonsToVisit: string[];
  isHiddenGem: boolean;
  radarScore?: number; // 1-100 radar uniqueness index
  rating: number;
  reviewsCount: number;
  estimatedCost: string;
  idealDuration: string;
  bestSeason: string;
  timings: string;
  locationDetails: string;
  nearestTransit: string;
  verificationStatus: 'Verified Local Story' | 'Community Reported' | 'Artisan Documented';
  highlights: string[];
  localTips: string[];
  image: string;
  tags: string[];
}

export interface CitySummary {
  name: HaryanaCity;
  tagline: string;
  attractionCount: number;
  highlights: string[];
  character: string;
  bestMonth: string;
}

export const SUPPORTED_CITIES: CitySummary[] = [
  {
    name: 'Ambala',
    tagline: 'Colonial cantonment heritage, textile bazaar & iconic chaat',
    attractionCount: 4,
    highlights: ["St. Paul's Ruins", 'Cloth Market', '1857 War Memorial'],
    character: 'Historic garrison architecture & bustling north Indian bazaars',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Yamunanagar',
    tagline: 'Sal forests, Yamuna river gorges & ancient brass foundries',
    attractionCount: 4,
    highlights: ['Kalesar National Park', 'Hathni Kund Barrage', 'Jagadhri Brass Guilds'],
    character: 'Untouched biodiversity reserve and generational metal smiths',
    bestMonth: 'Nov - Apr'
  },
  {
    name: 'Kurukshetra',
    tagline: 'Ancient sacred lakes, Gita discourses & marble mausoleums',
    attractionCount: 5,
    highlights: ['Brahma Sarovar', 'Sheikh Chilli Tomb', 'Jyotisar'],
    character: 'The cradle of Vedic history and peaceful evening Aarti',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Panchkula',
    tagline: 'Shivalik foothills, pine ridge trails & sacred hilltop shrines',
    attractionCount: 4,
    highlights: ['Tikkar Taal (Morni)', 'Mata Mansa Devi', 'Cactus Garden'],
    character: 'Only hill station retreat in Haryana with twin natural lakes',
    bestMonth: 'Sep - Apr'
  },
  {
    name: 'Pinjore',
    tagline: 'Mughal terraced water gardens & ancient Shivalik stone temples',
    attractionCount: 3,
    highlights: ['Yadavindra Gardens', 'Bhima Devi Temple (Khajuraho of North)', 'Kaushalya Dam'],
    character: '17th-century descending cascades and classical stone ruins',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Karnal',
    tagline: 'City of King Karna, serene water mirrors & aromatic basmati',
    attractionCount: 4,
    highlights: ['Karna Lake', 'Taraori Fort', 'Cantonment Church Tower'],
    character: 'Mahabharata heroic lore, agricultural research & highway retreats',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Hisar',
    tagline: '14th-century Tughlaq citadels, Agroha ruins & blue bird lake',
    attractionCount: 4,
    highlights: ['Firoz Shah Palace & Gujri Mahal', 'Agroha Dham', 'Blue Bird Lake'],
    character: 'Imperial stone fortress chambers, deer park & ancient mounds',
    bestMonth: 'Nov - Feb'
  },
  {
    name: 'Rohtak',
    tagline: 'Ancient Shaivite math, tranquil lakes & rustic wrestling gyms',
    attractionCount: 3,
    highlights: ['Tilyar Lake', 'Asthal Bohar Math', 'Khokhrakot Mound'],
    character: 'Earthy Haryanvi pride, monastic art & recreational wetlands',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Faridabad',
    tagline: '10th-century sun amphitheater reservoir & Aravalli crafts',
    attractionCount: 3,
    highlights: ['Surajkund Sun Reservoir', 'Badkhal Ridge Lake', 'Aravalli Biodiversity Trail'],
    character: 'Ancient Tomar dynasty engineering & artisan craft fairs',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Gurugram',
    tagline: 'Lush flamingo wetlands, vintage transports & rural trailheads',
    attractionCount: 4,
    highlights: ['Sultanpur Bird Sanctuary', 'Heritage Transport Museum', 'Damdama Lake'],
    character: 'World-renowned migratory bird flyways & rural Aravalli oasis',
    bestMonth: 'Nov - Feb'
  },
  {
    name: 'Panipat',
    tagline: 'Historic empire battlefields & handwoven Punja durrie looms',
    attractionCount: 4,
    highlights: ['Panipat Battlefield Memorial', 'Kabuli Bagh Mosque', 'Weavers Guild Bazaars'],
    character: 'Three epic battles that shaped India & living textile artistry',
    bestMonth: 'Oct - Mar'
  },
  {
    name: 'Sirsa',
    tagline: 'Ancient Saraswati valley trails, spiritual hermitage & dunes',
    attractionCount: 3,
    highlights: ['Tara Baba Kutiya', 'Ancient Sarsuti Valley', 'Dera Baba Bhuman Shah'],
    character: 'Quiet western frontier spirituality and desert-bordering plains',
    bestMonth: 'Nov - Feb'
  }
];

export const DESTINATIONS: Destination[] = [
  // 1. KURUKSHETRA
  {
    id: 'brahma-sarovar',
    title: 'Brahma Sarovar & Jyotisar Corridor',
    city: 'Kurukshetra',
    category: 'Spiritual',
    tagline: 'The ancient water mirror of Indian civilization',
    description: 'One of Asia’s largest sacred man-made water bodies mentioned in 11th-century accounts of Al-Biruni. Surrounded by stepped sandstone ghats, arched pavilions, and evening deepdan aarti.',
    detailedStory: 'According to centuries-old oral traditions and historical epics, Brahma Sarovar is regarded as the cradle of cosmic creation. At dusk, hundreds of brass lamps float across calm waters reflecting ancient stone pavilions while Vedic chants echo across the ghats. Just 5 km away lies Jyotisar, the revered banyan grove where the Bhagavad Gita was expounded.',
    reasonsToVisit: [
      'Mesmerizing evening Deepdan (lamp lighting) ritual at sunset',
      'Walk the 1.2 km perimeter walkway with cool breezes in winter',
      'Visit the bronze chariot monument sculpted by national master artisans',
      'Peaceful sunrise walks away from commercial rush'
    ],
    isHiddenGem: false,
    rating: 4.8,
    reviewsCount: 3420,
    estimatedCost: '₹100 - ₹300 (Boat ride & Prasad)',
    idealDuration: '3 to 4 Hours',
    bestSeason: 'October to March (Ideal for Gita Mahotsav in Dec)',
    timings: 'Open 24 hours; Best: 5:30 AM - 9:00 AM & 5:00 PM - 8:00 PM',
    locationDetails: 'Thanesar, Kurukshetra, Haryana 136118',
    nearestTransit: '3.5 km from Kurukshetra Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['Deepdan Aarti', 'Historic Ghats', 'Al-Biruni Reference', 'Sarovar Boating'],
    localTips: [
      'Visit around 5:15 PM to catch both the sunset reflections and 6:30 PM Aarti',
      'Sample freshly fried Besan Jalebi at Thanesar Old Bazaar outside the south gate',
      'Photography is best from the northern pavilion archways looking south'
    ],
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg',
    tags: ['Heritage', 'Spiritual', 'Sunset', 'Iconic']
  },
  {
    id: 'sheikh-chilli-tomb',
    title: 'Sheikh Chilli’s Tomb & Harsh Ka Tila',
    city: 'Kurukshetra',
    category: 'Heritage',
    tagline: 'Haryana’s marble pearl — Persian Mughal elegance in Thanesar',
    description: 'A 17th-century octagonal white marble mausoleum with floral pietra-dura carvings overlooking the 1,400-year-old archaeological excavations of King Harshavardhana.',
    detailedStory: 'Built in memory of Sufi mystic Abd-ur-Rahim (Sheikh Chilli), tutor to Mughal prince Dara Shikoh. The complex combines a high sandstone terrace, pearl-white marble dome, an exquisite arcaded madrasa courtyard, and adjacent excavations of King Harsha’s 7th-century imperial mounds at Harsh Ka Tila.',
    reasonsToVisit: [
      'Exquisite Persian architectural symmetry with pristine marble dome',
      'Walk through the tranquil arcaded madrasa and ASI archaeological museum',
      'Gaze over ancient excavated ruins of King Harsha’s 1,400-year-old palace mounds',
      'Quiet, photogenic courtyard with peaceful reflective corners'
    ],
    isHiddenGem: true,
    radarScore: 92,
    rating: 4.6,
    reviewsCount: 2190,
    estimatedCost: '₹25 (ASI entry fee)',
    idealDuration: '1.5 to 2.5 Hours',
    bestSeason: 'October to March',
    timings: '9:00 AM to 5:00 PM (Closed on Fridays)',
    locationDetails: 'Thanesar, Kurukshetra, Haryana 136118',
    nearestTransit: '4 km from Kurukshetra Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['White Marble Dome', 'Dara Shikoh Connection', 'Harsh Ka Tila Ruins', 'ASI Archaeological Museum'],
    localTips: [
      'The morning sun lights up the marble dome facade beautifully for photography',
      'Don’t miss the small subterranean chamber beneath the central tomb terrace',
      'The ASI museum inside displays rare coins and terracotta figurines'
    ],
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg',
    tags: ['Heritage', 'Architecture', 'Mughal', 'Museum', 'Hidden Gem']
  },

  // 2. PANCHKULA
  {
    id: 'tikkar-taal-morni',
    title: 'Tikkar Taal & Morni Shivalik Valleys',
    city: 'Panchkula',
    category: 'Nature',
    tagline: 'Haryana’s only hill station hideaway with twin pristine lakes',
    description: 'Perched in the outer Shivalik foothills at an elevation of 1,220 meters, Morni Hills offers quiet pine-scented ridge trails and the twin serene waters of Tikkar Taal.',
    detailedStory: 'Few travelers realize that Haryana boasts lush pine forests and panoramic mountain viewpoints. Tikkar Taal is actually composed of two interconnected natural lakes separated by a gentle hillock, held sacred by the hill villagers. Migratory waterfowl visit during November through February, and quiet forest walking trails wind toward the ancient Morni Fort.',
    reasonsToVisit: [
      'Twin natural lakes surrounded by Shivalik ridges with calm rowboats',
      'Scenic mountain drive with zero commercial pollution or aggressive hawkers',
      'Birdwatcher paradise with red junglefowl, grey hornbills, and barbets',
      'Campsites and quiet village trails offering fresh mountain air'
    ],
    isHiddenGem: true,
    radarScore: 94,
    rating: 4.7,
    reviewsCount: 1840,
    estimatedCost: '₹500 - ₹1,200 (Fuel + boating + local tea)',
    idealDuration: 'Half Day to Full Day',
    bestSeason: 'September to April (Pleasant, misty mornings)',
    timings: 'Lake area open 6:00 AM to 6:30 PM',
    locationDetails: 'Morni Hills, Panchkula District, Haryana 134205',
    nearestTransit: '42 km from Chandigarh / Panchkula Sector 5 bus terminal',
    verificationStatus: 'Verified Local Story',
    highlights: ['Twin Lakes', 'Pine Ridges', 'Row Boating', 'Morni Fort ruins'],
    localTips: [
      'Pack drinking water and snacks as shops near the smaller lake are limited',
      'The morning mist usually lifts by 8:30 AM, creating glass-like water reflections',
      'Take the narrow hiking spur up to the old watchtower for 360-degree Shivalik views'
    ],
    image: '/src/assets/images/hero_haryana_landscape_1793859250332.jpg',
    tags: ['Hidden Gem', 'Hills', 'Lake', 'Nature', 'Trek']
  },
  {
    id: 'mansa-devi-panchkula',
    title: 'Mata Mansa Devi Shrine & Cactus Garden',
    city: 'Panchkula',
    category: 'Spiritual',
    tagline: 'Sacred Himalayan foothills shrine with Asia’s largest succulent garden',
    description: 'A 19th-century hill shrine built by Maharaja Gopal Singh of Mani Majra, adjacent to the National Cactus & Succulent Botanical Garden housing 3,500 rare species.',
    detailedStory: 'Located at the foothills of the Bilaspur ridge, this sacred Shaktipeeth temple showcases Kangra-style wall murals and intricate stone carving. A short ride away sits the National Cactus Garden, a 7-acre botanical oasis engineered by Dr. J.S. Sarkaria showcasing endangered desert species from Arizona to Madagascar.',
    reasonsToVisit: [
      'Peaceful foothill temple atmosphere with views of the Shivalik range',
      'Marvel at over 3,500 species of rare exotic cacti and succulents',
      'Experience Navratri cultural festivities with thousands of clay oil lamps',
      'Ideal relaxing afternoon for botanical lovers and spiritual seekers'
    ],
    isHiddenGem: false,
    rating: 4.7,
    reviewsCount: 5200,
    estimatedCost: '₹50 - ₹150 (Prasad & Garden entry)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: 'Temple: 5:00 AM - 9:30 PM; Cactus Garden: 9:00 AM - 6:00 PM',
    locationDetails: 'Sector 4, Mansa Devi Complex, Panchkula, Haryana 134114',
    nearestTransit: '7 km from Chandigarh Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['Foothill Shaktipeeth', 'Asia’s Largest Cactus Garden', 'Kangra Wall Murals', 'Shivalik Views'],
    localTips: [
      'Early morning (6:30 AM) visit avoids long queues and offers serene bird songs',
      'The Cactus Garden is especially vibrant in February when rare desert specimens bloom'
    ],
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg',
    tags: ['Spiritual', 'Garden', 'Botanical', 'Panchkula']
  },

  // 3. PINJORE
  {
    id: 'yadavindra-pinjore',
    title: 'Pinjore Yadavindra Terraced Gardens',
    city: 'Pinjore',
    category: 'Heritage',
    tagline: '17th-century Mughal classical water garden with 7 descending terraces',
    description: 'Designed during Emperor Aurangzeb’s reign by architect Nawab Fidai Khan, this rare Charbagh layout descends rather than ascends, utilizing gravity-fed mountain canals.',
    detailedStory: 'Unlike Kashmir’s terraced gardens that step upwards into hills, Pinjore is famously inverted — you enter at the highest terrace and descend down seven grand stone levels. Each terrace features distinct pavilions: Shish Mahal, Rang Mahal, and Jal Mahal, surrounded by heritage water fountains, Japanese stone lamps, and 300-year-old mango groves.',
    reasonsToVisit: [
      'Seven monumental terraces with cascading water channels and historic fountains',
      'Stunning lighting after 6:30 PM with atmospheric garden illuminations',
      'Historic Rajasthani-Mughal synthesis in pavilions and arched jharokhas',
      'Peaceful afternoon walks under centuries-old orchard trees'
    ],
    isHiddenGem: false,
    rating: 4.6,
    reviewsCount: 4120,
    estimatedCost: '₹50 (Entry) + ₹50 (Fountains & Museum)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March (Also Mango Festival in July)',
    timings: '7:00 AM to 9:30 PM',
    locationDetails: 'Ambala-Shimla Highway, Pinjore, Haryana 134102',
    nearestTransit: '5 km from Kalka Railway Station; 22 km from Chandigarh',
    verificationStatus: 'Verified Local Story',
    highlights: ['7 Descending Terraces', 'Jal Mahal', 'Evening Fountain Show', 'Historic Mango Orchard'],
    localTips: [
      'Visit between 4:30 PM and 7:30 PM to enjoy daylight architecture and the evening illuminated fountain show',
      'Wear flat comfortable walking shoes for the historic cobblestone slopes',
      'Do not miss the lower orchard terrace which is often quietest'
    ],
    image: '/src/assets/images/pinjore_yadavindra_gardens_1793859252279.jpg',
    tags: ['Heritage', 'Architecture', 'Water Garden', 'Family']
  },
  {
    id: 'bhima-devi-pinjore',
    title: 'Bhima Devi Temple Complex (Khajuraho of North India)',
    city: 'Pinjore',
    category: 'Hidden Gem',
    tagline: '8th to 11th century Gurjara-Pratihara sculpted stone temple ruins',
    description: 'An open-air archaeological park containing exquisitely carved sandstone friezes of deities, musicians, and celestial nymphs dating from the early medieval era.',
    detailedStory: 'Often referred to as the Khajuraho of North India due to its intricate sculptural program, Bhima Devi was a major panchayatana temple complex destroyed in medieval conflicts. Revived by archaeological excavation, today visitors can wander among museum-preserved plinths, life-sized sandstone Ganesha statues, and mythological friezes set in manicured grass.',
    reasonsToVisit: [
      'Incredible medieval stone sculptures and friezes with zero crowds',
      'Rare Gurjara-Pratihara architectural motifs in Haryana',
      'Located just 600 meters from Pinjore Gardens yet vastly undiscovered',
      'Open-air sculpture gallery shaded by ancient trees'
    ],
    isHiddenGem: true,
    radarScore: 95,
    rating: 4.5,
    reviewsCount: 520,
    estimatedCost: '₹20 (Entry fee)',
    idealDuration: '1 to 2 Hours',
    bestSeason: 'October to March',
    timings: '9:00 AM to 5:00 PM',
    locationDetails: 'Near Yadavindra Gardens, Pinjore, Haryana 134102',
    nearestTransit: '6 km from Kalka Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['Medieval Sculptures', 'Panchayatana Layout', 'Archaeological Park', 'Quiet Solitude'],
    localTips: [
      'Pair this with Pinjore Gardens in the early afternoon before heading to the Mughal gardens for sunset',
      'Look for the intricate carvings of river goddesses Ganga and Yamuna on the door jambs'
    ],
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg',
    tags: ['Hidden Gem', 'Archaeology', 'Sculpture', 'Heritage']
  },

  // 4. AMBALA
  {
    id: 'ambala-cantt-colonial-bazaar',
    title: 'Historic Cantonment Trails & St. Paul’s Ruins',
    city: 'Ambala',
    category: 'Heritage',
    tagline: 'Colonial gothic arches, 1857 memorial, and legendary cloth bazaars',
    description: 'Ambala Cantonment preserves 19th-century military gothic architecture, the evocative ruined tower of St. Paul’s Church, and legendary century-old chaat hubs.',
    detailedStory: 'Established as a premier British military station in 1843, Ambala played a pivotal role during India’s 1857 independence rebellion. Today, the evocative red-brick gothic spire and surviving arches of St. Paul’s Church stand surrounded by giant banyan trees like a romantic European ruin. Nearby, Ambala Cloth Market is one of Northern India’s largest traditional textile hubs.',
    reasonsToVisit: [
      'Photograph the hauntingly atmospheric St. Paul’s red-brick gothic archways',
      'Explore the massive 1857 First War of Independence Memorial Park',
      'Taste legendary Ambala Cantt crisp tikkis, rabri kulfi, and petha',
      'Discover authentic handloom bridal dupattas and Phulkari embroidery'
    ],
    isHiddenGem: true,
    radarScore: 91,
    rating: 4.6,
    reviewsCount: 1450,
    estimatedCost: '₹200 - ₹500 (Food & heritage walk)',
    idealDuration: '3 to 5 Hours',
    bestSeason: 'October to February',
    timings: 'Memorial: 9:00 AM - 6:00 PM; Cloth Market: 11:00 AM - 8:30 PM',
    locationDetails: 'Ambala Cantonment, Ambala District, Haryana 133001',
    nearestTransit: '1 km from Ambala Cantt Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['St. Paul’s Ruins', '1857 Memorial Park', 'Ambala Cloth Market', 'Famous Chaat Trail'],
    localTips: [
      'Visit St. Paul’s around 3:30 PM for dramatic warm light filtering through banyan branches',
      'Try the signature double-fried tikki at Sadar Bazaar near Jaggi City Centre',
      'Sunday market is bustling; weekday mornings are best for peaceful textile shopping'
    ],
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg',
    tags: ['Hidden Gem', 'Architecture', 'Colonial', 'Street Food']
  },
  {
    id: 'ambala-cloth-market-food',
    title: 'Ambala Wholesale Cloth Market & Street Food Haven',
    city: 'Ambala',
    category: 'Culinary',
    tagline: 'Asia’s premier wedding textile galleria and legendary street crunch',
    description: 'A vibrant maze of 1,000+ handloom and apparel shops dating to the partition era, woven alongside hot kachoris, chole bhature, and makkhan-laden parathas.',
    detailedStory: 'Ambala Cloth Market began as a modest settlement of refugee merchants in 1948 and grew into North India’s biggest destination for wedding trousseaus, Phulkari shawls, and pure handloom fabrics. Interspersed between textile lanes are generational food stalls frying legendary potato tikkis and boiling fresh rabri in giant brass cauldrons.',
    reasonsToVisit: [
      'Shop authentic Phulkari silk stoles and bridal lehengas at wholesale prices',
      'Taste century-old recipe aloo kachori served on dried sal leaf bowls',
      'Experience the pulse of a classic Indian bazaar buzzing with hospitality',
      'Great bargains on traditional punja cotton rugs and suits'
    ],
    isHiddenGem: false,
    rating: 4.5,
    reviewsCount: 3100,
    estimatedCost: '₹300 - ₹2,000 (Shopping & food)',
    idealDuration: '2 to 4 Hours',
    bestSeason: 'October to March',
    timings: '11:00 AM to 8:30 PM (Closed on Sundays)',
    locationDetails: 'Old Cloth Market, Ambala City, Haryana 134003',
    nearestTransit: '4 km from Ambala City Railway Station',
    verificationStatus: 'Community Reported',
    highlights: ['Phulkari Trousseau', 'Double Fried Tikki', 'Kachori Stall', 'Silk Bazaars'],
    localTips: [
      'Cash or UPI works best; bring comfortable shoes as cars cannot enter narrow lanes',
      'Stop by Jaggi Sweets for their traditional Pinni and Besan Laddu'
    ],
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg',
    tags: ['Shopping', 'Street Food', 'Handicraft', 'Culture']
  },

  // 5. YAMUNANAGAR
  {
    id: 'kalesar-hathnikund-yamunanagar',
    title: 'Kalesar National Park & Hathni Kund Barrage',
    city: 'Yamunanagar',
    category: 'Nature',
    tagline: 'Dense Sal forests where the Yamuna river meets the Shivaliks',
    description: 'An untouched 13,000-acre biodiversity reserve bordered by Himachal, Uttarakhand, and UP, where leopards, wild elephants, and 200+ bird species roam wild.',
    detailedStory: 'Kalesar is Haryana’s hidden green secret. Spread along the Shivalik foothills where the Yamuna rushes into the northern plains, the national park features towering Sal trees and scenic forest trails. Nearby, the Hathni Kund Barrage offers dramatic vistas of turquoise river waters against forested mountain ridges.',
    reasonsToVisit: [
      'Spot wild elephants, leopards, sambar, and rare migratory waterfowl',
      'Walk alongside the turquoise Yamuna river rapids at Hathni Kund',
      'Visit the ancient 100-year-old Dak Bungalow overlooking the forested gorge',
      'Experience serene jungle safaris without the crowds of Jim Corbett'
    ],
    isHiddenGem: true,
    radarScore: 93,
    rating: 4.7,
    reviewsCount: 1290,
    estimatedCost: '₹300 - ₹800 (Forest permit & local guide)',
    idealDuration: 'Full Day',
    bestSeason: 'October to April (Park closed during heavy monsoon)',
    timings: '6:30 AM to 10:30 AM & 2:00 PM to 5:00 PM',
    locationDetails: 'Kalesar, Yamunanagar District, Haryana 135106',
    nearestTransit: '45 km from Yamunanagar-Jagadhri Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['Dense Sal Forest', 'Yamuna Riverbank', 'Hathni Kund Barrage', 'Colonial Dak Bungalow'],
    localTips: [
      'Prior forest department safari entry booking at the entry gate is required',
      'Carry binoculars for sighting rare hornbills and river eagles',
      'Combine this with a stop in Jagadhri to see traditional brass craftsmanship'
    ],
    image: '/src/assets/images/hero_haryana_landscape_1793859250332.jpg',
    tags: ['Nature', 'Wildlife', 'River', 'Hidden Gem', 'Forest']
  },
  {
    id: 'jagadhri-brass-heritage',
    title: 'Jagadhri Brass Guilds & Sugh Archaeological Mound',
    city: 'Yamunanagar',
    category: 'Handicraft',
    tagline: 'Centuries of handcrafted metalwork and 2,500-year-old Buddhist trade trails',
    description: 'Known as the "Brass City" of Haryana, Jagadhri retains master craftsmen shaping copper and brass cookware, alongside the ancient Buddhist settlement of Sugh.',
    detailedStory: 'For generations, the rhythmic clanging of hammers against glowing brass and bell metal has defined Jagadhri’s artisan quarters. Vessels crafted here are prized across North India for culinary Ayurveda. Just 5 km outside town lies the ancient Buddhist mound of Sugh (ancient Shrughna), mentioned by Chinese pilgrim Xuanzang in 630 CE.',
    reasonsToVisit: [
      'Watch master coppersmiths and brass hammerers at work in old bazaars',
      'Purchase heavy pure brass kadhais, lassi glasses, and temple bells at artisan rates',
      'Visit the ancient Sugh Buddhist mound excavated by the Archaeological Survey',
      'Taste traditional Jagadhri Ghewar and hot milk served in earthen kulhads'
    ],
    isHiddenGem: true,
    radarScore: 89,
    rating: 4.5,
    reviewsCount: 740,
    estimatedCost: '₹300 - ₹1,500 (Authentic brass souvenirs)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'November to February',
    timings: 'Workshops active: 10:00 AM to 6:00 PM',
    locationDetails: 'Old Jagadhri Bazaar, Yamunanagar District, Haryana 135003',
    nearestTransit: '3 km from Yamunanagar-Jagadhri Railway Station',
    verificationStatus: 'Artisan Documented',
    highlights: ['Traditional Brass Hammersmiths', 'Ancient Sugh Mound', 'Culinary Copper Utensils', 'Heritage Bazaars'],
    localTips: [
      'Look for the hallmark mark of purity when purchasing hand-beaten bronze and brass',
      'Old Chowk Bazaar offers the most authentic generational workshops'
    ],
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg',
    tags: ['Handicraft', 'Artisans', 'History', 'Shopping', 'Hidden Gem']
  },

  // 6. GURUGRAM
  {
    id: 'sultanpur-gurugram',
    title: 'Sultanpur National Bird Sanctuary & Wetlands',
    city: 'Gurugram',
    category: 'Nature',
    tagline: 'Global Ramsar wetland alive with 250+ migratory winter bird species',
    description: 'A 350-acre protected wetland ecosystem on the edge of the NCR where Siberian cranes, flamingos, bar-headed geese, and pelicans winter among water lily lagoons.',
    detailedStory: 'While Gurugram is famous as a futuristic cyber metropolis, Sultanpur National Park preserves ancient Aravalli wetland ecology. Declared a Ramsar Wetland of International Importance, four watchtowers overlook expansive shallow lagoons bordered by acacia groves. Naturalist Peter Jackson and legendary ornithologist Salim Ali championed its protection in the early 1970s.',
    reasonsToVisit: [
      'Incredible birdwatching with flamingos, painted storks, and grey pelicans',
      'Silent nature trails and 4 panoramic wooden observation watchtowers',
      'Educational interpretation center with rare specimen audio exhibits',
      'Picturesque sunrise photography over water lily lagoons'
    ],
    isHiddenGem: false,
    rating: 4.7,
    reviewsCount: 6800,
    estimatedCost: '₹50 (Entry) + ₹50 (Camera fee)',
    idealDuration: '3 to 4 Hours',
    bestSeason: 'November to February (Peak migratory bird arrivals)',
    timings: '7:00 AM to 4:30 PM (Closed on Tuesdays)',
    locationDetails: 'Gurugram-Jhajjar Road, Sultanpur, Gurugram, Haryana 122505',
    nearestTransit: '15 km from Gurugram Railway Station; 40 km from Delhi IGI Airport',
    verificationStatus: 'Verified Local Story',
    highlights: ['Ramsar Wetland', '250+ Bird Species', 'Observation Watchtowers', 'Salim Ali Trail'],
    localTips: [
      'Arrive right at 7:00 AM when the park opens; bird feeding activity peaks in the golden morning hour',
      'Binoculars are available for rent at the ticket counter for ₹100'
    ],
    image: '/src/assets/images/gurugram_sultanpur_bird_1793859384210.jpg',
    tags: ['Nature', 'Birds', 'Wetland', 'Ramsar', 'Photography']
  },
  {
    id: 'heritage-transport-museum',
    title: 'Heritage Transport Museum (Taoru)',
    city: 'Gurugram',
    category: 'Hidden Gem',
    tagline: 'India’s premier repository of vintage locomotives, carriages & aviation',
    description: 'A world-class 90,000 sq.ft contemporary museum showcasing India’s transportation evolution: restored 1920s vintage cars, palanquins, Indian Railways salon cars, and vintage aircraft.',
    detailedStory: 'Hidden in the countryside near Bilaspur-Taoru off NH-8, this privately curated museum is one of the country’s finest design and heritage destinations. Highlights include a 1930s wooden railway salon coach, retro Vespa scooters, rural Haryanvi Jugaad vehicles, and contemporary art installations made from discarded automotive components.',
    reasonsToVisit: [
      'World-class curation on par with Smithsonian transport exhibits',
      'Over 75 mint-condition vintage automobiles from 1886 onwards',
      'Interactive railway platform and vintage aviation gallery',
      'Family-friendly discovery zone with vintage movie screenings'
    ],
    isHiddenGem: true,
    radarScore: 96,
    rating: 4.8,
    reviewsCount: 4200,
    estimatedCost: '₹400 (Adult ticket)',
    idealDuration: '3 to 4 Hours',
    bestSeason: 'All year round (Fully climate-controlled)',
    timings: '10:00 AM to 7:00 PM (Closed on Mondays)',
    locationDetails: 'Bilaharpur, NH-8 (Major MDR 132), Gurugram District, Haryana 122105',
    nearestTransit: '30 km from HUDA City Centre Metro Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['75+ Vintage Cars', 'Original Railway Salon', 'Piper Aircraft', 'Aviation Gallery'],
    localTips: [
      'Great weekend road trip from Delhi-NCR; has a chic in-house cafe',
      'The outdoor train platform makes an incredible retro photo backdrop'
    ],
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg',
    tags: ['Museum', 'Heritage', 'Hidden Gem', 'Vintage', 'Design']
  },

  // 7. KARNAL
  {
    id: 'karna-lake-karnal',
    title: 'Historic Karna Lake & Oasis Promenade',
    city: 'Karnal',
    category: 'Nature',
    tagline: 'Tranquil water retreat where Mahabharata’s heroic King Karna gave alms',
    description: 'A serene reflective lake surrounded by weeping willows and landscaped ghats on the Grand Trunk Road, steeped in legends of King Karna’s morning solar prayers.',
    detailedStory: 'Named after King Karna, the tragic hero of the Mahabharata known for his unmatched generosity. Legend holds that Karna bathed in these tranquil waters every sunrise and gifted gold to anyone who asked. Today, Karna Lake is a tranquil haven with solar-powered paddle boats, lakeside walking tracks, and heritage dhabas.',
    reasonsToVisit: [
      'Tranquil water reflection with evening gazebo lighting and willow trees',
      'Relaxing paddle boating and morning jogging loop along the water perimeter',
      'Famous stopover for authentic Haryanvi buttermilk, parathas, and sweets',
      'Gateway to explore Karnal’s agricultural research parks and ancient fort at Taraori'
    ],
    isHiddenGem: false,
    rating: 4.5,
    reviewsCount: 3900,
    estimatedCost: '₹100 - ₹250 (Paddle boating & snacks)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '6:00 AM to 9:00 PM',
    locationDetails: 'GT Karnal Road (NH-44), Karnal, Haryana 132001',
    nearestTransit: '5 km from Karnal Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['King Karna Legend', 'Water Promenade', 'Paddle Boating', 'NH-44 Highway Oasis'],
    localTips: [
      'Evening dusk is magical when the water reflects the illuminated gazebo pavilions',
      'Try the signature hot basmati kheer served in traditional clay pots nearby'
    ],
    image: '/src/assets/images/karnal_lake_heritage_1793859384918.jpg',
    tags: ['Nature', 'Lake', 'Legend', 'Heritage', 'Relax']
  },
  {
    id: 'taraori-fort-basmati',
    title: 'Taraori Historical Citadel & Basmati Fields',
    city: 'Karnal',
    category: 'Hidden Gem',
    tagline: 'Site of the 1191 Battles of Tarain and the fragrance of world-class rice',
    description: 'Ancient fortified gateway and citadel ruins where Prithviraj Chauhan fought Mohammad Ghori, surrounded by emerald-green aromatic Basmati paddy fields.',
    detailedStory: 'Taraori (historical Tarain) is hallowed ground in Indian military history, hosting the fateful 1191 and 1192 Battles of Tarain. The 12th-century gateway, royal inn (sarai), and high bastions still stand weathered by time. Today, the surrounding countryside is the epicenter of India’s GI-tagged premium Basmati rice cultivation.',
    reasonsToVisit: [
      'Walk through the massive medieval arched gateway of historic Tarain Sarai',
      'Stand on the historical grounds of one of India’s most monumental battles',
      'Experience aromatic basmati harvesting trails in October and November',
      'Interact with local farming families at traditional grain mandis'
    ],
    isHiddenGem: true,
    radarScore: 94,
    rating: 4.4,
    reviewsCount: 610,
    estimatedCost: 'Free / ₹100 for local village chai',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March (Paddy harvest in autumn)',
    timings: 'Open daylight hours: 8:00 AM to 6:00 PM',
    locationDetails: 'Taraori, Karnal District, Haryana 132116',
    nearestTransit: '14 km north of Karnal along NH-44',
    verificationStatus: 'Community Reported',
    highlights: ['1191 Battle of Tarain', 'Medieval Fortified Sarai', 'Basmati Rice Heartland', 'Rustic Farm Walks'],
    localTips: [
      'Combine your visit with Taraori grain mandi during the October basmati auctions to experience the heady aroma of freshly cut rice',
      'Wear sturdy walking shoes to explore the old brick bastions'
    ],
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg',
    tags: ['Hidden Gem', 'History', 'Battlefield', 'Rural', 'Basmati']
  },

  // 8. HISAR
  {
    id: 'firoz-shah-palace-hisar',
    title: 'Firoz Shah Palace Complex & Gujri Mahal',
    city: 'Hisar',
    category: 'Heritage',
    tagline: '14th-century Tughlaq fortress palace built for love and desert statecraft',
    description: 'An imposing stone citadel built in 1354 CE by Sultan Firoz Shah Tughlaq, featuring the romantic Gujri Mahal palace, subterranean cooling vaults, and the Ashokan Lat pillar.',
    detailedStory: 'Originally named Hisar-e-Firoza ("The Fort of Firoz"), this fortress was constructed using rubble masonry and carved materials from ancient Agroha. Sultan Firoz Shah built the exquisite Gujri Mahal inside the fort for his beloved local Gurjar milkmaid queen, featuring 9 ornate stone bays on a high plinth and cooling underground chambers designed for scorching desert summers.',
    reasonsToVisit: [
      'Explore mysterious subterranean chambers (tahkhana) and arched vaulted passages',
      'Admire the delicate 9-bay symmetry of the romantic Gujri Mahal',
      'Examine the ancient Lat ki Masjid and its monolithic Ashokan stone pillar',
      'Marvel at massive medieval stone bastions and royal hamam bathing halls'
    ],
    isHiddenGem: false,
    rating: 4.6,
    reviewsCount: 2890,
    estimatedCost: '₹25 (ASI entry fee)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '8:00 AM to 6:00 PM',
    locationDetails: 'Opposite Bus Stand, Hisar, Haryana 125001',
    nearestTransit: '2 km from Hisar Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['1354 CE Tughlaq Citadel', 'Gujri Mahal', 'Lat ki Masjid', 'Subterranean Vaults'],
    localTips: [
      'Late afternoon golden hour produces stunning shadows through the stone arches',
      'The complex is very peaceful on weekday mornings; bring a hat and water'
    ],
    image: '/src/assets/images/hisar_firoz_shah_palace_1793859385454.jpg',
    tags: ['Heritage', 'Fort', 'Architecture', 'Tughlaq', 'Hisar']
  },
  {
    id: 'agroha-dham-hisar',
    title: 'Agroha Dham & Ancient Archaeological Mound',
    city: 'Hisar',
    category: 'Spiritual',
    tagline: 'The ancestral cradle of Maharaja Agrasen and Harappan trade trails',
    description: 'A grand temple complex dedicated to Goddess Mahalakshmi and Maharaja Agrasen, situated beside the ancient excavated mound (Agrodaka) with relics from 3rd century BCE.',
    detailedStory: 'Agroha was once the prosperous capital of the republican Agreya kingdom described in Buddhist and Mahabharata scriptures. Excavations at the adjacent mound unearthed terracotta plaques, Greco-Bactrian coins, and 2,000-year-old stone fortifications. Today, the majestic red-sandstone Agroha Dham stands as an inspiring cultural pilgrimage.',
    reasonsToVisit: [
      'Marvel at the magnificent red sandstone temple shikhara and sprawling gardens',
      'Explore archaeological excavations at the ancient Agrodaka mound',
      'Discover the inspiring social philosophy of Maharaja Agrasen (one brick, one coin)',
      'Taste pure vegetarian prasad and traditional regional sweets'
    ],
    isHiddenGem: true,
    radarScore: 90,
    rating: 4.7,
    reviewsCount: 3100,
    estimatedCost: 'Free entry / Voluntary donation',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '5:00 AM to 9:00 PM',
    locationDetails: 'NH-9, Agroha, Hisar District, Haryana 125047',
    nearestTransit: '22 km northwest of Hisar on the Sirsa-Fatehabad highway',
    verificationStatus: 'Verified Local Story',
    highlights: ['Ancient Agrodaka Mound', 'Maharaja Agrasen Memorial', 'Grand Shakti Temple', 'Charity Kitchen'],
    localTips: [
      'Visit the archaeological museum annex to view ancient coins and seals found at the mound',
      'Clean guest houses and family dharamsalas available for travelers'
    ],
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg',
    tags: ['Spiritual', 'Archaeology', 'Heritage', 'Hidden Gem']
  },

  // 9. FARIDABAD
  {
    id: 'surajkund-faridabad',
    title: 'Surajkund 10th-Century Sun Reservoir & Aravalli Trails',
    city: 'Faridabad',
    category: 'Heritage',
    tagline: 'Ancient Tomar dynasty sun amphitheater stepped reservoir in the Aravallis',
    description: 'An iconic semi-circular stepped stone embankment built by King Suraj Pal of the Tomar dynasty in the 10th century, set against rugged Aravalli rocky scrub forests.',
    detailedStory: 'Surajkund literally means "Pool of the Sun". Predating the Sultanate era of Delhi, this stone reservoir is designed like an ancient Roman amphitheater with stepped stone tiers descending to natural spring waters. In February, its adjoining grounds host the globally celebrated Surajkund International Crafts Mela.',
    reasonsToVisit: [
      'Marvel at ancient 10th-century water architecture and amphitheater stone steps',
      'Hike nearby rocky Aravalli nature spurs with views of peacock habitats',
      'Experience the international Surajkund Crafts Mela during the first half of February',
      'Peaceful heritage heritage walk away from the metropolis noise'
    ],
    isHiddenGem: false,
    rating: 4.6,
    reviewsCount: 5400,
    estimatedCost: '₹20 (Regular entry); ₹120 (During Crafts Mela)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March (Spectacular in February for Crafts Mela)',
    timings: '6:00 AM to 6:00 PM',
    locationDetails: 'Surajkund Road, Faridabad, Haryana 121009',
    nearestTransit: '8 km from Badarpur Border Metro Station (Delhi-Faridabad Violet Line)',
    verificationStatus: 'Verified Local Story',
    highlights: ['10th Century Tomar Reservoir', 'Amphitheater Steps', 'Aravalli Scrub Trails', 'International Crafts Mela'],
    localTips: [
      'Early mornings provide dramatic side-lighting on the ancient stone steps',
      'Wear flat sneakers with good grip as the ancient stone tiers can be uneven'
    ],
    image: '/src/assets/images/faridabad_surajkund_heritage_1793859385958.jpg',
    tags: ['Heritage', 'Reservoir', 'Aravalli', 'Architecture', 'Faridabad']
  },
  {
    id: 'badkhal-aravalli-ridge',
    title: 'Badkhal Ridge & Asola Foothill Trails',
    city: 'Faridabad',
    category: 'Hidden Gem',
    tagline: 'Quiet rocky ridges, indigenous wildlife and panoramic hill lookouts',
    description: 'A rugged geological spur of the northern Aravallis featuring undulating rock trails, seasonal migratory bird ponds, and scenic sunset views across the plains.',
    detailedStory: 'While the historic lake basin undergoes ecological rejuvenation, the surrounding Aravalli ridge offers some of the most rewarding off-beat hiking trails in Haryana. Home to golden jackals, nilgai, and crested serpent eagles, the ridgeline provides a stark, dramatic contrast of ancient Precambrian quartzite hills.',
    reasonsToVisit: [
      'Scenic rock scrambles and peaceful ridge trails for nature photographers',
      'Spot native peacocks, nilgai, and parakeets in their natural rocky scrub habitat',
      'Panoramic sunset viewpoints looking over the vast southern Haryana plains',
      'Great weekend trail running and mountain biking trails'
    ],
    isHiddenGem: true,
    radarScore: 88,
    rating: 4.3,
    reviewsCount: 820,
    estimatedCost: 'Free access',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'November to February',
    timings: 'Best between 6:30 AM and 5:30 PM',
    locationDetails: 'Badkhal Village Ridge, Faridabad, Haryana 121001',
    nearestTransit: '4 km from Badkhal Mor Metro Station',
    verificationStatus: 'Community Reported',
    highlights: ['Precambrian Quartzite Ridges', 'Wildlife Sighting', 'Sunset Viewpoint', 'Off-beat Hike'],
    localTips: [
      'Carry your own hydration pack and travel in small groups',
      'Stick to established walking trails to preserve delicate Aravalli scrub flora'
    ],
    image: '/src/assets/images/faridabad_surajkund_heritage_1793859385958.jpg',
    tags: ['Hidden Gem', 'Nature', 'Aravalli', 'Trek', 'Wildlife']
  },

  // 10. ROHTAK
  {
    id: 'tilyar-lake-rohtak',
    title: 'Tilyar Lake & Wildlife Mini Zoo',
    city: 'Rohtak',
    category: 'Nature',
    tagline: 'A 132-acre sprawling green oasis with boating and animal sanctuary',
    description: 'A scenic 20-acre freshwater lake framed by dense green forest groves, toy train rides, and a mini zoo housing leopards, deer, and exotic Himalayan birds.',
    detailedStory: 'Tilyar Lake is Rohtak’s beloved nature refuge. Located right off the Delhi-Rohtak highway, the calm waters host paddle boaters while the surrounding island sanctuary provides undisturbed nesting ground for egrets, cormorants, and kingfishers. The adjacent mini zoo offers great educational trails for families.',
    reasonsToVisit: [
      'Relaxing pedal and motor boating on calm expansive lake waters',
      'Sprawling shaded lawns ideal for family picnics and weekend walks',
      'Spotting leopards, blackbucks, and migratory waterfowl in the sanctuary',
      'Child-friendly miniature toy train rides and adventure park'
    ],
    isHiddenGem: false,
    rating: 4.5,
    reviewsCount: 3800,
    estimatedCost: '₹15 (Lake entry) + ₹100 (Boating)',
    idealDuration: '3 to 4 Hours',
    bestSeason: 'October to March',
    timings: '7:00 AM to 7:00 PM',
    locationDetails: 'Delhi-Rohtak Highway (NH-9), Rohtak, Haryana 124001',
    nearestTransit: '4 km from Rohtak Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['20-acre Lake', 'Mini Zoo', 'Island Bird Sanctuary', 'Highway Retreat'],
    localTips: [
      'Boating during the 4:30 PM sunset hour offers peaceful water reflections',
      'The lakeside restaurant serves authentic Haryanvi thalis and fresh juices'
    ],
    image: '/src/assets/images/hero_haryana_landscape_1793859250332.jpg',
    tags: ['Nature', 'Lake', 'Boating', 'Wildlife', 'Family']
  },
  {
    id: 'asthal-bohar-rohtak',
    title: 'Asthal Bohar Math & Medieval Sculptural Relics',
    city: 'Rohtak',
    category: 'Hidden Gem',
    tagline: '8th-century Nath monastic seat housing ancient stone sculptures & manuscripts',
    description: 'An ancient monastery of the Nath Yogic tradition founded by Guru Gorakhnath and revived by Baba Mastnath, housing 1,200-year-old Jain and Hindu stone antiquities.',
    detailedStory: 'Asthal Bohar is a treasure trove of ancient Indian spirituality. Dating back to the 8th century CE, the math premises contain an underground meditation grotto, exquisite Kangra-style wall frescoes, and an open archaeological courtyard displaying medieval carved idols recovered during local excavations.',
    reasonsToVisit: [
      'Experience deep silence in the centuries-old Nath tradition subterranean grotto',
      'Inspect rare 9th-century carved sculptures of Tirthankaras and Vishnu',
      'Admire intricate Kangra and Rajasthani style wall murals inside the sanctum',
      'Sample the pure community langar cooked in giant traditional brass cauldrons'
    ],
    isHiddenGem: true,
    radarScore: 93,
    rating: 4.6,
    reviewsCount: 1600,
    estimatedCost: 'Free / Voluntary offering',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '6:00 AM to 8:30 PM',
    locationDetails: 'Asthal Bohar, 6 km east of Rohtak city, Haryana 124021',
    nearestTransit: '6 km from Rohtak Railway Station on Delhi road',
    verificationStatus: 'Verified Local Story',
    highlights: ['8th-Century Nath Monastic Seat', 'Ancient Sculptures', 'Wall Frescoes', 'Serene Courtyard'],
    localTips: [
      'Observe monastic modesty; remove shoes before entering the inner meditation halls',
      'The math holds an annual fair in February during Phalguna that draws spiritual seekers from across India'
    ],
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg',
    tags: ['Hidden Gem', 'Spiritual', 'Antiquity', 'Heritage', 'Culture']
  },

  // 11. PANIPAT
  {
    id: 'panipat-battlefield-memorial',
    title: 'Panipat Battlefield Memorial & Kabuli Bagh Mosque',
    city: 'Panipat',
    category: 'Heritage',
    tagline: 'The soil where three monumental battles determined the throne of Hindustan',
    description: 'A commemorative war memorial park and museum marking the fateful battles of 1526, 1556, and 1761, alongside Babur’s first Mughal victory mosque built in 1527.',
    detailedStory: 'Few cities in world history have witnessed more epoch-making conflicts than Panipat. The memorial at Kala Amb marks the heroic stand of Maratha commander Sadashivrao Bhau in the Third Battle of Panipat (1761). In the old town stands the Kabuli Bagh Mosque, constructed by Mughal founder Babur to celebrate his historic triumph over Ibrahim Lodi in 1526.',
    reasonsToVisit: [
      'Stand at the historic Kala Amb memorial where the 1761 battle raged',
      'Explore the Panipat Battle Museum with antique swords, armor, and artillery models',
      'Visit Kabuli Bagh Mosque, the very first Mughal architectural structure built in India',
      'Reflect on the military history that reshaped South Asia’s destiny'
    ],
    isHiddenGem: false,
    rating: 4.5,
    reviewsCount: 3100,
    estimatedCost: '₹20 (Museum ticket)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '9:00 AM to 5:00 PM (Closed on Mondays)',
    locationDetails: 'Kala Amb Road & Kabuli Bagh, Panipat, Haryana 132103',
    nearestTransit: '5 km from Panipat Junction Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['Three Battles of Panipat', 'Kala Amb Memorial', 'Babur’s 1527 Mosque', 'Weapons Museum'],
    localTips: [
      'Start at the Panipat Museum to grasp the battle timelines before visiting the monuments',
      'Pair this with a visit to the city’s historic weaver bazaars'
    ],
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg',
    tags: ['Heritage', 'Battlefield', 'Mughal', 'History', 'Panipat']
  },
  {
    id: 'panipat-handloom-weavers',
    title: 'Panipat Textile Heartland & Handwoven Rug Trails',
    city: 'Panipat',
    category: 'Handicraft',
    tagline: 'The "Textile City" famed worldwide for hand-beaten Punja durries & blankets',
    description: 'An international weaving nerve center where traditional wooden pit-loom weavers and contemporary export artisan houses create pure wool blankets, dhurries, and furnishings.',
    detailedStory: 'Panipat is globally renowned as the handloom capital of Northern India. While modern mills produce sustainable recycled yarn, artisan colonies in the town retain centuries-old hand-knotting traditions. Watching master weavers operate the heavy wooden iron-toothed Punja to weave complex geometric patterns is a mesmerizing cultural craft experience.',
    reasonsToVisit: [
      'Watch master weavers hand-weave pure wool rugs on traditional pit looms',
      'Shop luxurious handwoven blankets, throws, and home textiles at factory-direct rates',
      'Learn about India’s pioneering global circular textile recycling movement',
      'Sample famous Panipat Pachranga achar (traditional five-flavor mixed pickle)'
    ],
    isHiddenGem: true,
    radarScore: 89,
    rating: 4.6,
    reviewsCount: 1950,
    estimatedCost: '₹500 - ₹3,000 (Artisan rug & blanket purchases)',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to February',
    timings: '10:30 AM to 8:00 PM',
    locationDetails: 'Insar Bazaar & Handloom Industrial Area, Panipat, Haryana 132103',
    nearestTransit: '3 km from Panipat Railway Station',
    verificationStatus: 'Artisan Documented',
    highlights: ['Punja Durrie Weavers', 'Wholesale Handloom Marts', 'Famous Pachranga Pickle', 'Artisan Guilds'],
    localTips: [
      'Visit the Insar Bazaar for traditional woven woolens and authentic Pachranga pickle outlets',
      'Artisans are very welcoming if you ask respectfully to watch the loom in action'
    ],
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg',
    tags: ['Handicraft', 'Textiles', 'Weaving', 'Shopping', 'Hidden Gem']
  },

  // 12. SIRSA
  {
    id: 'tara-baba-kutiya-sirsa',
    title: 'Tara Baba Kutiya & Sarsuti River Valley',
    city: 'Sirsa',
    category: 'Hidden Gem',
    tagline: 'Serene spiritual hermitage along the ancient dried bed of the Saraswati',
    description: 'A tranquil 5-acre ashram sanctuary with a 71-foot monolithic Shiva idol, serene water fountains, and panoramic reflections along the ancient proto-historic Saraswati basin.',
    detailedStory: 'Sirsa is one of the oldest recorded human settlements in the Saraswati river valley, dating back to Vedic civilization and described by Panini as Shirishika. Tara Baba Kutiya was established by a revered hermit saint known for ascetic silence. Today, the complex features a breathtaking 71-foot tall Shiva statue surrounded by lush green lawns and meditation corridors.',
    reasonsToVisit: [
      'Gaze upon the majestic 71-foot monolithic statue of Lord Shiva',
      'Walk along the historic paleo-channel of the ancient Vedic Saraswati river',
      'Experience absolute silence and meditative calm in the ashram gardens',
      'Sample authentic western Haryana bajra roti and wild kair-sangri delicacies'
    ],
    isHiddenGem: true,
    radarScore: 91,
    rating: 4.6,
    reviewsCount: 2200,
    estimatedCost: 'Free entry',
    idealDuration: '2 to 3 Hours',
    bestSeason: 'October to March',
    timings: '5:00 AM to 9:00 PM',
    locationDetails: 'Rania Road, Sirsa, Haryana 125055',
    nearestTransit: '3 km from Sirsa Railway Station',
    verificationStatus: 'Verified Local Story',
    highlights: ['71-Foot Shiva Monolith', 'Ancient Saraswati Basin', 'Meditative Gardens', 'Vedic Heritage'],
    localTips: [
      'Evening illumination after sunset bathes the giant Shiva statue in soft mystical lights',
      'Enjoy a quiet cup of local milk tea at the roadside stalls outside the main gate'
    ],
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg',
    tags: ['Hidden Gem', 'Spiritual', 'Saraswati', 'Peaceful', 'Sirsa']
  },
  {
    id: 'ther-archaeological-mound-sirsa',
    title: 'Ther Ancient Archaeological Mound',
    city: 'Sirsa',
    category: 'Heritage',
    tagline: 'Excavated relics dating to the 6th century BCE along the ancient trade trails',
    description: 'A massive 80-foot high ancient settlement mound preserving layered stratigraphy from the Early Historic, Kushan, and medieval periods.',
    detailedStory: 'Dominating the northern edge of modern Sirsa, the Ther mound represents millennia of continuous human habitation. Excavations revealed ancient burnt-brick walls, terracotta pottery, and Kushan copper coins, proving Sirsa was a thriving mercantile hub along the ancient northern trade route connecting Mathura to Central Asia.',
    reasonsToVisit: [
      'Climb the historic mound for panoramic sunset views across the Sirsa plains',
      'Inspect ancient brick masonry exposed along the archaeological excavation trenches',
      'Walk in the footsteps of ancient Silk Road and Saraswati valley traders',
      'Completely off the beaten tourist track with raw archaeological atmosphere'
    ],
    isHiddenGem: true,
    radarScore: 94,
    rating: 4.3,
    reviewsCount: 420,
    estimatedCost: 'Free',
    idealDuration: '1 to 2 Hours',
    bestSeason: 'November to February',
    timings: 'Daylight hours: 7:00 AM to 6:00 PM',
    locationDetails: 'Near Old Civil Hospital, Sirsa, Haryana 125055',
    nearestTransit: '2 km from Sirsa Railway Station',
    verificationStatus: 'Community Reported',
    highlights: ['80-Foot High Mound', 'Kushan & Early Historic Relics', 'Ancient Trade Route', 'Panoramic View'],
    localTips: [
      'Best visited in the gentle late afternoon light before the sun drops',
      'Combine with a visit to Tara Baba Kutiya for a rich half-day Sirsa exploration'
    ],
    image: '/src/assets/images/hisar_firoz_shah_palace_1793859385454.jpg',
    tags: ['Hidden Gem', 'Archaeology', 'History', 'Mound', 'Sirsa']
  }
];

export const CULTURE_ITEMS = [
  {
    id: 'bajra-khichdi',
    type: 'food' as const,
    title: 'Bajra Khichdi with Ghee & Desi Bura',
    hindiTitle: 'बाजरा खिचड़ी एवं खांड-बूरा',
    cityOrigin: 'Karnal, Hisar & Rural Haryana',
    tagline: 'The timeless winter comfort of the peasant heartland',
    description: 'Slow-cooked crushed winter pearl millet and yellow moong daal, served with an enormous pool of home-churned white butter (makkhan) or hot desi ghee and raw jaggery bura.',
    whereToFind: 'Village dhabas along NH-44, farm homestays in Karnal & Hisar, and winter highway stalls.',
    story: 'For generations, Haryanvi farmers started their frosty dawn farm shifts with a warm earthen bowl of bajra khichdi. The slow cooking in earthen handis over cowdung tandoor embers infuses a signature smoky aroma that commercial pressure cookers can never replicate.',
    authenticityBadge: 'Centuries-old Agripastoral Staple',
    seasonOrOccasion: 'Winter (November to February)',
    tasteOrCraftNote: 'Nutty, earthy, rich, balanced with sweet raw jaggery.',
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg'
  },
  {
    id: 'ambala-chaat-tikki',
    type: 'food' as const,
    title: 'Ambala Double-Crisped Tikki & Matar Chaat',
    hindiTitle: 'अम्बाला कैंट की प्रसिद्ध कुरकुरी टिक्की',
    cityOrigin: 'Ambala Cantonment',
    tagline: 'Northern India’s legendary golden-crusted potato patty',
    description: 'Crisped to glass-like perfection on giant cast-iron tawas in desi ghee, filled with seasoned chana dal, smothered in thick curd, sweet sonth, and spicy mint chutney.',
    whereToFind: 'Sadar Bazaar, Ambala Cantt (Jaggi & local sweet stalls near railway road).',
    story: 'Travelers passing through Ambala Junction have made pit-stops for this chaat since the early 1900s. Unlike soft tikkis found elsewhere, Ambala cooks press the patty twice to achieve an unmatched acoustic crunch.',
    authenticityBadge: '100+ Year Street Food Icon',
    seasonOrOccasion: 'Year-round, best enjoyed on cool evenings',
    tasteOrCraftNote: 'Crispy, tangy, savory, and sweet balance with toasted cumin.',
    image: '/src/assets/images/ambala_heritage_architecture_1793859253851.jpg'
  },
  {
    id: 'punja-durrie',
    type: 'handicraft' as const,
    title: 'Panipat & Haryana Punja Durries',
    hindiTitle: 'पंजा दरी हस्तशिल्प',
    cityOrigin: 'Panipat & Ambala Rural Clusters',
    tagline: 'Geometric rugs hand-beaten on heavy wooden looms',
    description: 'Sturdy cotton and wool floor coverings woven by artisan families using a heavy iron fork comb called "Punja" to compress warp threads into geometric tribal patterns.',
    whereToFind: 'Weavers’ co-operative societies in Panipat and Haryana State Handloom emporiums.',
    story: 'Historically crafted as dowry keepsakes and community gathering carpets, each durrie features motifs representing peacocks, village wells, and wheat sheaves. A single durable durrie can last three generations.',
    authenticityBadge: 'State Heritage Craft Listed',
    seasonOrOccasion: 'Woven round the year, celebrated during harvest festivals',
    tasteOrCraftNote: 'Tight warp weave, heavy textured cotton, timeless geometric symmetry.',
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg'
  },
  {
    id: 'phulkari-embroidery',
    type: 'handicraft' as const,
    title: 'Haryana Phulkari Silk Needlework',
    hindiTitle: 'फुलकारी रेशम कशीदाकारी',
    cityOrigin: 'Ambala, Rohtak & Pinjore Outskirts',
    tagline: 'Embroidering flowers with un-twisted floss silk',
    description: 'Traditional needlework done from the reverse side of coarse handspun khaddar fabric using vibrant yellow, crimson, and turquoise untwisted silk yarn (Pat).',
    whereToFind: 'Ambala Cloth Market (Wholesale bazaar) and artisan workshops across Haryana.',
    story: 'Literally meaning "flower work", Phulkari was originally an emotional art where grandmothers began embroidering a "Bagh" (full garden) upon the birth of a female grandchild to be gifted on her wedding day.',
    authenticityBadge: 'Artisan Documented GI Heritage',
    seasonOrOccasion: 'Traditional celebrations, Teej, and Karwa Chauth',
    tasteOrCraftNote: 'Silk sheen against rustic homespun cotton, intricate geometric flowers.',
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg'
  },
  {
    id: 'barara-sugarcane-kolhu',
    type: 'experience' as const,
    title: 'Winter Sugarcane Kolhu & Fresh Jaggery Trail',
    hindiTitle: 'गन्ना कोल्हू व गुड़ निर्माण अनुभव',
    cityOrigin: 'Yamunanagar & Karnal Agricultural Belt',
    tagline: 'Smell the sweet steam of open boiling jaggery pans',
    description: 'Walk through lush sugarcane stalks, watch crushers press fresh green juice, and taste boiling molten jaggery flavored with fennel, ginger, and sesame.',
    whereToFind: 'Rural link roads along Yamunanagar, Karnal, and Kurukshetra tehsils.',
    story: 'Between November and February, hundreds of rustic Kolhu sheds pop up across the fertile Doab plains. Travelers are welcomed with warm brass tumblers of fresh cane juice and warm shakkar with hot roti.',
    authenticityBadge: 'Living Agrarian Tradition',
    seasonOrOccasion: 'November through February only',
    tasteOrCraftNote: 'Intensely caramel, warm smoky notes with hints of green grass freshness.',
    image: '/src/assets/images/haryana_rural_culture_1793859253225.jpg'
  },
  {
    id: 'kurukshetra-aarti-deepdan',
    type: 'experience' as const,
    title: 'Brahma Sarovar Sunset Deepdan Aarti',
    hindiTitle: 'ब्रह्म सरोवर महाआरती व दीपदान',
    cityOrigin: 'Kurukshetra',
    tagline: 'Sacred water reflection of a thousand brass lamps',
    description: 'Every evening as dusk descends over the ancient Sarovar, priests blow conch shells, strike bronze bells, and float leaf cups with marigolds and glowing ghee wicks.',
    whereToFind: 'Main Northern Ghat, Brahma Sarovar, Kurukshetra.',
    story: 'Practiced continuously for generations, the evening Aarti creates a mirror-like spectacle where the temple domes, saffron flags, and twilight sky merge in the calm waters.',
    authenticityBadge: 'Living Sacred Ritual',
    seasonOrOccasion: 'Daily at sunset (Peak during Gita Jayanti)',
    tasteOrCraftNote: 'Hypnotic conch sounds, sandalwood incense, and cool lakeside breeze.',
    image: '/src/assets/images/kurukshetra_brahma_sarovar_1793859250908.jpg'
  }
];

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  summary: string;
  slots: {
    time: 'Morning' | 'Afternoon' | 'Evening';
    title: string;
    location: string;
    description: string;
    foodRecommendation: string;
    transportTip: string;
    costEstimate: string;
  }[];
}

export interface GeneratedItinerary {
  id: string;
  destination: string;
  title: string;
  tripLength: string;
  budgetTier: string;
  travelerStyle: string;
  totalEstimatedCost: string;
  days: ItineraryDay[];
  budgetBreakdown: {
    stay: string;
    food: string;
    transport: string;
    activities: string;
  };
  packingEssentials: string[];
  localEtiquetteTip: string;
}

export function generateSmartItinerary(
  city: HaryanaCity | 'All Haryana',
  duration: '1' | '2' | '3',
  budget: 'budget' | 'moderate' | 'premium',
  interest: 'heritage' | 'nature' | 'spiritual' | 'culture' | 'all'
): GeneratedItinerary {
  const numDays = parseInt(duration, 10);
  const costMap = {
    budget: { daily: 1100, stay: '₹500 - ₹900 (Budget Guest House / Dharamsala)', food: '₹300 (Local Dhabas)', transport: '₹200 (Haryana Roadways & Shared Auto)', activities: '₹100 (ASI Monuments)' },
    moderate: { daily: 2400, stay: '₹1,400 - ₹2,000 (Heritage Hotel / Quality Inn)', food: '₹600 (Authentic Cafes & Dhabas)', transport: '₹400 (Local Cabs / Auto)', activities: '₹200 (Museums & Boating)' },
    premium: { daily: 4800, stay: '₹3,000 - ₹4,500 (Resort / Luxury Heritage Retreat)', food: '₹1,200 (Fine Dining & Farm Banquets)', transport: '₹900 (Private AC Car Rental)', activities: '₹500 (Guided Tours & Special Entry)' }
  };

  const selectedTier = costMap[budget];
  const totalCost = `₹${(selectedTier.daily * numDays).toLocaleString('en-IN')} - ₹${((selectedTier.daily + 500) * numDays).toLocaleString('en-IN')}`;

  // Filter matching destinations for chosen city
  let candidateSpots = DESTINATIONS;
  if (city !== 'All Haryana') {
    candidateSpots = DESTINATIONS.filter(d => d.city === city);
    if (candidateSpots.length < 2) {
      // Add adjacent cities
      candidateSpots = DESTINATIONS.filter(d => d.city === city || d.city === 'Kurukshetra' || d.city === 'Panchkula');
    }
  }

  // Filter by interest if specified
  if (interest !== 'all') {
    const interestFiltered = candidateSpots.filter(d => 
      interest === 'heritage' ? d.category === 'Heritage' || d.tags.includes('Heritage') :
      interest === 'nature' ? d.category === 'Nature' || d.tags.includes('Nature') :
      interest === 'spiritual' ? d.category === 'Spiritual' || d.tags.includes('Spiritual') :
      d.category === 'Handicraft' || d.category === 'Culinary' || d.isHiddenGem
    );
    if (interestFiltered.length >= 2) {
      candidateSpots = interestFiltered;
    }
  }

  const days: ItineraryDay[] = [];

  for (let i = 1; i <= numDays; i++) {
    const spot1 = candidateSpots[(i * 2 - 2) % candidateSpots.length];
    const spot2 = candidateSpots[(i * 2 - 1) % candidateSpots.length];
    const spot3 = candidateSpots[(i * 2) % candidateSpots.length];

    days.push({
      dayNumber: i,
      title: i === 1 
        ? `${city === 'All Haryana' ? 'Grand Haryana Initiation' : `${city} Cultural Immersion`} & Key Landmarks` 
        : i === 2 
        ? `${city === 'All Haryana' ? 'Shivalik & Heritage Trails' : 'Hidden Alleys & Nature Spoke'}` 
        : 'Artisan Guilds, Flavors & Sunset Reflections',
      summary: `Carefully paced trail exploring ${spot1.title} and ${spot2.title} with local culinary stops.`,
      slots: [
        {
          time: 'Morning',
          title: `Dawn Walk at ${spot1.title}`,
          location: `${spot1.city} (${spot1.locationDetails.split(',')[0]})`,
          description: `Begin in peaceful morning light. ${spot1.description.slice(0, 140)}...`,
          foodRecommendation: `Breakfast stop: Fresh tandoori parathas with white makkhan & hot chai (${spot1.localTips[0] || 'Local highway dhaba'}).`,
          transportTip: 'Best reached by local auto or morning cab before traffic builds up.',
          costEstimate: budget === 'budget' ? '₹80 - ₹150' : '₹200 - ₹350'
        },
        {
          time: 'Afternoon',
          title: `Discovery & Crafts at ${spot2.title}`,
          location: `${spot2.city}`,
          description: `Mid-day cultural exploration. ${spot2.tagline}. Discover local stories and authentic architecture.`,
          foodRecommendation: `Lunch: Try authentic regional Haryana Kadhi Pakora, Bajra roti or crisp local tikkis.`,
          transportTip: '15-25 min transit between central points.',
          costEstimate: budget === 'budget' ? '₹150 - ₹250' : '₹350 - ₹600'
        },
        {
          time: 'Evening',
          title: `Sunset & Local Stories at ${spot3.title}`,
          location: `${spot3.city}`,
          description: `Unwind during twilight. Enjoy the serene evening atmosphere and local night bazaars.`,
          foodRecommendation: `Dinner: Hot Besan Jalebi, Rabri Kulfi and slow-cooked Daal Makhani.`,
          transportTip: 'Walkable central promenade or pre-booked return cab.',
          costEstimate: budget === 'budget' ? '₹100 - ₹200' : '₹250 - ₹500'
        }
      ]
    });
  }

  return {
    id: `itin-${Date.now()}`,
    destination: city,
    title: `${numDays}-Day ${city === 'All Haryana' ? 'Curated Haryana Explorer' : `${city} Immersive`} Experience`,
    tripLength: `${numDays} Day${numDays > 1 ? 's' : ''}`,
    budgetTier: budget === 'budget' ? 'Budget Friendly' : budget === 'moderate' ? 'Balanced Traveler' : 'Premium Discovery',
    travelerStyle: interest === 'all' ? 'Holistic Cultural Trail' : `${interest.toUpperCase()} Focused`,
    totalEstimatedCost: totalCost,
    days,
    budgetBreakdown: selectedTier,
    packingEssentials: [
      'Comfortable walking/hiking shoes for stone temple steps and nature walks',
      'Modest lightweight scarf for temple entries and sunny afternoons',
      'Light woolens for winter evenings (Nov - Feb temperature drops to 8°C)',
      'Cash in small denominations (₹50, ₹100, ₹200) for rural jaggery stops & street chaat'
    ],
    localEtiquetteTip: 'Haryanvi hospitality is legendary and warm. At village kolhus and local shrines, accepting a offered cup of fresh tea or buttermilk is considered polite and welcoming.'
  };
}

export const AI_FAQ_KNOWLEDGE = [
  {
    keywords: ['ambala', 'cloth', 'tikki', 'sadar', 'cantt'],
    answer: "In Ambala, head to Sadar Bazaar in Ambala Cantt for the famous double-fried crispy Tikki at Jaggi or local stalls. For textiles, Ambala Cloth Market is one of Asia's largest wholesale bridal and Phulkari hubs. Don't miss St. Paul's romantic church ruins at 3:30 PM for breathtaking photography."
  },
  {
    keywords: ['pinjore', 'gardens', 'yadavindra', 'bhima devi', 'timing'],
    answer: "Pinjore Yadavindra Gardens is best visited between 4:00 PM and 7:30 PM so you see the 7 descending Mughal terraces in daylight and stay for the illuminated fountain show at dusk (Entry: ₹50). Don't miss the 8th-century Bhima Devi temple ruins just 600m away, famed as the 'Khajuraho of North India'!"
  },
  {
    keywords: ['kurukshetra', 'brahma sarovar', 'jyotisar', 'sheikh chilli'],
    answer: "For Kurukshetra: Start early at Brahma Sarovar (Asia's grandest ancient sacred pool), proceed to Jyotisar where the Gita was spoken under the sacred banyan tree, then visit the breathtaking white-marble Sheikh Chilli's Persian-style tomb in Thanesar. Return to Brahma Sarovar at 6:30 PM for the sunset Deepdan Aarti."
  },
  {
    keywords: ['panchkula', 'morni', 'tikkar', 'hills', 'cactus'],
    answer: "Panchkula is the gateway to Haryana's sole hill station — Morni Hills (1,220m). Drive up past pine forests to Tikkar Taal's twin serene lakes for row-boating and quiet birdwatching. In the city, visit Mata Mansa Devi foothill shrine and Asia's largest National Cactus & Succulent Garden."
  },
  {
    keywords: ['yamunanagar', 'kalesar', 'hathnikund', 'jagadhri', 'brass'],
    answer: "Yamunanagar is a hidden dual paradise: Kalesar National Park with dense Sal forests, leopards, and wild elephants along the turquoise Yamuna river rapids (Hathni Kund Barrage); and Jagadhri, known as the 'Brass City', where master hammer-smiths craft traditional Ayurvedic cookware and bell metal."
  },
  {
    keywords: ['karnal', 'lake', 'karna', 'basmati', 'taraori'],
    answer: "Karnal is celebrated as the realm of generous King Karna from the Mahabharata. Visit tranquil Karna Lake at sunset for paddle boating and gazebos. 14 km north lies historic Taraori (site of the 1191 Battles of Tarain) surrounded by aromatic, emerald-green Basmati paddy fields."
  },
  {
    keywords: ['hisar', 'firoz shah', 'palace', 'agroha', 'gujri'],
    answer: "Hisar features the formidable 14th-century Firoz Shah Palace and the romantic Gujri Mahal built with ancient stone arches and subterranean summer cooling vaults. 22 km away lies Agroha Dham, the ancient archaeological mound (Agrodaka) and ancestral spiritual seat of Maharaja Agrasen."
  },
  {
    keywords: ['rohtak', 'tilyar', 'lake', 'asthal bohar', 'zoo'],
    answer: "Rohtak offers Tilyar Lake, a 132-acre green sanctuary with boating and mini wildlife zoo, ideal for weekend nature strolls. Also explore the 8th-century Asthal Bohar Nath Math with its underground meditation grotto and ancient sculptural museum."
  },
  {
    keywords: ['faridabad', 'surajkund', 'reservoir', 'crafts', 'mela', 'aravalli'],
    answer: "Faridabad is home to the monumental 10th-century Surajkund Sun Amphitheater reservoir built by Tomar kings in the rocky Aravalli hills. In February, it hosts the world-famous Surajkund International Crafts Mela with thousands of artisans from 30+ countries!"
  },
  {
    keywords: ['gurugram', 'sultanpur', 'birds', 'heritage transport', 'wetlands'],
    answer: "Beyond modern cyber towers, Gurugram boasts Sultanpur National Bird Sanctuary (Ramsar Wetland) where flamingos and 250+ migratory bird species winter. Also visit the world-class Heritage Transport Museum in Taoru with 75+ vintage cars, locomotives, and aviation galleries."
  },
  {
    keywords: ['panipat', 'battlefield', 'memorial', 'durrie', 'handloom', 'textile'],
    answer: "Panipat is where three historic battles shaped India's destiny (1526, 1556, 1761). Visit the Kala Amb Battlefield Memorial and Babur's 1527 Kabuli Bagh Mosque. Panipat is also the international handloom capital, where master weavers craft traditional hand-beaten Punja durries and blankets."
  },
  {
    keywords: ['sirsa', 'saraswati', 'tara baba', 'ther', 'ancient'],
    answer: "Sirsa lies along the ancient paleo-channel of the Vedic Saraswati river. Visit Tara Baba Kutiya featuring a majestic 71-foot monolithic Shiva statue set in peaceful gardens, and explore the 80-foot high ancient Ther archaeological mound with 2,500-year-old stratigraphy."
  },
  {
    keywords: ['budget', 'cost', 'how much', 'cheap', 'price'],
    answer: "Haryana is very cost-effective. A comfortable day trip averages ₹900 - ₹2,200 per traveler including regional transit, mouth-watering highway dhaba meals (₹150 - ₹300), and entry tickets (most heritage monuments cost just ₹20 - ₹50). Comfortable hotels average ₹1,800 - ₹3,500 per night."
  },
  {
    keywords: ['best time', 'season', 'weather', 'winter', 'months'],
    answer: "The best travel window for Haryana is October through March. Winter days are pleasantly sunny (18°C to 24°C) with crisp cool evenings, ideal for birdwatching at Sultanpur and Tikkar Taal, jaggery tasting at farm kolhus, and heritage walks."
  }
];
