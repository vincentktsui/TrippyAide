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

json.reviews do 
    @attraction.reviews.each do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review, user: review.author
        end
    end
end