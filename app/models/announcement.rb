# == Schema Information
#
# Table name: announcements
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Announcement < ApplicationRecord
  validates :body, presence: true
  validates :title, presence: true
end
