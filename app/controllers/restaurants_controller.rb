class RestaurantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if request.format.symbol == :json
      render json: Restaurant.all.to_json
    else
      render 'index'
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @comments = @restaurant.comments.where(restaurant: @restaurant)
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
