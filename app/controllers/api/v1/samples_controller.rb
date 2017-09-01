# TODO: This is sample file, to be removed
class Api::V1::SamplesController < Api::V1::BaseController
  def index
    samples = [{title: "Welcome", content: "Welcome to Est Web App"}]
    render json: samples
  end
end
