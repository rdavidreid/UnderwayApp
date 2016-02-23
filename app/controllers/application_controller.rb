class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def login(user)
    user.reset_session_token!
    session[:token] = user.session_token
  end

  def logout
    current_user.reset_session_token!
    session[:token] = nil
  end

end
