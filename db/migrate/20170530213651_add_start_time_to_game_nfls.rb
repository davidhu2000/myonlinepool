class AddStartTimeToGameNfls < ActiveRecord::Migration[5.0]
  def change
    add_column :game_nfls, :start_time, :date, null: false
  end
end
