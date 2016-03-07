class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(
      username: params[:user][:username],
      password: params[:user][:password]
      )
    if @user.save
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

end
