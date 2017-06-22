class AddSpreadAndLineToGameNfl < ActiveRecord::Migration[5.0]
  def change
    add_column :game_nfls, :spread, :integer
    add_column :game_nfls, :line, :integer
  end
end
