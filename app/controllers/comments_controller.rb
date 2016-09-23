class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.js { render json: @comment }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:rating, :description)
  end
end
