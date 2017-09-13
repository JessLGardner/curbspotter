class Api::NeighborhoodsController < ApplicationController

  def index
    @neighborhood_list = Neighborhood.all
    render json: @neighborhood_list
  end

  def show
    @neighborhood = Neighborhood.find params[:id]
    render json: @neighborhood
  end

  def update
    @neighborhood = Neighborhood.find params[:id]
    @neighborhood.update(neighborhood_params)

    if @neighborhood.save
      render json: @neighborhood
    else
      render json: {
        message: 'error updating neighborhood'
      }
    end
  end

  def create
    @neighborhood = Neighborhood.new(neighborhood_params)
    
        if @neighborhood.save
          render json: @neighborhood
        else
          render json: {
            message: 'error creating neighborhood'
          }
        end
  end

  def destroy
    @neighborhood = Neighborhood.find(params[:id])
    @neighborhood.destroy

    render json: {
      message: 'neighborhood successfully destroyed'
    }
  end

  private
  def neighborhood_params
    params.require(:neighborhood).permit(:name, :description)
  end
  
end
