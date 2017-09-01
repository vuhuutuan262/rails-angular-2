module ApplicationHelper
  def webpack_js_path path
    Rails.env.development? ? "http://0.0.0.0:8080/#{path}" : path
  end
end
