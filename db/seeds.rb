# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo = User.create({email: 'demouser@aa.io', password: 'demouser', display_name: 'Demouser', business: true})


alcatraz_island = Attraction.create({name: 'Alcatraz Island', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94123', thoroughfare: 'Pier 33', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.422886, 37.826723),
    about: 'Park rangers conduct tours by recounting the prison''s thrilling history along with intriguing anecdotes about Al Capone and other legendary figures that made a "home" here.'})
alcatraz_island.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/Alcatraz.jpg'), filename: 'Alcatraz.jpg')

lombard_street = Attraction.create({name: 'Lombard Street', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94109', thoroughfare: '1070 Lombard Street between Jones St and Hyde St', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.419120, 37.802230),
    about: 'Known as the "crookedest" street in the world, the steep hills and sharp curves of this one-way road pass by grand Victorian mansions and attract millions of tourists each year.'})
lombard_street.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/LombardStreet.jpg'), filename: 'LombardStreet.jpg')

palace_of_fine_arts = Attraction.create({name: 'Palace of Fine Arts', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94123-1002', thoroughfare: '3301 Lyon Street', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.447739, 37.801498),
    about: 'Designed to look like a Roman ruin, this golden building is certainly a beauty to behold.'})
palace_of_fine_arts.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/PalaceOfFineArts.jpg'), filename: 'PalaceOfFineArts.jpg')


golden_gate_bridge = Attraction.create({name: 'Golden Gate Bridge', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94129', thoroughfare: 'US-101', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.478461, 37.817582),
    about: 'Stretching 4,200 feet and towering as high as a 65-story building, this well-known bridge is the gateway to San Francisco.'})
golden_gate_bridge.photos.attach(io: open('https://trip-advisor-clone-seeds.s3.us-west-1.amazonaws.com/seed_images/GGBridge.jpg'), filename: 'GGBridge.jpg')
