# == Schema Information
#
# Table name: bulletins
#
#  id         :integer          not null, primary key
#  pool_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bulletin < ApplicationRecord
  validates :pool_id, presence: true, numericality: { only_integer: true }
  validates :body, presence: true

  belongs_to :pool
end
