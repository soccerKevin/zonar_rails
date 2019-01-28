class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.timestamps
      t.string :name
      t.text :description
      t.float :price
    end
  end
end
