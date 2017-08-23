FactoryGirl.define do
  factory :user do
    email {Faker::Internet.email}
    password {Faker::Internet.password Settings.validations.user.password_min_length}
    name {Faker::Name.name}
    phone {Faker::PhoneNumber.phone_number}
  end
end
