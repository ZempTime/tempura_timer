class TimersController < ApplicationController
  before_action :set_timer, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /timers
  def index
    @timers = Timer.all
    render inertia: "Timer/Index", props: {
      timers: @timers.map do |timer|
        serialize_timer(timer)
      end
    }
  end

  # GET /timers/1
  def show
    render inertia: "Timer/Show", props: {
      timer: serialize_timer(@timer)
    }
  end

  # GET /timers/new
  def new
    @timer = Timer.new
    render inertia: "Timer/New", props: {
      timer: serialize_timer(@timer)
    }
  end

  # GET /timers/1/edit
  def edit
    render inertia: "Timer/Edit", props: {
      timer: serialize_timer(@timer)
    }
  end

  # POST /timers
  def create
    @timer = Timer.new(timer_params)

    if @timer.save
      redirect_to @timer, notice: "Timer was successfully created."
    else
      redirect_to new_timer_url, inertia: { errors: @timer.errors }
    end
  end

  # PATCH/PUT /timers/1
  def update
    if @timer.update(timer_params)
      redirect_to @timer, notice: "Timer was successfully updated."
    else
      redirect_to edit_timer_url(@timer), inertia: { errors: @timer.errors }
    end
  end

  # DELETE /timers/1
  def destroy
    @timer.destroy!
    redirect_to timers_url, notice: "Timer was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timer
      @timer = Timer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def timer_params
      params.require(:timer).permit(:name)
    end

    def serialize_timer(timer)
      timer.as_json(only: [
        :id, :name
      ])
    end
end
