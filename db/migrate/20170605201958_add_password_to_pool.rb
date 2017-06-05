class AddPasswordToPool < ActiveRecord::Migration[5.0]
  def change
    add_column :pools, :password_digest, :string, null: false
  end
end
