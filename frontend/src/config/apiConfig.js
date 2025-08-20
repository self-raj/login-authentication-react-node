// src/config/api.js

import axios from 'axios';

// 🌐 Base URL
export const baseURL = 'http://localhost:8080';

// 🔧 Axios Instance
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Course APIs
export const COURSE_BASE = `${baseURL}/api/courses`;
export const SINGLE_COURSE = (courseName, courseId) => `${baseURL}/api/course/${courseName}/${courseId}`;
export const COURSE_PDF = (courseName, courseId) => `${baseURL}/api/course/pdf/${courseName}/${courseId}`;
export const DELETE_COURSE = (courseName, id) => `${baseURL}/api/courses/${courseName}/${id}`;

// ✅ User Auth APIs
export const SIGNUP = `${baseURL}/signup`;
export const LOGIN = `${baseURL}/login`;
export const LOGOUT = `${baseURL}/logout`;
export const DASHBOARD = `${baseURL}/dashboard`;
export const FORGOT_PASSWORD = `${baseURL}/forgot-password`;
export const RESET_PASSWORD = (token) => `${baseURL}/reset-password/${token}`;

// // ✅ Contact APIs
// export const CONTACT_SAVE = `${baseURL}/api/contact`;
// export const CONTACT_FETCH = `${baseURL}/api/contact`;

// // ✅ Message/Enquiry APIs
// export const SEND_MESSAGE = `${baseURL}/api/messages`;
// export const GET_MESSAGES = `${baseURL}/api/messages`;

// // ✅ Testimonial APIs
// export const TESTIMONIAL_ADD = `${baseURL}/api/testimonials`;
// export const TESTIMONIAL_GET = `${baseURL}/api/testimonials`;
// export const TESTIMONIAL_COUNT = `${baseURL}/api/testimonials/count`;
// export const DELETE_TESTIMONIAL = (id) => `${baseURL}/api/testimonials/${id}`;

// // ✅ News APIs
// export const ADD_NEWS = `${baseURL}/api/news`;
// export const GET_NEWS = `${baseURL}/api/news`;
// export const COUNT_NEWS = `${baseURL}/api/news/count`;
// export const DELETE_NEWS = (id) => `${baseURL}/api/news/${id}`;

// // ✅ Notices APIs
// export const ADD_NOTICE = `${baseURL}/api/notices`;
// export const GET_NOTICES = `${baseURL}/api/notices`;
// export const COUNT_NOTICES = `${baseURL}/api/notices/count`;
// export const DELETE_NOTICE = (id) => `${baseURL}/api/notices/${id}`;

// // ✅ Academic Events APIs
// export const ADD_EVENT = `${baseURL}/api/events`;
// export const GET_EVENTS = `${baseURL}/api/events`;
// export const COUNT_EVENTS = `${baseURL}/api/academic-events/count`;
// export const DELETE_EVENT = (id) => `${baseURL}/api/events/${id}`;
