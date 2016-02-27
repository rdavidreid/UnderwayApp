class Api::RewardsController < ApplicationController

  def index
    @rewards = Reward.all
  end

  def show
    @reward = Reward.find_by_id(params[:id])
  end

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      @project = @reward.project
      current_users_rewards = current_user.rewards
      @current_users_current_project_rewards = []
      current_users_rewards.map do |el|
        if el.project_id == @project.id
          @current_users_current_project_rewards.push(el)
        end
      end
      render "/api/projects/show"
    else
    end
  end

  def destroy
    @reward = Reward.find_by_id(params[:id])
    if @reward
      @reward.destroy
    end

  end

  private

  def reward_params
    params.require(:reward).permit(:title, :description,
      :cost, :project_id, :delivery_date, :reward_max_count
    )
  end

end
