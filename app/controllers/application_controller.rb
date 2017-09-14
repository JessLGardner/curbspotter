# class ApplicationController < ActionController::API
#   include DeviseTokenAuth::Concerns::SetUserByToken


  # protected
  # def authenticate_user!
  #   if user_signed_in?
  #     super
  #   else
  #     redirect_to new_user_session_path
  #   end
  # end

# end


class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

 before_action :configure_permitted_parameters, if: :devise_controller?
  
 protected
  
   def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :nickname, :email, :password, :password_confirmation])
    end
end
