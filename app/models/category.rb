class Category < ActiveRecord::Base
  validates :title, presence: true

  has_many :projects
end
