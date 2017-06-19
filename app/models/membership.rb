# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  pool_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :pool, presence: true
  validates :user, presence: true

  belongs_to :user, inverse_of: :memberships
  belongs_to :pool, inverse_of: :memberships
end
