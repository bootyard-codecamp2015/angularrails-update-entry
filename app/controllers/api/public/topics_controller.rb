class API::Public::TopicsController < ApplicationController
	skip_before_filter  :verify_authenticity_token
  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.where({ id: params[:id] }).first
  end

  def update
  	@topic = Topic.where({ id: params[:id] }).first
    @update = @topic.update_attributes(topics_params)
  end

  private
    def topics_params
      params.require(:topic).permit(:title, :description)   
    end
end