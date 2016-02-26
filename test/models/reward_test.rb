# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  description      :string           not null
#  cost             :integer          not null
#  project_id       :integer          not null
#  delivery_date    :date             not null
#  reward_count     :integer
#  reward_max_count :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
