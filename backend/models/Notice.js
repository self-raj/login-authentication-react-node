const mongoose = require('mongoose');
const NoticeSchema = new mongoose.Schema({
  notices: [String],
}, { timestamps: true });
module.exports = mongoose.model('Notice', NoticeSchema);