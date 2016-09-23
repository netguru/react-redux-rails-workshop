class Restaurant < ApplicationRecord
  has_many :comments
  belongs_to :user

  validates :name, :address, :description, presence: true

  def average_rating
    return unless comments.present?
    comments.inject(0.0) { |result, el| result + el.rating } / comments.size
  end
end
