# Coaching Institute Dashboard - Project Planning

## Overview

Build a production-ready coaching institute management web application using React (Vite) + Material UI on the frontend and Netlify Functions on the backend. Use MongoDB Atlas for data storage and JWT-based admin authentication.

This architecture is designed to remain fully serverless on Netlify, keeping costs low while being scalable for thousands of enquiries and future expansion.

## Key Architecture Decision

Use bcryptjs instead of bcrypt native for password hashing.

Why:
- bcryptjs is pure JavaScript
- It works reliably inside Netlify Functions
- It avoids native compilation issues

## Tech Stack

### Frontend
- React 19
- Vite
- Material UI (MUI)
- React Router
- Axios
- React Hook Form
- Yup or Zod validation
- MUI Icons
- Framer Motion
- TanStack Query
- Notistack

### Backend
- Netlify Functions
- Node.js
- MongoDB Atlas
- JWT authentication
- bcryptjs password hashing

### Environment Variables

```env
MONGODB_USERNAME=
MONGODB_PASSWORD=
MONGODB_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
NETLIFY=true
```

## Deployment Flow

GitHub Repository

↓

Every commit to main

↓

GitHub Actions

↓

Build and test

↓

Deploy to Netlify

↓

Netlify Functions deployed automatically

## GitHub Actions Workflow

- Push to main
- Install dependencies
- Run lint
- Run tests
- Run build
- Deploy to Netlify using Netlify CLI

Required secrets:
- NETLIFY_AUTH_TOKEN
- NETLIFY_SITE_ID

## Recommended Folder Structure

```text
project/
  src/
    components/
    layouts/
    pages/
      public/
      admin/
      auth/
    hooks/
    services/
    utils/
    theme/
    routes/
  netlify/
    functions/
      login.js
      verifyToken.js
      createStudent.js
      updateStudent.js
      deleteStudent.js
      getStudents.js
      getDashboard.js
      uploadImage.js
      db/
        mongo.js
  .github/
    workflows/
      deploy.yml
  public/
```

## Website Sections

### Public Website

Header:
- Logo
- Home
- Courses
- About
- Faculty
- Testimonials
- Gallery
- Contact
- Login

Features:
- Sticky navigation
- Responsive mobile drawer

### Homepage

Hero carousel with slides for:
- Admission Open
- Top Results
- Scholarship
- New Batch

Buttons:
- Enquire Now
- Apply

### Why Choose Us

Cards for:
- Experienced Teachers
- Smart Classes
- Weekly Tests
- Affordable Fees
- Personal Guidance
- Doubt Sessions

### Courses

Course cards containing:
- Image
- Duration
- Fees
- Description
- Apply button

Example course categories:
- Class 8
- Class 9
- Class 10
- NEET
- JEE
- CUET
- Foundation

### Results Section

Showcase previous toppers with:
- Image
- Name
- Percentage
- Rank

### Testimonials

Carousel-based testimonial section

### Gallery

Responsive image grid

### Contact Section

Include:
- Google Map
- Address
- Phone
- Email

### Footer

Include:
- Quick links
- Social links
- Copyright

## Student Admission Form

This form should save directly into MongoDB.

### Suggested StudentLead Schema

```text
StudentLead
- _id
- firstName
- lastName
- gender
- dob
- fatherName
- motherName
- studentMobile
- parentMobile
- email
- address
- city
- state
- pincode
- schoolName
- currentClass
- board
- courseInterested
- preferredBatch
- howDidYouHear
- previousPercentage
- remarks
- status
- createdAt
- updatedAt
```

### Status Values
- New
- Called
- Interested
- Admission Done
- Rejected

### Required Validation
- Student name
- Parent mobile
- Class
- Course
- City
- Mobile
- Consent checkbox

## Admin Dashboard

Authentication required via JWT-protected routes.

Only admin users can log in.

### Dashboard Cards
- Today’s Leads
- Admissions
- Pending Followups
- Total Students
- Revenue
- Courses

### Charts
- Admissions per month
- Course popularity
- Lead sources

## Student Management

Table columns:
- Name
- Phone
- Class
- Course
- Status
- Created Date
- Actions

Features:
- Search
- Filter
- Sort
- Pagination
- CSV export

## Lead Details

Include:
- Full lead information
- Notes
- Timeline
- Status update
- Call button
- WhatsApp button

