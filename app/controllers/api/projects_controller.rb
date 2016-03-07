class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find_by_id(params[:id])
    @current_user = current_user
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    @project.current_funding = 0
    if @project.save
      render :show
    else
      render :json => {:error => "Invalid project"}.to_json, :status => 422
    end

  end

  def update
    @project = Project.find_by_id(params[:id])

    if @project
      @project.update(project_params)
      @current_user = current_user
    end

    render :show
  end

  def destroy
    @project = Project.find_by_id(params[:id])

    if @project
      @project.destroy
      @projects = Project.all
    end

    render :index
  end

  private

  def project_params
    params.require(:project).permit(
      :title, :blurb, :img_url, :details, :category_id,
      :funding_goal, :campaign_end_date, :Project
    )
  end

end
