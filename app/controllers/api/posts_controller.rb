class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  
  
  def index
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @posts = @neighborhood.posts.all
  
    render json: {
      neighborhood: @neighborhood,
      posts: @posts
    }  
  end

  def show
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @post = @neighborhood.posts.find params[:id]
    @user = current_user
    render json: {
      neighborhood: @neighborhood,
      post: @post,
      user: @user
    }
  end

  def create
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @post = @neighborhood.posts.new(post_params)

    if @post.save
      render json: @post
    else
      render json: {
        message: 'error creating post'
      }
    end
  end

  def update
    @neighborhood = Neighborhood.find params[:neighborhood_id] 
    @post = @neighborhood.posts.find params[:id]
    @post.update(post_params)
    
    if @post.save
      render json: @post
    else
      render json: {
        message: 'error updating post'
      }
    end
  end

  def destroy
    @neighborhood = Neighborhood.find params[:neighborhood_id]
    @post = @neighborhood.posts.find params[:id]
    @post.destroy

    render json: {
      message: 'post successfully destroyed'
    }
  end


  private
  def post_params
    @post = params.require(:post).permit(:title, :content, :image_url, :category, :location, :neighborhood_id, :user_id, :created_at)
    user_id = {user_id: current_user.id}
    @post.merge(user_id)
end
  
end


