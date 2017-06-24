class AddWrongPicksToWeeklyResultNfls < ActiveRecord::Migration[5.0]
  def change
    add_column :weekly_result_nfls, :wrong_picks, :integer
  end
end
