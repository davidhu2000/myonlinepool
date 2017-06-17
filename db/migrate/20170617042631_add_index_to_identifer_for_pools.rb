class AddIndexToIdentiferForPools < ActiveRecord::Migration[5.0]
  def change
    add_index :pools, :identifier, unique: true
  end
end
