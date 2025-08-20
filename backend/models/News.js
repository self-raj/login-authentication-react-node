const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
  news: [String],
}, { timestamps: true });
module.exports = mongoose.model('News', NewsSchema);
