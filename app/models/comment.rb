class Comment < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user

  validates :rating, :description, presence: true
  validates_inclusion_of :rating, :in => 1..5
end
