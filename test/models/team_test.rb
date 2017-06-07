# == Schema Information
#
# Table name: teams
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  city         :string           not null
#  league       :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  abbreviation :string
#

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
