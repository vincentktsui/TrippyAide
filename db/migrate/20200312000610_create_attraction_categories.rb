class CreateAttractionCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :attraction_categories do |t|
      t.integer :attraction_id, null: false;
      t.integer :category_id, null: false;
      t.timestamps

    end
    add_index :attraction_categories, [:attraction_id, :category_id], unique: true
  end
end
