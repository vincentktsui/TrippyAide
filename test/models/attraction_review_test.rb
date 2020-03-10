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
require 'test_helper'

class AttractionReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
