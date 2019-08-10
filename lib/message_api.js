'use strict'
const Message = require('../app/models/message')

const editable = (requestObject, items) => {
  return items.map(resource => {
    resource.editable = requestObject.user._id.equals(resource.owner)
    return resource
  })
}

const index = (req) => {
  return Message.find()
    .populate('owner')
    .sort({ 'createdAt': -1 })
    .then(messages => {
      messages = editable(req, messages)
      // `messages` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return messages.map(message => message.toObject())
    })
}

module.exports = {
  editable,
  index
}
