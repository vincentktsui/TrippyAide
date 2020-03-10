class ChangeAttractions < ActiveRecord::Migration[5.2]
  def change
    change_column :attractions, :postal_code, :string, null: true
    change_column :attractions, :thoroughfare, :string, null: true
    change_column :attractions, :locality, :string, null: true
  end
end
