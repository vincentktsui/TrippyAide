json.set!(:lat, attraction.coordinates.y)
json.set!(:lng, attraction.coordinates.x)
json.extract! attraction, :id, :name, :thoroughfare, :locality, 
    :administrative_area, :postal_code, :country, :about
