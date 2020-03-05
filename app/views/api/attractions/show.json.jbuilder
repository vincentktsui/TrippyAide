json.show do
    json.partial! 'api/attractions/attraction', attraction: @attraction
end

json.nearby do
    @nearby.each do |relev|
        json.set! relev.id do
            json.partial! 'api/attractions/attraction', attraction: relev
        end
    end
end