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
  validates :user, presence: true
  validates :pool, presence: true
  validates :body, presence: true

  belongs_to :user
  belongs_to :pool
end
