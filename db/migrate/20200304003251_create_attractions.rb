class CreateAttractions < ActiveRecord::Migration[5.2]
  def change
    create_table :attractions do |t|
      t.string :name, null: false
      t.string :country, null: false
      t.string :administrative_area, null: false
      t.string :locality, null: false
      t.string :postal_code, null: false
      t.string :thoroughfare, null: false
      t.st_point :coordinates, geographic: true
      t.text :about
      t.integer :owner_id
      t.timestamps
    end
    add_index :attractions, :owner_id
    add_index :attractions, :coordinates, using: :gist
  end
end
