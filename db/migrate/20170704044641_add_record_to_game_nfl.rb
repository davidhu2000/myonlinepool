class AddRecordToGameNfl < ActiveRecord::Migration[5.0]
  def change
    add_column :game_nfls, :away_record, :string
    add_column :game_nfls, :home_record, :string
  end
end
