const mongoose=require('mongoose')
const courseSchema = new mongoose.Schema({
  courseId:{ type: String, unique: true, default: '' },
  courseName: { type: String, required: true },
  image: {
    type: String, // base64 string
  },
  pdf: {
    type: String, // base64 string
  },
  courseOverview: { type: String, required: true },
  duration: { type: String, required: true },
  fees: { type: String, required: true },
  whatYouLearn: { type: [String], default: [] },
  scope: {
    description: { type: String, required: true },
    jobRoles: { type: [String], default: [] },
    industries: { type: [String], default: [] },
  },
  salaryRange: {
    description: { type: String, required: true },
    fresher: { type: String, required: true },
    twoToThreeYears: { type: String, required: true },
    freelancer: { type: String, required: true },
  },
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
}, { timestamps: true });

// Define models per course name
module.exports = {
  DigitalMarketing: mongoose.model('DigitalMarketing', courseSchema),
  Net: mongoose.model('Net', courseSchema),
  Excel: mongoose.model('Excel', courseSchema),
  Java: mongoose.model('Java', courseSchema),
  MobileApplication: mongoose.model('MobileApplication', courseSchema),
  GraphicsDesigning: mongoose.model('GraphicsDesigning', courseSchema),
  PHP: mongoose.model('PHP', courseSchema),
  Python: mongoose.model('Python', courseSchema),
  Animation: mongoose.model('Animation', courseSchema),
};