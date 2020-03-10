class Api::AttractionsController < ApplicationController
    def index
        # debugger
        if (!params[:filters])
            @attractions = Attraction.all
        else 
            @attractions = Attraction.with_attached_photos.in_bounds(params[:filters][:bounds])
        end
        render :index
    end

    def show
        # debugger
        @attraction = Attraction.with_attached_photos.includes([:reviews]).find_by(id: params[:id])
        if @attraction.nil?
            render json: ['Attraction does not exist'], status: 404 
        else
            lat = @attraction.coordinates.y
            lng = @attraction.coordinates.x
            @nearby = Attraction.with_attached_photos.radius(lng, lat, params[:id])
            render :show
        end
    end

    def create
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