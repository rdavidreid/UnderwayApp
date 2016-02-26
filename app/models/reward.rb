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

class Reward < ActiveRecord::Base

  belongs_to(:project)
  has_many(:backers)
  has_many(:users, through: :backers, source: :user)




end
