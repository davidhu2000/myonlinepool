# == Schema Information
#
# Table name: pools
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string
#  moderator_id :integer          not null
#  buy_in       :integer          default("0"), not null
#  league       :string           not null
#  season       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Pool < ApplicationRecord
end
