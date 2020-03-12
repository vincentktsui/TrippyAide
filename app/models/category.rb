class Category < ApplicationRecord
    has_many :attraction_categories
    has_many :attractions,
        through: :attraction_categories,
        source: :attraction
end

