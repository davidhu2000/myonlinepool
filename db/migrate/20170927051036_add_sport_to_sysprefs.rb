class AddSportToSysprefs < ActiveRecord::Migration[5.0]
  def change
    add_column :sysprefs, :sport, :string
  end
end
