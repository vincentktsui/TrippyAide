class Api::SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        if user.nil?
            render json: ['This email address is not registered'], status: 401
        else 
            @user = User.find_by_credentials(params[:user][:email],
                                            params[:user][:password])
            if @user.nil?
                render json: ['Password is incorrect'], status: 401
            else
                login(@user)
                render 'api/users/show'
            end
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: ['nothing to log out'], status: 404
        end
    end
end
