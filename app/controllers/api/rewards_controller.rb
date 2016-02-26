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
      render :show
    else
      debugger
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
