# == Schema Information
#
# Table name: attraction_reviews
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  body          :text             not null
#  rating        :integer          not null
#  visit_date    :date
#  author_id     :integer          not null
#  attraction_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class AttractionReview < ApplicationRecord
    validates :title, :body, :rating, :author_id, :attraction_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :attraction
end
