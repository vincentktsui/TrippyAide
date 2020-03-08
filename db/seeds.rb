# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
# Users
demo = User.create({email: 'demouser@aa.io', password: 'demouser', display_name: 'Demouser', business: true})


# Attractions
alcatraz_island = Attraction.create({name: 'Alcatraz Island', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94123', thoroughfare: 'Pier 33', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.422886, 37.826723),
    about: 'Park rangers conduct tours by recounting the prison''s thrilling history along with intriguing anecdotes about Al Capone and other legendary figures that made a "home" here.'})
alcatraz_island.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/Alcatraz.jpg'), filename: 'Alcatraz.jpg')

# lombard_street = Attraction.create({name: 'Lombard Street', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94109', thoroughfare: '1070 Lombard Street between Jones St and Hyde St', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.419120, 37.802230),
#     about: 'Known as the "crookedest" street in the world, the steep hills and sharp curves of this one-way road pass by grand Victorian mansions and attract millions of tourists each year.'})
# lombard_street.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/LombardStreet.jpg'), filename: 'LombardStreet.jpg')

# palace_of_fine_arts = Attraction.create({name: 'Palace of Fine Arts', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94123-1002', thoroughfare: '3301 Lyon Street', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.447739, 37.801498),
#     about: 'Designed to look like a Roman ruin, this golden building is certainly a beauty to behold.'})
# palace_of_fine_arts.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/PalaceOfFineArts.jpg'), filename: 'PalaceOfFineArts.jpg')


# golden_gate_bridge = Attraction.create({name: 'Golden Gate Bridge', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94129', thoroughfare: 'US-101', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.478461, 37.817582),
#     about: 'Stretching 4,200 feet and towering as high as a 65-story building, this well-known bridge is the gateway to San Francisco.'})
# golden_gate_bridge.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/GGBridge.jpg'), filename: 'GGBridge.jpg')

# oracle_park = Attraction.create({name: 'Oracle Park', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94107-2134', thoroughfare: '24 Willie Mays Plaza', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.390621, 37.77842),
#     about: 'Home of the San Francisco Giants Major League baseball team.'})
# oracle_park.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/OraclePark.jpg'), filename: 'OraclePark.jpg')

# fishermans_wharf = Attraction.create({name: 'Fisherman''s Wharf', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94133', thoroughfare: '286-298 Jefferson Street', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.417617, 37.807952),
#     about: 'Historic Fisherman''s Wharf is the classic San Francisco experience where you will find a range of hotels, specialty restaurants, famous attractions, unique shops, breathtaking scenery and entertainment for the whole family.'})
# fishermans_wharf.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/FishermansWharf.jpg'), filename: 'FishermansWharf.jpg')

# twin_peaks = Attraction.create({name: 'Twin Peaks', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Francisco', 
#     postal_code: '94114', thoroughfare: '501 Twin Peaks Boulevard', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.447125, 37.754154),
#     about: 'A twenty-minute ride from downtown, this is the best place to catch a San Francisco sunrise.'})
# twin_peaks.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/TwinPeaks.jpg'), filename: 'TwinPeaks.jpg')

# california_adventure = Attraction.create({name: 'Disney California Adventure Park', country: 'USA', 
#     administrative_area: 'CA', locality: 'Anaheim', 
#     postal_code: '92803-3232', thoroughfare: '1313 Disneyland Drive', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-117.920859, 33.806112),
#     about: 'Experience the thrill of the an old wooden rollercoaster, but with modern twists, turns and technology, at "California Screamin." Or enjoy a live performance by your favorite characters at Disney''s newest theme park, featuring a slew of exciting rides and family entertainment.'})
# california_adventure.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/CaliforniaAdventure.jpg'), filename: 'CaliforniaAdventure.jpg')

# uss_midway = Attraction.create({name: 'USS Midway Museum', country: 'USA', 
#     administrative_area: 'CA', locality: 'San Diego', 
#     postal_code: '92101-5811', thoroughfare: '910 North Harbor Drive', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-117.175126, 32.71374),
#     about: 'Located in downtown San Diego, the USS Midway (Museum) was America’s longest-serving aircraft carrier of the 20th century. Today, the interactive museum is an unforgettable adventure for the entire family as guests walk in the footsteps of the 225,000 young men who served on Midway. Visitors explore a floating city at sea, the amazing flight deck and its 29 restored aircraft, flight simulators, and are inspired in the Battle of Midway Theater, included with admission. Admission also includes a self-guided audio tour narrated by Midway sailors in English, Mandarin, Spanish, Japanese, French and German. Visiting Midway is a once-in-a-lifetime experience in San Diego, known around the world as "Navy Town, USA."'})
# uss_midway.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/USSMidway.jpg'), filename: 'USSMidway.jpg')

# monterey_aquarium = Attraction.create({name: 'Monterey Bay Aquarium', country: 'USA', 
#     administrative_area: 'CA', locality: 'Monterey', 
#     postal_code: '93940-1085', thoroughfare: '886 Cannery Row', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-121.901792, 36.618264),
#     about: 'Located at the ocean''s edge, the Monterey Bay Aquarium is a window to marine life -- for dive masters and non-swimmers alike. It''s home to sea otters, penguins, sharks, jellies and thousands of other marine animals and plants. Its mission is to inspire conservation of the ocean.'})
# monterey_aquarium.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/MontereyAquarium.jpg'), filename: 'MontereyAquarium.jpg')

# central_park = Attraction.create({name: 'Central Park', country: 'USA', 
#     administrative_area: 'NY', locality: 'New York City', 
#     postal_code: '10022', thoroughfare: '59th to 110th Street Manhattan Borough, from Central Park West to 5th Avenue', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-73.965355, 40.782865),
#     about: 'For more than 150 years, visitors have flocked to Central Park''s 843 green acres in the heart of Manhattan.'})
# central_park.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/CentralPark.jpg'), filename: 'CentralPark.jpg')

# fountains_of_bellagio = Attraction.create({name: 'Fountains of Bellagio', country: 'USA', 
#     administrative_area: 'NV', locality: 'Las Vegas', 
#     postal_code: '89109-4303', thoroughfare: '3600 South Las Vegas Boulevard', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-115.17401, 36.112771),
#     about: 'These 200-foot-tall fountains at the Bellagio Hotel are choreographed to music for performances.'})
# fountains_of_bellagio.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/FountainsOfBellagio.jpg'), filename: 'FountainsOfBellagio.jpg')

# grand_canyon_south_rim = Attraction.create({name: 'Grand Canyon South Rim', country: 'USA', 
#     administrative_area: 'AZ', locality: 'Grand Canyon National Park', 
#     postal_code: '86023', thoroughfare: 'Highway 64', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-111.967941, 35.984707),
#     about: 'The most developed area of Grand Canyon National Park, the South Rim offers amenities such as bus service, hotels and water stations, but is also more crowded than the North Rim. Scenic highlights include Pipe Creek Vista and Yavapai Point.'})
# grand_canyon_south_rim.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/GrandCanyonSouthRim.jpg'), filename: 'GrandCanyonSouthRim.jpg')

# niagara_falls = Attraction.create({name: 'Niagara Falls Canada', country: 'Canada', 
#     administrative_area: 'Ontario', locality: 'Niagara Falls', 
#     postal_code: 'L2G 3Y9', thoroughfare: 'Niagara Falls', 
#     coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-79.084944, 43.089558),
#     about: 'Three magnificent falls, two American and one Canadian, mark the point at which the Niagara River rumbles over the Niagara Escarpment.'})
# niagara_falls.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/NiagaraFalls.jpg'), filename: 'NiagaraFalls.jpg')

