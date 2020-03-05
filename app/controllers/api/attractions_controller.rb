class Api::AttractionsController < ApplicationController
    def index
        @attractions = Attraction.all
        # @benches = Bench.in_bounds(params[:bounds])
        render :index
    end

    def show
        @attraction = Attraction.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger
        @attraction = Attraction.new(attraction_params)
        if @attraction.save
        else
            render json: @attraction.errors.full_messages, status: 422
        end
    end

    private
    def attraction_params
        params.require(:attraction).permit(:about, :name, :country, :lat, :lng,
            :administrative_area, :locality, :postal_code, :thoroughfare)
    end
end