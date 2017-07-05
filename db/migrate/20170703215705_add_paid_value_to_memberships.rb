class AddPaidValueToMemberships < ActiveRecord::Migration[5.0]
  def change
    add_column :memberships, :paid, :boolean, default: false, null: false
  end
end
