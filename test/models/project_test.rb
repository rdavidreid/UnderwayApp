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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
