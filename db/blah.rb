attraction_names_file = File.open("./sf_attractions.txt")
attraction_names = attraction_names_file.readlines.map(&:chomp)
attraction_names_file.close
CATEGORIES = ['Sights & Landmarks', 'Landmarks', 'Architectural Buildings', 'Monuments & Statues', 'Historic Sites', 'Sacred & Religious Sites', 'Nature & Parks', 'Parks', 'Beaches', 'Museums', 'Zoos & Aquariums', 'Zoos', 'Aquariums']

attraction_names.each do |attraction|
    split = attraction.split(';')
    name = split[0].split("\"")[1]
    lat = split[1].split("lat: ")[1]
    lng = split[2].split("lng: ")[1]
    address = split[3].split("address: ")[1]
    zip = split[5].split(' ')[1]
    categories = split[7]
    if (categories) 
        categories = categories[13..-1].split(',').map(&:strip)
    end
    if categories
        categories.each do |category|
            index = CATEGORIES.find_index(category)
        end
    end
end