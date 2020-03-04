@attractions.each do |attraction|
    json.set! attraction.id do
        json.partial! 'api/attractions/attraction', attraction: attraction
    end
end