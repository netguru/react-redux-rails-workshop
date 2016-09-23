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
    @restaurant = Restaurant.find(params[:restaurant_id])
    comment = Comment.new(comment_params)
    comment.user = current_user
    @restaurant.comments << comment
    @restaurant.save
    respond_to do |format|
      format.js { render json: @restaurant.comments.last }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:rating, :description)
  end
end
