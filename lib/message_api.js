'use strict'
const Message = require('../app/models/message')

const index = () => {
  Message.find()
    .populate('owner')
    .then(messages => {
      // `messages` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return messages.map(message => message.toObject())
    })
}

module.exports = {
  index
}
