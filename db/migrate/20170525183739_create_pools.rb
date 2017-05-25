class CreatePools < ActiveRecord::Migration[5.0]
  def change
    create_table :pools do |t|
      t.string :title, null: false
      t.string :description
      t.integer :moderator_id, null: false
      t.integer :buy_in, null: false, default: 0
      t.string :league, null: false
      t.integer :season, null: false

      t.timestamps
    end

    add_index :pools, :title
    add_index :pools, :moderator_id
  end
end
