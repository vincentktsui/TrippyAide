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
require 'test_helper'

class AttractionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
