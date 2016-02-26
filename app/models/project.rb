# == Schema Information
#
# Table name: projects
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  blurb             :string           not null
#  img_url           :string
#  details           :text             not null
#  author_id         :integer          not null
#  category_id       :integer          not null
#  current_funding   :integer          default(0), not null
#  funding_goal      :integer          not null
#  campaign_end_date :date             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Project < ActiveRecord::Base
  validates :title, :blurb, :details, :author_id, :category_id, presence: true
  validates :current_funding, :funding_goal, :campaign_end_date, presence: true

  belongs_to(
    :author,
    foreign_key: :author_id,
    class_name: 'User'
  )

  has_many(
    :rewards
  )

  has_many(
    :backers,
    through: :rewards
  )




end
