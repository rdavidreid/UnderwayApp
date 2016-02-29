class Api::BackersController < ApplicationController

  def index
    @backers = Backer.all
  end

  def show
    @backers = Backer.find_by_id(params[:id])
  end

  def create

    @backer = Backer.new(backer_params)
    @backer.user_id = current_user.id

    if @backer.save
      @project = @backer.project
      @project.current_funding += @backer.reward.cost
      @project.save
      current_users_rewards = current_user.rewards
      @current_users_current_project_rewards = []
      current_users_rewards.map do |el|
        if el.project_id == @project.id
          @current_users_current_project_rewards.push(el)
        end
      end
      render "/api/projects/show"
    else
      render :json => {:error => "reward sold out"}.to_json, :status => 422
    end
  end

  private

  def backer_params
    puts params
    params.require(:backer).permit(:reward_id)
  end

end
