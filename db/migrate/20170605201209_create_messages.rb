class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :pool_id, null: false
      t.string :body

      t.timestamps
    end

    add_index :messages, :pool_id
  end
end
