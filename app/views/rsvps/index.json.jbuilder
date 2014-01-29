json.array!(@rsvps) do |rsvp|
  json.extract! rsvp, :id, :name, :email, :guest, :attending, :comment
  json.url rsvp_url(rsvp, format: :json)
end
