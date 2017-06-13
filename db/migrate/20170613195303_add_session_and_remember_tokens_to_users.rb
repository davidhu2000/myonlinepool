class AddSessionAndRememberTokensToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :session_token, :string, null: false
    add_column :users, :remember_token, :string

    add_index :users, :session_token
  end
end
