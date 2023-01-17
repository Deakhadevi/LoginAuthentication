require 'bcrypt'
class UserdetailController < ApplicationController

  skip_before_action :verify_authenticity_token
  def index
    #render json: Userdetail.all
        current_user =Userdetail.find_by_id(session[:current_user_id])
        render json: current_user
  end

  def show
    v = Userdetail.find(params[:id].to_i)
    render json: v
  end
  def create
    v = !params[:name].empty? and !params[:email].empty? and !params[:password].nil?
    if (v)
          p=Userdetail.create(
         'email': params[:email],
         'name': params[:name],
         'password': params[:password]
          )
          puts p
          render json: "Data Added"
        else
          render json: "Data not added"
     end

  end
def update
    p = Userdetail.find(params[:id].to_i)
        p.update(
          'email': params[:email],
          'name': params[:name],
          'password': params[:password]
        )

          render json: "Data Updated"
end
def destroy
    p = Userdetail.find(params[:id])
    p.destroy
    render json: "Data Deleted"
end


end
