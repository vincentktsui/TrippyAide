json.set!(:lat, attraction.coordinates.y)
json.set!(:lng, attraction.coordinates.x)
json.extract! attraction, :id, :name, :thoroughfare, :locality, 
    :administrative_area, :postal_code, :country, :about, :avg_rating, :num_rating
json.photoUrls attraction.photos.map {|file| url_for(file)}
json.categories attraction.categories.map {|category| category.category}

# json.array!(attraction.photos.attachments) do |photo|
#     json.image_url url_for(photo)
# end

# json.set!(:address, Util.addressMaker)