# == Schema Information
#
# Table name: weekly_result_nfls
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  pool_id       :integer
#  week          :integer
#  season        :integer
#  correct_picks :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class WeeklyResultNflTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
