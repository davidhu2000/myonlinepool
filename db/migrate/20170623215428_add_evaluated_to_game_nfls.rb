class AddEvaluatedToGameNfls < ActiveRecord::Migration[5.0]
  def change
    add_column :game_nfls, :evaluated, :boolean, null: false, default: false
  end
end
