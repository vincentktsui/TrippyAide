attraction_names_file = File.open("./sf_attractions.txt")
attraction_names = attraction_names_file.readlines.map(&:chomp)
attraction_names_file.close

attraction_names.each do |attraction|
    split = attraction.split(';')
    name = split[0].split("\"")[1]
    lat = split[1].split("lat: ")[1]
    lng = split[2].split("lng: ")[1]
    address = split[3].split("address: ")[1]
    zip = split[5].split(' ')[1]
    puts(name)
    puts(lat)
    puts(lng)
    puts(address)
    puts(zip)
end