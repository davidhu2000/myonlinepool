class CreateWeeklyResultNfls < ActiveRecord::Migration[5.0]
  def change
    create_table :weekly_result_nfls do |t|
      t.references :user, foreign_key: true
      t.references :pool, foreign_key: true
      t.integer :week
      t.integer :season
      t.integer :correct_picks

      t.timestamps
    end
  end
end
