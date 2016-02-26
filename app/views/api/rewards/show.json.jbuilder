json.reward do
  json.id @reward.id
  json.title @reward.title
  json.description @reward.description
  json.cost @reward.cost
  json.project_id @reward.project_id
  json.delivery_date @reward.delivery_date
  json.reward_count @reward.reward_count
end
