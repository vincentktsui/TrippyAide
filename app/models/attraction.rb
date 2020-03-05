class Attraction < ApplicationRecord
    # scope :within, -> (latitude, longitude, distance_in_mile = 1) {
    #     where(%{
    #         ST_Distance(coordinates, 'POINT())
    #     })
    # }
    def self.in_bounds(bounds)
        north = bounds['northEast']['lat'];
        east = bounds['northEast']['lng'];
        south = bounds['southWest']['lat'];
        west = bounds['southWest']['lng'];
        sql = <<-SQL, west, south, east, north
            SELECT * FROM attractions
            WHERE coordinates::geometry @ ST_MakeEnvelope(
                ?, ?, ?, ?, 4326)
        SQL
        Attraction.find_by_sql(sql)
    end

    def self.radius(lng, lat, id)
        radius_mi = 1.8
        sql= <<-SQL, id, lng, lat, radius_mi
            SELECT * FROM attractions
            WHERE id != ? AND
            ST_DistanceSphere(
                coordinates::geometry, 
                ST_MakePoint(?, ?)
                ) <= ? * 1610
        SQL
        Attraction.find_by_sql(sql)
    end

end
