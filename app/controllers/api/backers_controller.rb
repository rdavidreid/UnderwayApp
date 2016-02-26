class Api::BackersController < ApplicationController

#  if user tries to purchase a reward a 2nd time, alert them on the front end
# that they already have purchased one, but let them purchase a 2nd. ONLY alert
# if they have purchased 1. if they have purchased 2, allow them to keep clicking
# and purchase infinity rewards.

  def index
    @backers = Backer.all
  end

  def show
    @backers = Backer.find_by_id(params[:id])
  end

  def create()
    @backer = Backer.new({
      user_id: current_user.id,
      project_id: backer_params[:backer][:project_id]
    })
    if @backer.save
      render :show
    else
      debugger
    end
  end

  private

  def backer_params
    puts params
    params.require(:backer).permit(:project_id)
  end

end
