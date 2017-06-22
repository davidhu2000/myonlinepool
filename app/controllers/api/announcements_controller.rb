class Api::AnnouncementsController < ApplicationController
  def index
    # TODO: only get announcements within a certain time
    @announcements = Announcement.all.order(id: :desc).limit(5)
  end

  def create
    # check for admin user. 
    @announcement = Announcement.new(announcement_params)

    if @announcement.save
      render json: ["Announcement is created"]
    else 
      render json: @announcement.errors.full_messages, status: 422
    end
  end

  def announcement_params
    params.require(:announcement).permit(:title, :body)
  end
end
