require "rails_helper"

RSpec.describe User, type: :model do
  subject {FactoryGirl.build :user}
  it {should validate_presence_of :email}
  it {should validate_presence_of :name}
  it {should validate_presence_of :password}
  it {should validate_presence_of :phone}
  it {should validate_uniqueness_of(:email).case_insensitive}
  it {should validate_length_of(:password).is_at_least Settings.validations.user.password_min_length}
  it {should validate_length_of(:name).is_at_most Settings.validations.user.name_max_length}
end
