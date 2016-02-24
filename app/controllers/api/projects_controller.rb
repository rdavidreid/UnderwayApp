class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find_by_id(params[:id])
  end

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
    end

  end

  def update
    @project = Project.find_by_id(params[:id])

    if @project
      if @project.update({
        blurb: params[:project][:blurb],
        img_url: params[:project][:img_url],
        details: params[:project][:details]
        })
      end
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
    params.require(:project).permit(
      :title, :blurb, :img_url, :details, :category_id,
      :funding_goal, :campaign_end_date
    )
  end

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
