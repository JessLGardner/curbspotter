class Api::PostsController < ApplicationController

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
    
    render json: {
      neighborhood: @neighborhood,
      post: @post
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
    params.require(:post).permit(:title, :content, :image_url, :category, :location, :neighborhood_id, :created_at)
  end
  
end


