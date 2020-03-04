json.extract! attraction, :id, :about, :name, :country, 
            :administrative_area, :locality, :postal_code, :thoroughfare
json.set!(:lat, attraction.coordinates.y)
json.set!(:lng, attraction.coordinates.x)
