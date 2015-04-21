class API::Public::TopicsController < ApplicationController
  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.where({ id: params[:id] }).first
  end
end