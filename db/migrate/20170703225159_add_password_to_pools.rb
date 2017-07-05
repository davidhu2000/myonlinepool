class AddPasswordToPools < ActiveRecord::Migration[5.0]
  def change
    add_column :pools, :password, :string, null: false
  end
end
