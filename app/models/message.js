const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  text: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', messageSchema)
