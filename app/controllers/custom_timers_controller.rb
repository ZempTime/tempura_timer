class CustomTimersController < ApplicationController
  def index
    render inertia: "CustomTimer/Index"
  end
end
