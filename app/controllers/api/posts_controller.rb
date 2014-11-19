class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :json => @posts
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render 'show' #renders js version instead of rails version
    else
      render :json => @post.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :json => @post
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

end
