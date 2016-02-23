json.array! @projects do |project|
  json.title project.title
  json.blurb project.blurb
  json.img_url project.img_url
  json.category_id project.category_id
  json.current_funding project.current_funding
  json.funding_goal project.funding_goal
  json.campaign_end_date project.campaign_end_date
  json.author do
    json.username project.author.username
  end
end
