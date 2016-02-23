class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find_by_id(params[:id])
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    @project.current_funding = 0
    if @project.save
    else
    end

  end

  def update
    @project = Project.find_by_id(params[:id])

    if @project

      if @project.update(project_params)
      end

    end

  end

  def destroy

  end

  private

  def project_params
    params.require(:project).permit(
      :title, :blurb, :img_url, :details, :category_id,
      :funding_goal, :campaign_end_date
    )
  end

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
