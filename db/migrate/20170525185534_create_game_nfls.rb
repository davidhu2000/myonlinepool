class CreateGameNfls < ActiveRecord::Migration[5.0]
  def change
    create_table :game_nfls do |t|
      t.integer :week, null: false
      t.integer :season, null: false
      t.integer :home_id, null: false
      t.integer :away_id, null: false
      t.integer :home_score
      t.integer :away_score
      t.boolean :completed, null: false, default: false

      t.timestamps
    end

    add_index :game_nfls, [:week, :season]
  end
end
