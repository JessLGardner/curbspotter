class Api::UsersController < ApplicationController

  def show
    # @user = current_user
    @user = User.find(params[:id])
    
    render json: @user
  end


  # def update
  #   @user = User.find params[:id]
  #   render json: @user
  # end


  def destroy
      @user = User.find(params[:id])
      @user.destroy
      render json: {
        message: 'user successfully deleted'
      }
  end

 
   private

   def user_params

   end


end