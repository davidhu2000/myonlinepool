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

require 'test_helper'

class BulletinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
