class Restaurant < ApplicationRecord
  has_many :comments

  def average_rating
    comments.inject(0.0) { |result, el| result + el.rating } / comments.size
  end
end
