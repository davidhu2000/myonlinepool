class AddResultColumnToPicks < ActiveRecord::Migration[5.0]
  def change
    add_column :picks, :is_correct, :string, default: 'pending'
  end
end
