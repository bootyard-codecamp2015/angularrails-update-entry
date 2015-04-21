if @topic.valid?
  json.id @topic.id.to_s
  json.title @topic.title
  json.description @topic.description
else
  json.success false
end