class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  validates :name, presence: true, length: {maximum: Settings.validations.user
    .name_max_length}
  validates :phone, presence: true
end
