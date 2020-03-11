# == Schema Information
#
# Table name: attractions
#
#  id                  :bigint           not null, primary key
#  name                :string           not null
#  country             :string           not null
#  administrative_area :string           not null
#  locality            :string
#  postal_code         :string
#  thoroughfare        :string
#  coordinates         :geography        point, 4326
#  about               :text
#  owner_id            :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Attraction < ApplicationRecord
    attr_accessor :avg_rating, :num_rating
    after_find :set_rating 
    has_many :reviews,
        foreign_key: :attraction_id,
        class_name: :AttractionReview
    has_many_attached :photos

    def set_rating
        self.avg_rating = AttractionReview.where(attraction_id: self.id).average(:rating)
        self.num_rating = AttractionReview.where(attraction_id: self.id).count(:rating)
    end
    
    def self.in_bounds(bounds)
        north = bounds['northEast']['lat'];
        east = bounds['northEast']['lng'];
        south = bounds['southWest']['lat'];
        west = bounds['southWest']['lng'];
        sql = <<-SQL, west, south, east, north
            SELECT * 
            FROM attractions
            WHERE coordinates::geometry @ ST_MakeEnvelope(
                ?, ?, ?, ?, 4326)

        SQL
        Attraction.find_by_sql(sql)
    end

    def self.radius(lng, lat, id)
        radius_mi = 1.8
        sql= <<-SQL, lng, lat, radius_mi
            SELECT *
            FROM attractions
            WHERE 
            ST_DistanceSphere(
                coordinates::geometry, 
                ST_MakePoint(?, ?)
                ) <= ? * 1610
        SQL
        Attraction.find_by_sql(sql)
        # id != ? AND
    end

    # def self.blah
    #     sql= <<-SQL
    #         SELECT attractions.id, AVG(rating)
    #         FROM attractions
    #         JOIN attraction_reviews 
    #         ON attractions.id = attraction_reviews.attraction_id 
    #         GROUP BY attractions.id
    #         ORDER BY AVG(rating) DESC
    #     SQL
    #     Attraction.find_by_sql(sql)
    #     # array = ActiveRecord::Base.connection.execute(sql)
    #     # array
    # end

end

# SELECT attractions, AVG(rating) AS avg_rating FROM attractions
# JOIN attraction_reviews 
# ON attractions.id = attraction_reviews.attraction_id
# GROUP BY attractions.id
# ORDER BY avg_rating DESC;