class AddPaymentInfoToPools < ActiveRecord::Migration[5.0]
  def change
    add_column :pools, :max_size, :integer
    add_column :pools, :amount_paid, :integer
    add_column :pools, :payment_made, :boolean, default: false, null: false
  end
end
