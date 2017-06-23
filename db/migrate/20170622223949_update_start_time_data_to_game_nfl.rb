class UpdateStartTimeDataToGameNfl < ActiveRecord::Migration[5.0]
  def change
    remove_column :game_nfls, :start_date
    change_column :game_nfls, :start_time, 'timestamp with time zone', null: false
  end
end
