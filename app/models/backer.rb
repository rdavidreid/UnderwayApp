# == Schema Information
#
# Table name: backers
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  reward_id :integer          not null
#

class Backer < ActiveRecord::Base

  belongs_to(:user)
  belongs_to(:reward)

  has_one(:project, through: :reward)



end
