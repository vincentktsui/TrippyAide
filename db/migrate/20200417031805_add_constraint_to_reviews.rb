class AddConstraintToReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :attraction_reviews, :visit_date, :date, null: false
  end
end
