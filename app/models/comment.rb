class Comment < ApplicationRecord
  belongs_to :restaurant

  validates :rating, :description, presence: true
  validates_inclusion_of :rating, :in => 1..5
end
