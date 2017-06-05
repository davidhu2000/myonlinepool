# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  pool_id    :integer          not null
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :user_id, presence: true, numericality: { only_integer: true }
  validates :pool_id, presence: true, numericality: { only_integer: true }

  belongs_to :user
  belongs_to :pool
end
