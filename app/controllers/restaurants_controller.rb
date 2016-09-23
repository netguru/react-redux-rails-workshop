class RestaurantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      redirect_to restaurant_path(@restaurant)
    else
      render 'new'
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :description)
  end
end
