class Api::PostsController < ApplicationController

  def index
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @posts = @neighborhood.posts.all
  
    render json: @posts  
  end

  def show
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @post = @neighborhood.posts.find params[:id]
    
    render json: @post 
  end

  private
  def post_params
    params.require(:post).permit(:title, :content, :image_url, :category, :location, :neighborhood_id, :created_at)
  end
  
end


