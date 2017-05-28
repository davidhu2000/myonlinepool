# == Schema Information
#
# Table name: picks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  pool_id    :integer          not null
#  game_id    :integer          not null
#  pick       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PickTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
