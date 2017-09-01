source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "5.1.3"
gem "mysql2"
gem "puma", "~> 3.7"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "coffee-rails", "~> 4.2"
gem "jbuilder", "~> 2.5"
gem "dotenv-rails"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "config"
gem "ransack", github: "activerecord-hackery/ransack"
gem "kaminari"
gem "devise"
gem "carrierwave"
gem "mini_magick"
gem "bower-rails", "~> 0.11.0"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails"
  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"
  gem "rspec"
  gem "rspec-rails"
  gem "rspec-collection_matchers"
  gem "factory_girl_rails"
  gem "faker"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "simplecov-rcov", require: false
end
