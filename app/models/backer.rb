# == Schema Information
#
# Table name: backers
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  reward_id :integer          not null
#

class Backer < ActiveRecord::Base
  validate :is_not_sold_out

  belongs_to(:user)
  belongs_to(:reward)

  has_one(:project, through: :reward)

  def is_not_sold_out
    if self.reward.reward_max_count &&
      self.reward.backers.length > self.reward.reward_max_count
      errors.add(:reward_id, "Reward is sold out")
    end
  end

end
