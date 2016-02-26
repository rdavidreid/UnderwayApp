class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    # puts "PARAMS: #{params[id]}"
    @project = Project.find_by_id(params[:id])
    current_users_rewards = current_user.rewards
    @current_users_current_project_rewards = []
    current_users_rewards.map do |el|
      if el.project_id == @project.id
        @current_users_current_project_rewards.push(el)
      end
    end
  end

  # def errors
  #   @my_errors
  # end

  def create
    @project = Project.new(project_params)


    # TODO REMOVE: To test ApiUtil.createProject() bypassing params
    # @project = Project.new({
    # title:              "project TESTER",
    # blurb:              "The blurb of project TESTER",
    # img_url:            "http://lorempixel.com/200/200/cats/",
    # details:            "These are the details of project TESTER.",
    # category_id:        1,
    # funding_goal:       100000,
    # campaign_end_date:  Date.new
    # })

    @project.author_id = current_user.id
    @project.current_funding = 0
    if @project.save
      render :show
    else
      # @my_errors = @project.errors.full_messages
      # render json: @erorrs, status: 402
    end

  end

  def update
    @project = Project.find_by_id(params[:id])
    if @project
      if @project.update(project_params)
        puts "great success"
      end
      # if @project.update({
      #   blurb: params[:blurb],
      #   img_url: params[:img_url],
      #   details: params[:details]
      #   })
      #   puts @project
      #   puts "asdfffasdflkjasdflkjasdlkfjaslkdfjalksdjflkasdjfklajsldkfjlaksd"
      # end
    end

    render :show
  end

  def destroy
    @project = Project.find_by_id(params[:id])
    if @project
      @project.destroy
      @projects = Project.all
    render :index
    end
  end

  private

  def project_params
    puts params
    params.require(:project).permit(
      :title, :blurb, :img_url, :details, :category_id,
      :funding_goal, :campaign_end_date, :Project
    )
  end

  # def edit_params
  #   params.permit(:blurb, :img_url, :details)
  # end

  # TODO REMOVE:
  # @project = Project.new(
  # title:              params[:title],
  # blurb:              params[:blurb],
  # img_url:            params[:img_url],
  # details:            params[:details],
  # author_id:          current_user.id,
  # category_id:        params[:category_id],
  # current_funding:    0,
  # funding_goal:       params[:funding_goal],
  # campaign_end_date:  params[:campaign_end_date]
  # )
end
