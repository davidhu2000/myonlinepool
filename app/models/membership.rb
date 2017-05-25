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
  validates :pool_id, presence: true
  validates :user_id, presence: true

  belongs_to :user
  belongs_to :pool
end
