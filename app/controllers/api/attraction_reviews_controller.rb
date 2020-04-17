class Api::AttractionReviewsController < ApplicationController
    def create
        debugger
        @attraction_review = AttractionReview.new(attraction_review_params)
        debugger
        if @attraction_review.save
        else
            render json: @attraction_review.errors.full_messages, status: 422
        end
    end

    private
    def attraction_review_params
        params.require(:attraction_review).permit(:title, :body, :visit_date, :rating,
            :attraction_id, :author_id)
    end
end