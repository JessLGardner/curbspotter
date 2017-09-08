class Api::NeighborhoodsController < ApplicationController

  def index
    @neighborhood_list = Neighborhood.all
    render json: @neighborhood_list
  end

  def show
    @neighborhood = Neighborhood.find params[:id]
    render json: @neighborhood
  end

  private
  def neighborhood_params
    params.require(:neighborhood).permit(:name, :description)
  end
  
end
