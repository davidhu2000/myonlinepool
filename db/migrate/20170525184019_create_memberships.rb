class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :pool_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :memberships, [:pool_id, :user_id], unique: true 
  end
end
