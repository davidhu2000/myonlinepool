class AddAbbrToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :abbreviation, :string
  end
end
