class AddPoolIdToPools < ActiveRecord::Migration[5.0]
  def change
    add_column :pools, :identifier, :string, null: false, unique: true 
  end
end
