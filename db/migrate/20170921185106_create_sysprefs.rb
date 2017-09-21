class CreateSysprefs < ActiveRecord::Migration[5.0]
  def change
    create_table :sysprefs do |t|
      t.string :week
      t.string :year

      t.timestamps
    end
  end
end
