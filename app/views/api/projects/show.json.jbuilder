json.project do
  json.id @project.id
  json.title @project.title
  json.blurb @project.blurb
  json.img_url @project.img_url
  json.category_id @project.category_id
  json.current_funding @project.current_funding
  json.funding_goal @project.funding_goal
  json.campaign_end_date @project.campaign_end_date
  json.details @project.details
  json.author do
    json.username @project.author.username
  end
  json.rewards @project.rewards do |reward|
    json.reward_title reward.title
    json.reward_description reward.description
    json.reward_cost reward.cost
    json.reward_count reward.reward_count
    json.reward_max_count reward.reward_max_count
    json.rewards_bought do
      arr = []
      @current_users_current_project_rewards.each do |el|
        arr.push(el) if el.id == reward.id
      end
      json.rewards_bought arr.length
    end
  end
end
