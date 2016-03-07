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
      @current_user = current_user
      render "/api/projects/show"
    else
      render :json => {:error => "Invalid Reward"}.to_json, :status => 422
    end
  end

  def destroy
    @reward = Reward.find_by_id(params[:id])
    if @reward
      @reward.destroy
    else
      render :json => {:error => "Could not delete"}.to_json, :status => 422
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :description,
      :cost, :project_id, :delivery_date, :reward_max_count
    )
  end

end
