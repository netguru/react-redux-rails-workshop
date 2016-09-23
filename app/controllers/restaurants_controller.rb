class RestaurantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Restaurant.all.to_json
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
  end

  def create
    @restaurant = Restaurant.create(restaurant_params)
    respond_to do |format|
      format.js { render json: @restaurant }
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :description)
  end
end
