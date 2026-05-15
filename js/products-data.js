const PRODUCT_CATEGORIES = [
  "Mortar Shells",
  "500G Cake Combo Packs",
  "500G Cakes",
  "250th America Anniversary Cakes",
  "Hybrid 400G Cakes",
  "200G Cakes",
  "Canister Tubes",
  "Firecrackers & Rockets"
];

const PRODUCTS = [
  // === Firecrackers & Rockets ===
  { id: "misc-1", name: "Roll of 4,000 Firecrackers", category: "Firecrackers & Rockets", duration: "N/A", price: 40.00, inStock: true, stockQty: 50, video: "https://vimeo.com/1080617228" },
  { id: "misc-2", name: "Roll of 8,000 Firecrackers", category: "Firecrackers & Rockets", duration: "N/A", price: 70.00, inStock: true, stockQty: 50, video: "https://vimeo.com/1080617228" },
  { id: "misc-3", name: "M-60 Salute Crackers (12 Pack)", category: "Firecrackers & Rockets", duration: "N/A", price: 5.00, inStock: true, stockQty: 100, video: "https://vimeo.com/345025571" },
  { id: "misc-4", name: "Freedom Stick - 135 Shots - Hand Held", category: "Firecrackers & Rockets", duration: "34 Seconds", price: 10.00, inStock: true, stockQty: 75, video: "https://vimeo.com/1079776783" },
  { id: "misc-5", name: "Starshot Strobe Rocket", category: "Firecrackers & Rockets", duration: "8 Seconds", price: 15.00, inStock: true, stockQty: 60, video: "https://vimeo.com/1079790335" },
  { id: "misc-6", name: "Texas Battery - 504 Shot Saturn Missile", category: "Firecrackers & Rockets", duration: "1 Min 49 Sec", price: 60.00, inStock: true, stockQty: 30, video: "https://vimeo.com/167567117" },
  { id: "misc-7", name: "Hog Wild Battery - 750 Shot Saturn Missile", category: "Firecrackers & Rockets", duration: "1 Min 6 Sec", price: 70.00, inStock: true, stockQty: 30, video: "https://vimeo.com/1079790596" },

  // === 200G Cakes ===
  { id: "200g-1", name: "Age of Dragons 200g - 16 Shots", description: "Blue, Gold, Green, Purple, Red, Silver", category: "200G Cakes", duration: "28 Seconds", price: 15.00, inStock: true, stockQty: 40, video: "https://vimeo.com/1079776820" },
  { id: "200g-2", name: "Cat Fight 200g - 9 Shots", description: "Green, Red, & Silver", category: "200G Cakes", duration: "17 Seconds", price: 5.00, inStock: true, stockQty: 60, video: "https://vimeo.com/267287017" },
  { id: "200g-3", name: "Crazy Cajun 200g - 16 Shots", description: "Blue, Gold, Green, Red, & Silver", category: "200G Cakes", duration: "29 Seconds", price: 15.00, inStock: true, stockQty: 40, video: "https://vimeo.com/1079776880" },
  { id: "200g-4", name: "Crusher 200g - 16 Shots", description: "Blue, Lemon, Red, & White", category: "200G Cakes", duration: "30 Seconds", price: 15.00, inStock: true, stockQty: 40, video: "https://vimeo.com/167566518" },
  { id: "200g-5", name: "Eagle Command 200g - 7 Shots", description: "Patriotic", category: "200G Cakes", duration: "14 Seconds", price: 5.00, inStock: true, stockQty: 60, video: "https://vimeo.com/1079776861" },
  { id: "200g-6", name: "Firenado - 200g - 10 Shots", category: "200G Cakes", duration: "33 Seconds", price: 20.00, inStock: true, stockQty: 35, video: "https://vimeo.com/1176570771" },
  { id: "200g-7", name: "Fists of Independence - 200g - 16 Shots", category: "200G Cakes", duration: "20 Seconds", price: 10.00, inStock: true, stockQty: 50, video: "https://vimeo.com/1176570834" },
  { id: "200g-8", name: "Neighborhood Party - 200g - 50 Shots", category: "200G Cakes", duration: "51 Seconds", price: 20.00, inStock: true, stockQty: 35, video: "https://vimeo.com/1079776844" },
  { id: "200g-9", name: "Pure Country - 200g - 22 Shots", category: "200G Cakes", duration: "25 Seconds", price: 20.00, inStock: true, stockQty: 35, video: "https://vimeo.com/1176574537" },
  { id: "200g-10", name: "Ring The Bell - 200g - 10 Shots", category: "200G Cakes", duration: "20 Seconds", price: 15.00, inStock: true, stockQty: 40, video: "https://vimeo.com/1176568369" },

  // === Hybrid 400G Cakes ===
  { id: "400g-1", name: "Agent of Chaos - 400g - 24 Shots", category: "Hybrid 400G Cakes", duration: "50 Seconds", price: 25.00, inStock: true, stockQty: 30, video: "https://vimeo.com/1079780921" },
  { id: "400g-2", name: "Blown Away - 400g Hybrid - 42 Shots", category: "Hybrid 400G Cakes", duration: "19 Seconds", price: 25.00, inStock: true, stockQty: 30, video: "https://vimeo.com/333551969" },
  { id: "400g-3", name: "Breaking Chains - 400g Hybrid - 25 Shots", category: "Hybrid 400G Cakes", duration: "40 Seconds", price: 20.00, inStock: true, stockQty: 35, video: "https://vimeo.com/1176574505" },
  { id: "400g-4", name: "Ghost Rail - 400g Hybrid - 12 Shots", category: "Hybrid 400G Cakes", duration: "27 Seconds", price: 25.00, inStock: true, stockQty: 30, video: "https://vimeo.com/1079780934" },
  { id: "400g-5", name: "Polar Iced - 400g Hybrid - 18 Shots", category: "Hybrid 400G Cakes", duration: "17 Seconds", price: 20.00, inStock: true, stockQty: 35, video: "https://vimeo.com/411751437" },
  { id: "400g-6", name: "Show of Force - 400g Hybrid - 13 Shots", category: "Hybrid 400G Cakes", duration: "31 Seconds", price: 25.00, inStock: true, stockQty: 30, video: "https://vimeo.com/333550579" },

  // === 250th America Anniversary Cakes ===
  { id: "ann-1", name: "Poppin' For The People - 400g Hybrid - 25 Shots", category: "250th America Anniversary Cakes", duration: "33 Seconds", price: 20.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1155140723" },
  { id: "ann-2", name: "4th of July Independence Day - 500g - 36 Shots", category: "250th America Anniversary Cakes", duration: "30 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1155146655" },
  { id: "ann-3", name: "American Attitude - 500g - 36 Shots", category: "250th America Anniversary Cakes", duration: "20 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1155147703" },
  { id: "ann-4", name: "Liberty Celebration - 500g - 36 Shots", category: "250th America Anniversary Cakes", duration: "27 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1155148388" },
  { id: "ann-5", name: "50 Star Storm - 500g - 50 Shots", category: "250th America Anniversary Cakes", duration: "36 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1155149978" },
  { id: "ann-6", name: "Star Spangled Smackdown - 100 Shots", category: "250th America Anniversary Cakes", duration: "42 Seconds", price: 120.00, inStock: true, stockQty: 3, video: "https://vimeo.com/1155154855" },
  { id: "ann-7", name: "Revolutionary Roar - 88 Shots", category: "250th America Anniversary Cakes", duration: "47 Seconds", price: 120.00, inStock: true, stockQty: 3, video: "https://vimeo.com/1155155448" },
  { id: "ann-8", name: "Thunder in the Republic - 120 Shots", category: "250th America Anniversary Cakes", duration: "46 Seconds", price: 120.00, inStock: true, stockQty: 3, video: "https://vimeo.com/1176568430" },
  { id: "ann-9", name: "Detonation of Independence - 180 Shots", category: "250th America Anniversary Cakes", duration: "53 Seconds", price: 200.00, inStock: true, stockQty: 3, video: "https://vimeo.com/1155162324" },
  { id: "ann-10", name: "The American Heartbeat - 250 Shots", category: "250th America Anniversary Cakes", duration: "1 Min 48 Sec", price: 250.00, inStock: true, stockQty: 3, video: "https://vimeo.com/1155168438" },

  // === Canister Tubes ===
  { id: "tube-1", name: "Doomsday Machine 3\" Tubes - 500g - 7 Shot", category: "Canister Tubes", duration: "22 Seconds", price: 90.00, inStock: true, stockQty: 20, video: "https://vimeo.com/333552305" },
  { id: "tube-2", name: "Outlaw Bullets - 500g - 9 Shots", category: "Canister Tubes", duration: "32 Seconds", price: 90.00, inStock: true, stockQty: 20, video: "https://vimeo.com/223298867" },
  { id: "tube-3", name: "Brute Force - 500g - 7 Shots", category: "Canister Tubes", duration: "22 Seconds", price: 60.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1176574566" },
  { id: "tube-4", name: "Shock Trooper - 500g - 9 Shots", category: "Canister Tubes", duration: "45 Seconds", price: 60.00, inStock: true, stockQty: 25, video: "https://youtu.be/P13-R-VhqTo" },
  { id: "tube-5", name: "Double Barrel - 500g - 9 Shots (Double Break 18 Total)", category: "Canister Tubes", duration: "26 Seconds", price: 90.00, inStock: true, stockQty: 20 },

  // === 500G Cakes ===
  { id: "500g-1", name: "American Zipper - 500g - 234 Shots", category: "500G Cakes", duration: "47 Seconds", price: 70.00, inStock: true, stockQty: 20, video: "https://youtu.be/hDKi1gqSVdY" },
  { id: "500g-2", name: "Lets Go Bro - 500g Z - 126 Shots", category: "500G Cakes", duration: "20 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1079782490" },
  { id: "500g-3", name: "Fire Assault - 500g Fan - 25 Shots", category: "500G Cakes", duration: "20 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/538885084" },
  { id: "500g-4", name: "Fireworks Spectacular - 500g Fan - 36 Shots", category: "500G Cakes", duration: "33 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/813649486" },
  { id: "500g-5", name: "Freedom Isn't Free - 500g Fan - 24 Shots", category: "500G Cakes", duration: "26 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/538885383" },
  { id: "500g-6", name: "Jet Fire - 500g Fan - 25 Shots", category: "500G Cakes", duration: "22 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1176302413" },
  { id: "500g-7", name: "Liberty Force - 500g - 16 Shots", category: "500G Cakes", duration: "31 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/538888122" },
  { id: "500g-8", name: "Neon Streak - 500g - 36 Shots", category: "500G Cakes", duration: "16 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/411751317" },
  { id: "500g-9", name: "Road Show - 500g - 25 Shots", category: "500G Cakes", duration: "29 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/265063077" },
  { id: "500g-10", name: "Sky Shooter - 500g - 15 Shots", category: "500G Cakes", duration: "20 Seconds", price: 35.00, inStock: true, stockQty: 30, video: "https://vimeo.com/265063593" },
  { id: "500g-11", name: "The Hammer - 500g - 24 Shots", category: "500G Cakes", duration: "25 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/333550800" },
  { id: "500g-12", name: "Tommy Girl - 500g - 25 Shots", category: "500G Cakes", duration: "31 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/411751814" },
  { id: "500g-13", name: "Holy Moly - 500g - 12 Shots", category: "500G Cakes", duration: "45 Seconds", price: 60.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1176308405" },
  { id: "500g-14", name: "Sidearm Showdown - 500g - 33 Shots", category: "500G Cakes", duration: "43 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/813650808" },
  { id: "500g-15", name: "Storm Chaser - 500g - 14 Shots", category: "500G Cakes", duration: "34 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/215024565" },
  { id: "500g-16", name: "V8 Redline - 500g - 25 Shots", category: "500G Cakes", duration: "35 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/935986313" },
  { id: "500g-17", name: "All-Father - 500g - 9 Shots", category: "500G Cakes", duration: "18 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1079782574" },
  { id: "500g-18", name: "America First - 500g - 12 Shots", category: "500G Cakes", duration: "35 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1176568519" },
  { id: "500g-19", name: "Black Hole Escape - 500g - 9 Shots", category: "500G Cakes", duration: "30 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1176568499" },
  { id: "500g-20", name: "Born to Ride - 500g - 16 Shots", category: "500G Cakes", duration: "34 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/167557785" },
  { id: "500g-21", name: "Clocked Out - 500g - 33 Shots", category: "500G Cakes", duration: "1 Min 20 Sec", price: 50.00, inStock: true, stockQty: 20, video: "https://youtu.be/HarlemVJbeE" },
  { id: "500g-22", name: "Cook it Up - 500g - 9 Shots", category: "500G Cakes", duration: "28 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1176570742" },
  { id: "500g-23", name: "Cyber Strike - 500g - 30 Shots", category: "500G Cakes", duration: "26 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/935986124" },
  { id: "500g-24", name: "Don't Be A Chicken - 500g - 25 Shots", category: "500G Cakes", duration: "33 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1079782439" },
  { id: "500g-25", name: "Faded Not Jaded - 500g - 25 Shots", category: "500G Cakes", duration: "37 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1079782688" },
  { id: "500g-26", name: "Go Time - 500g - 12 Shots", category: "500G Cakes", duration: "35 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/1176570790" },
  { id: "500g-27", name: "Nishiki Willow - 500g - 16 Shots", category: "500G Cakes", duration: "24 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://youtu.be/GnoD_XVG6Fk" },
  { id: "500g-28", name: "Pyro Maestro - 500g - 24 Shots", category: "500G Cakes", duration: "55 Seconds", price: 55.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1079782559" },
  { id: "500g-29", name: "Real Wild One - 500g - 25 Shots", category: "500G Cakes", duration: "25 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1176570852" },
  { id: "500g-30", name: "Righteous Warrior - 500g - 9 Shots", category: "500G Cakes", duration: "40 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/538886787" },
  { id: "500g-31", name: "Rockin The Free World - 500g - 30 Shots", category: "500G Cakes", duration: "21 Seconds", price: 50.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1079782618" },
  { id: "500g-32", name: "Sniper Shot - 500g - 23 Shots", category: "500G Cakes", duration: "48 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/223298944" },
  { id: "500g-33", name: "Stone Breaker - 500g - 9 Shots", category: "500G Cakes", duration: "31 Seconds", price: 60.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1079782661" },
  { id: "500g-34", name: "Street Outlaw - 500g - 25 Shots", category: "500G Cakes", duration: "23 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/538887171" },
  { id: "500g-35", name: "The Protector - 500g - 9 Shots", category: "500G Cakes", duration: "25 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/411751767" },
  { id: "500g-36", name: "Trigger Pull - 500g - 9 Shots", category: "500G Cakes", duration: "31 Seconds", price: 45.00, inStock: true, stockQty: 25, video: "https://vimeo.com/411751860" },
  { id: "500g-37", name: "Witch Blade - 500g - 25 Shots", category: "500G Cakes", duration: "22 Seconds", price: 40.00, inStock: true, stockQty: 25, video: "https://vimeo.com/538887926" },

  // === Mortar Shells ===
  { id: "mortar-1", name: "Edge of Oblivion 6\" Shells - 18 Pack", category: "Mortar Shells", duration: "N/A", price: 80.00, inStock: true, stockQty: 20, video: "https://vimeo.com/1079786209" },
  { id: "mortar-2", name: "The Assassin of Artillery 5\" Shells - 24 Pack", category: "Mortar Shells", duration: "N/A", price: 80.00, inStock: true, stockQty: 20, video: "https://vimeo.com/813652087" },
  { id: "mortar-3", name: "Killer Willow 5\" - 6 Pack", category: "Mortar Shells", duration: "N/A", price: 20.00, inStock: true, stockQty: 40, video: "https://vimeo.com/813652385" },
  { id: "mortar-4", name: "Carnage 4\" - 24 Pack", category: "Mortar Shells", duration: "N/A", price: 80.00, inStock: true, stockQty: 20, video: "https://vimeo.com/813652285" },
  { id: "mortar-5", name: "Max'd Out 4\" - 18 Pack", category: "Mortar Shells", duration: "N/A", price: 80.00, inStock: true, stockQty: 20, video: "https://vimeo.com/333549699" },

  // === 500G Cake Combo Packs ===
  { id: "combo-1", name: "All Mixed Up - 500g - Case of 4", category: "500G Cake Combo Packs", duration: "1 Min 28 Sec", price: 100.00, inStock: true, stockQty: 15, video: "https://youtu.be/WL0ttXtaQLQ" },
  { id: "combo-2", name: "Mixed Chaos - 500G - Case of 4", category: "500G Cake Combo Packs", duration: "1 Min 24 Sec", price: 100.00, inStock: true, stockQty: 15, video: "https://youtu.be/jd3nhPWWVdE" },
  { id: "combo-3", name: "Mixed to The Max - 500G - Case of 4", category: "500G Cake Combo Packs", duration: "1 Min 28 Sec", price: 100.00, inStock: true, stockQty: 15, video: "https://youtu.be/dA8IfDOh-3w" }
];
