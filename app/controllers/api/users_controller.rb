class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        debugger
        @user.display_name = @user.email
        if @user.save
            login(@user)
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :display_name, 
            :business)
    end
end
