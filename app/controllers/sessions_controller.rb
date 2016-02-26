class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    if @user
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["invalid login"]
      render :new
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    end
    render :new
  end

end
