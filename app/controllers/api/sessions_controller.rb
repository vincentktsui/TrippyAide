class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email],
                                        params[:user][:password])
        if @user.nil?
            render json: ['invalid credentials'], status: 401
        else
            login(@user)

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
