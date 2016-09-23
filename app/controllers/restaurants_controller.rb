class RestaurantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if request.format.symbol == :json
      render json: Restaurant.all.includes(:comments).to_json(methods: :average_rating)
    else
      render 'index'
    end
  end

  def show
    @restaurant = restaurant_with_comments
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


  def restaurant_with_comments
    @restaurant_with_comments_data = Restaurant.find(params[:id])
    {
      id: @restaurant_with_comments_data.id,
      name: @restaurant_with_comments_data.name,
      description: @restaurant_with_comments_data.description,
      average_rating: @restaurant_with_comments_data.average_rating,
      comments: Comment.where(restaurant: @restaurant_with_comments_data)
    }
  end
end
