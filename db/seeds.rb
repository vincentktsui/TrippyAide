# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Attraction.create({name: 'Alcatraz Island', country: 'USA', 
    administrative_area: 'CA', locality: 'San Francisco', 
    postal_code: '94123', thoroughfare: 'Pier 33', 
    coordinates: RGeo::Geographic.spherical_factory(srid: 4326).point(-122.404419, 37.806660),
    about: 'Park rangers conduct tours by recounting the prison''s thrilling history along with intriguing anecdotes about Al Capone and other legendary figures that made a "home" here.'})