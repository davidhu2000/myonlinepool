class CreatePicks < ActiveRecord::Migration[5.0]
  def change
    create_table :picks do |t|
      t.integer :user_id, null: false
      t.integer :pool_id, null: false
      t.integer :game_id, null: false
      t.string :pick, null: false

      t.timestamps
    end

    add_index :picks, [:user_id, :pool_id, :game_id], unique: true
  end
end
