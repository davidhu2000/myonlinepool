class AddTransactionNumberToPools < ActiveRecord::Migration[5.0]
  def change
    add_column :pools, :transaction_number, :string
  end
end
