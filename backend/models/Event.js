const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  events: [String],
}, { timestamps: true });
module.exports = mongoose.model('Event', EventSchema);