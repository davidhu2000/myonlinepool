class CreateBulletins < ActiveRecord::Migration[5.0]
  def change
    create_table :bulletins do |t|
      t.integer :pool_id, null: false
      t.string :body, null: false

      t.timestamps
    end

    add_index :bulletins, :pool_id
  end
end
