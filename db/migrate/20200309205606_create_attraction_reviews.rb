class CreateAttractionReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :attraction_reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.date :visit_date
      t.integer :author_id, null: false
      t.integer :attraction_id, null: false
      t.timestamps
    end

    add_index :attraction_reviews, :author_id
    add_index :attraction_reviews, :attraction_id
  end
end
