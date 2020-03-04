json.set! @attraction.id do
    json.partial! 'api/benches/attraction', attraction: @attraction
end