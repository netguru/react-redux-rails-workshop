class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @comment = Comment.find(params[:id])
  end

  def destroy
    Comment.find(params[:id]).destroy

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
      format.js   { render :layout => false }
    end
  end

  def create
    @restaurant = Restaurant.find(params[:id])
    @restaurant.comments << Comment.create(comment_params)
    respond_to do |format|
      format.js { render json: @restaurant }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:rating, :description)
  end
end
