// Testimonial.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  department: String,
  image: {
    data: String,         // base64 string
    contentType: String   // e.g., 'image/png'
  }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