## Course Management

Admin can:
- Create course
- Update course
- Delete course
- Upload images

## Gallery Management

Admin can:
- Upload images
- Delete images
- Categorize images

## Homepage Management

Admin should be able to edit:
- Carousel
- Testimonials
- Results
- Faculty
- Announcements

Without changing code.

## Announcement Management

Support latest notifications such as:
- Admission Open
- Holiday
- Exam Schedule

## Admin Users

Future-ready role-based access:
- Super Admin
- Admin
- Counsellor

## Authentication

### Login
- Email
- Password

Password hashing:
- bcryptjs

Token handling:
- JWT
- Store in HttpOnly cookie or secure local storage

Protected routes:
- Verify token
- Allow access when valid
- Redirect to login otherwise

## MongoDB Collections

- admins
- students
- courses
- gallery
- carousel
- testimonials
- announcements
- settings
- results
- faculty

## Netlify Functions

Suggested functions:
- login
- logout
- verifyToken
- getDashboard
- getStudents
- createStudent
- updateStudent
- deleteStudent
- getCourses
- createCourse
- updateCourse
- deleteCourse
- getGallery
- uploadGallery
- deleteGallery
- getCarousel
- updateCarousel
- getTestimonials
- updateTestimonials

## API Structure

```text
/.netlify/functions/login          POST
/.netlify/functions/createStudent  POST
/.netlify/functions/getStudents    GET
/.netlify/functions/updateStudent  PUT
/.netlify/functions/deleteStudent  DELETE
```

## UI Theme

- Modern
- White and blue palette
- Minimal design
- Rounded corners
- Glass effect styling
- Dark mode readiness
- Material UI design system

## Responsive Design

Mobile-first design with breakpoints:
- xs
- sm
- md
- lg
- xl

The UI should work seamlessly on:
- Mobile
- Tablet
- Laptop
- Desktop

## Performance

- Lazy loading
- Route splitting
- Image optimization
- Code splitting
- Suspense
- Memoization

## Security

- Helmet headers
- Rate limiting
- JWT expiry
- MongoDB injection protection
- XSS protection
- Environment variable handling
- Input validation

## SEO

- Dynamic meta tags
- Open Graph
- Twitter Cards
- Sitemap
- Robots.txt
- Schema.org
- Canonical URLs

## Extra Features

- Student enquiry tracking
- WhatsApp click tracking
- Google Analytics
- Meta Pixel readiness
- Email notifications
- SMS readiness
- Admission PDF download
- Printable student profile
- CSV export
- Search everywhere
- Audit logs

## Future Features

- Online fee payment
- Attendance
- Student login
- Teacher dashboard
- Assignments
- Online tests
- Certificates
- Notice board
- ID card generation
- QR code student ID

## Suggested AI Prompt

Build a production-ready coaching institute management web application using React (Vite) + Material UI on the frontend and Netlify Functions as the backend. Use MongoDB Atlas with the environment variables MONGODB_USERNAME, MONGODB_PASSWORD, and MONGODB_URI. Implement JWT authentication for admin users only, using bcryptjs (never native bcrypt) for password hashing. Create a fully responsive, mobile-first design with equal priority for desktop. Include a public website featuring a sticky header, hero carousel, courses section, about section, testimonials, gallery, contact section, and an admission enquiry form that stores validated data in MongoDB. Create a secure admin dashboard with analytics, lead management, course management, homepage content management, gallery management, announcements, and role-based access (Super Admin, Admin, Counsellor). Build all CRUD operations as Netlify Functions under netlify/functions. Configure GitHub Actions to automatically build, lint, test, and deploy every push to the main branch to Netlify using NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID secrets. Use React Router, TanStack Query, Axios, React Hook Form, Zod (or Yup), Framer Motion, and Notistack. Follow clean architecture, reusable components, TypeScript support (preferred), proper error handling, optimistic UI updates where appropriate, loading skeletons, accessibility best practices, SEO optimization, and production-quality code with comments and documentation.

## Google Form Integration

Use the existing admission form as the source of truth for the required fields and validation.

Google Form:
https://docs.google.com/forms/d/1niXEtPKgUopz0Ne-XbtA33Vdeo3iXWdclW6SsyVsS9Q/edit

The implementation should inspect the form fields and ensure that the MongoDB schema, frontend validation, and admin lead management align with the information currently collected.
