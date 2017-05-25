class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :league, null: false

      t.timestamps
    end
  end
end
