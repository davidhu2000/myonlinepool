class AddGameDateToGameNfl < ActiveRecord::Migration[5.0]
  def change
    add_column :game_nfls, :start_date, :string, null: false
  end
end
