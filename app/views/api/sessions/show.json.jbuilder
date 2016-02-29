json.user_id @current_user.id
json.backed_projects @current_user.backed_projects
json.authored_projects @current_user.authored_projects

json.rewards @current_user.rewards
# this this API you could pass in quantity of rewards user owns, and then change if else statement to look at both
