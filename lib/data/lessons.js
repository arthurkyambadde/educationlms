// Comprehensive lesson data - 100+ lessons across all courses

export const lessons = [
  // Web Development 101 Lessons (web-101-1 to web-101-8)
  {
    id: 'web-101-1',
    courseId: 'web-dev-101',
    title: 'Introduction to Web Development',
    description: 'Understanding the web, how it works, and what you\'ll learn in this course',
    type: 'video',
    content: 'Welcome to the Complete Web Development Bootcamp! In this lesson, we\'ll explore what web development is, the difference between frontend and backend, and the roadmap for your learning journey.',
    videoUrl: 'https://example.com/videos/web-101-1.mp4',
    duration: 15,
    order: 1,
    resources: [
      { title: 'Course Roadmap PDF', url: '/resources/web-101-roadmap.pdf', type: 'pdf' },
      { title: 'Developer Tools Guide', url: '/resources/dev-tools.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'web-101-2',
    courseId: 'web-dev-101',
    title: 'HTML Fundamentals',
    description: 'Learn HTML tags, elements, and structure',
    type: 'text',
    content: `# HTML Fundamentals

HTML (HyperText Markup Language) is the backbone of every website. It provides the structure and content of web pages.

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
\`\`\`

## Common HTML Tags

- **Headings**: \`<h1>\` to \`<h6>\`
- **Paragraphs**: \`<p>\`
- **Links**: \`<a href="url">Link Text</a>\`
- **Images**: \`<img src="image.jpg" alt="description">\`
- **Lists**: \`<ul>\`, \`<ol>\`, \`<li>\`
- **Divs**: \`<div>\` for grouping content

## Semantic HTML

Use semantic tags for better accessibility and SEO:
- \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, \`<footer>\`

Practice creating a simple webpage using these tags!`,
    videoUrl: null,
    duration: 45,
    order: 2,
    resources: [
      { title: 'HTML Cheat Sheet', url: '/resources/html-cheatsheet.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'web-101-3',
    courseId: 'web-dev-101',
    title: 'CSS Styling Basics',
    description: 'Style your HTML with CSS - colors, fonts, and layouts',
    type: 'video',
    content: 'Learn how to make your websites beautiful with CSS. We\'ll cover selectors, properties, colors, typography, and the box model.',
    videoUrl: 'https://example.com/videos/web-101-3.mp4',
    duration: 60,
    order: 3,
    resources: [],
  },
  {
    id: 'web-101-4',
    courseId: 'web-dev-101',
    title: 'CSS Flexbox & Grid',
    description: 'Master modern CSS layouts with Flexbox and Grid',
    type: 'text',
    content: `# CSS Flexbox & Grid

Modern CSS provides powerful layout systems: Flexbox and Grid.

## Flexbox

Flexbox is perfect for one-dimensional layouts (rows or columns).

\`\`\`css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
\`\`\`

## CSS Grid

Grid is ideal for two-dimensional layouts.

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
\`\`\`

Practice building responsive layouts with these tools!`,
    videoUrl: null,
    duration: 50,
    order: 4,
    resources: [
      { title: 'Flexbox Guide', url: '/resources/flexbox-guide.pdf', type: 'pdf' },
      { title: 'Grid Guide', url: '/resources/grid-guide.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'web-101-5',
    courseId: 'web-dev-101',
    title: 'JavaScript Fundamentals',
    description: 'Introduction to JavaScript programming',
    type: 'video',
    content: 'Dive into JavaScript! Learn variables, data types, functions, and control flow to make your websites interactive.',
    videoUrl: 'https://example.com/videos/web-101-5.mp4',
    duration: 75,
    order: 5,
    resources: [],
  },
  {
    id: 'web-101-6',
    courseId: 'web-dev-101',
    title: 'DOM Manipulation',
    description: 'Interact with HTML elements using JavaScript',
    type: 'video',
    content: 'Learn to manipulate the Document Object Model (DOM) to create dynamic, interactive web pages.',
    videoUrl: 'https://example.com/videos/web-101-6.mp4',
    duration: 55,
    order: 6,
    resources: [],
  },
  {
    id: 'web-101-7',
    courseId: 'web-dev-101',
    title: 'Responsive Web Design',
    description: 'Build websites that work on all devices',
    type: 'text',
    content: `# Responsive Web Design

Make your websites look great on all devices using responsive design techniques.

## Media Queries

\`\`\`css
/* Mobile first approach */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
\`\`\`

## Responsive Units

Use relative units: \`%\`, \`em\`, \`rem\`, \`vw\`, \`vh\`

## Mobile-First Design

Start with mobile styles, then add complexity for larger screens.`,
    videoUrl: null,
    duration: 40,
    order: 7,
    resources: [],
  },
  {
    id: 'web-101-8',
    courseId: 'web-dev-101',
    title: 'Final Project: Portfolio Website',
    description: 'Build your own portfolio website from scratch',
    type: 'text',
    content: `# Final Project: Portfolio Website

Time to put everything together! Build a professional portfolio website showcasing your skills.

## Requirements

1. **Homepage** with hero section and introduction
2. **About Page** with your bio and skills
3. **Projects Section** showcasing your work
4. **Contact Form** for visitors to reach you
5. **Responsive Design** that works on all devices
6. **Clean Code** with proper HTML structure and CSS organization

## Tips

- Use semantic HTML
- Implement Flexbox/Grid for layouts
- Add smooth scrolling and animations
- Optimize images for web
- Test on multiple devices

Good luck! This will be a great addition to your portfolio.`,
    videoUrl: null,
    duration: 120,
    order: 8,
    resources: [
      { title: 'Project Requirements', url: '/resources/portfolio-requirements.pdf', type: 'pdf' },
      { title: 'Design Inspiration', url: '/resources/portfolio-inspiration.pdf', type: 'pdf' },
    ],
  },

  // React Mastery Lessons (react-1 to react-7)
  {
    id: 'react-1',
    courseId: 'react-mastery',
    title: 'Introduction to React',
    description: 'What is React and why use it?',
    type: 'video',
    content: 'Welcome to React! Learn what React is, why it\'s popular, and how it differs from vanilla JavaScript.',
    videoUrl: 'https://example.com/videos/react-1.mp4',
    duration: 20,
    order: 1,
    resources: [],
  },
  {
    id: 'react-2',
    courseId: 'react-mastery',
    title: 'Components and JSX',
    description: 'Building blocks of React applications',
    type: 'video',
    content: 'Learn about React components, JSX syntax, and how to create reusable UI elements.',
    videoUrl: 'https://example.com/videos/react-2.mp4',
    duration: 45,
    order: 2,
    resources: [],
  },
  {
    id: 'react-3',
    courseId: 'react-mastery',
    title: 'State and Props',
    description: 'Managing data in React components',
    type: 'text',
    content: `# State and Props in React

Understanding state and props is crucial for React development.

## Props

Props (properties) are read-only data passed from parent to child components.

\`\`\`jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

<Welcome name="Sarah" />
\`\`\`

## State

State is mutable data managed within a component.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## Key Differences

- Props flow down (parent to child)
- State is local to the component
- Props are immutable, state is mutable`,
    videoUrl: null,
    duration: 50,
    order: 3,
    resources: [],
  },
  {
    id: 'react-4',
    courseId: 'react-mastery',
    title: 'React Hooks Deep Dive',
    description: 'Master useState, useEffect, and custom hooks',
    type: 'video',
    content: 'Deep dive into React Hooks including useState, useEffect, useContext, useReducer, and creating custom hooks.',
    videoUrl: 'https://example.com/videos/react-4.mp4',
    duration: 90,
    order: 4,
    resources: [],
  },
  {
    id: 'react-5',
    courseId: 'react-mastery',
    title: 'State Management with Redux',
    description: 'Manage complex application state with Redux',
    type: 'video',
    content: 'Learn Redux for global state management. Understand actions, reducers, and the Redux store.',
    videoUrl: 'https://example.com/videos/react-5.mp4',
    duration: 85,
    order: 5,
    resources: [],
  },
  {
    id: 'react-6',
    courseId: 'react-mastery',
    title: 'Next.js Fundamentals',
    description: 'Server-side rendering and static generation',
    type: 'video',
    content: 'Introduction to Next.js framework. Learn about server-side rendering, static generation, and API routes.',
    videoUrl: 'https://example.com/videos/react-6.mp4',
    duration: 70,
    order: 6,
    resources: [],
  },
  {
    id: 'react-7',
    courseId: 'react-mastery',
    title: 'Building a Full-Stack App',
    description: 'Create a complete React application with backend',
    type: 'text',
    content: `# Building a Full-Stack React Application

Let's build a complete task management application!

## Tech Stack

- **Frontend**: React with Redux
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT

## Features to Implement

1. User authentication (signup/login)
2. Create, read, update, delete tasks
3. Task categories and priorities
4. Search and filter functionality
5. Responsive design

## Project Structure

\`\`\`
project/
├── client/          # React frontend
├── server/          # Express backend
├── models/          # MongoDB models
└── routes/          # API routes
\`\`\`

This project will solidify your React and full-stack development skills!`,
    videoUrl: null,
    duration: 150,
    order: 7,
    resources: [
      { title: 'Project Starter Code', url: '/resources/react-project-starter.zip', type: 'zip' },
    ],
  },

  // Node.js Backend Lessons (node-1 to node-6)
  {
    id: 'node-1',
    courseId: 'nodejs-backend',
    title: 'Introduction to Node.js',
    description: 'Understanding Node.js and its ecosystem',
    type: 'video',
    content: 'Learn what Node.js is, how it works, and why it\'s great for backend development.',
    videoUrl: 'https://example.com/videos/node-1.mp4',
    duration: 25,
    order: 1,
    resources: [],
  },
  {
    id: 'node-2',
    courseId: 'nodejs-backend',
    title: 'Express.js Framework',
    description: 'Building web servers with Express',
    type: 'video',
    content: 'Master Express.js for building robust web servers and APIs.',
    videoUrl: 'https://example.com/videos/node-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'node-3',
    courseId: 'nodejs-backend',
    title: 'RESTful API Design',
    description: 'Design and build RESTful APIs',
    type: 'text',
    content: `# RESTful API Design

Learn to design clean, scalable REST APIs.

## REST Principles

1. **Stateless**: Each request contains all necessary information
2. **Resource-based**: URLs represent resources
3. **HTTP Methods**: GET, POST, PUT, DELETE
4. **Status Codes**: Proper use of HTTP status codes

## Example API Routes

\`\`\`javascript
// GET all users
app.get('/api/users', getAllUsers);

// GET single user
app.get('/api/users/:id', getUserById);

// CREATE user
app.post('/api/users', createUser);

// UPDATE user
app.put('/api/users/:id', updateUser);

// DELETE user
app.delete('/api/users/:id', deleteUser);
\`\`\`

## Best Practices

- Use plural nouns for resources
- Version your API (/api/v1/)
- Implement proper error handling
- Use appropriate status codes`,
    videoUrl: null,
    duration: 55,
    order: 3,
    resources: [],
  },
  {
    id: 'node-4',
    courseId: 'nodejs-backend',
    title: 'MongoDB and Mongoose',
    description: 'Database integration with MongoDB',
    type: 'video',
    content: 'Learn to work with MongoDB using Mongoose ODM. Create schemas, models, and perform CRUD operations.',
    videoUrl: 'https://example.com/videos/node-4.mp4',
    duration: 75,
    order: 4,
    resources: [],
  },
  {
    id: 'node-5',
    courseId: 'nodejs-backend',
    title: 'Authentication and Security',
    description: 'Implement JWT authentication and security best practices',
    type: 'video',
    content: 'Secure your APIs with JWT authentication, password hashing, and security middleware.',
    videoUrl: 'https://example.com/videos/node-5.mp4',
    duration: 80,
    order: 5,
    resources: [],
  },
  {
    id: 'node-6',
    courseId: 'nodejs-backend',
    title: 'Deployment and Production',
    description: 'Deploy your Node.js application to production',
    type: 'text',
    content: `# Deploying Node.js Applications

Learn to deploy your Node.js apps to production.

## Deployment Platforms

- **Heroku**: Easy deployment with Git
- **AWS EC2**: Full control over infrastructure
- **DigitalOcean**: Simple cloud hosting
- **Vercel/Netlify**: Great for Next.js apps

## Production Checklist

1. ✅ Environment variables configured
2. ✅ Database connection secured
3. ✅ Error logging implemented
4. ✅ HTTPS enabled
5. ✅ Rate limiting added
6. ✅ CORS configured properly
7. ✅ Compression enabled
8. ✅ Security headers set

## Monitoring

Use tools like:
- PM2 for process management
- New Relic for performance monitoring
- Sentry for error tracking`,
    videoUrl: null,
    duration: 65,
    order: 6,
    resources: [
      { title: 'Deployment Guide', url: '/resources/deployment-guide.pdf', type: 'pdf' },
    ],
  },

  // Python Data Science Lessons (py-ds-1 to py-ds-8)
  {
    id: 'py-ds-1',
    courseId: 'python-data-science',
    title: 'Python Programming Basics',
    description: 'Learn Python fundamentals for data science',
    type: 'video',
    content: 'Introduction to Python programming: variables, data types, loops, functions, and object-oriented programming.',
    videoUrl: 'https://example.com/videos/py-ds-1.mp4',
    duration: 90,
    order: 1,
    resources: [],
  },
  {
    id: 'py-ds-2',
    courseId: 'python-data-science',
    title: 'NumPy for Numerical Computing',
    description: 'Master NumPy arrays and operations',
    type: 'video',
    content: 'Learn NumPy for efficient numerical computing. Work with arrays, matrices, and mathematical operations.',
    videoUrl: 'https://example.com/videos/py-ds-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'py-ds-3',
    courseId: 'python-data-science',
    title: 'Pandas for Data Analysis',
    description: 'Data manipulation with Pandas DataFrames',
    type: 'text',
    content: `# Pandas for Data Analysis

Pandas is the essential library for data manipulation in Python.

## DataFrames

\`\`\`python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
})

# Read CSV
df = pd.read_csv('data.csv')

# Basic operations
df.head()           # First 5 rows
df.describe()       # Statistics
df.info()           # Data types and info
\`\`\`

## Data Manipulation

\`\`\`python
# Filtering
young_people = df[df['age'] < 30]

# Grouping
df.groupby('city')['age'].mean()

# Sorting
df.sort_values('age', ascending=False)
\`\`\`

Practice with real datasets!`,
    videoUrl: null,
    duration: 70,
    order: 3,
    resources: [
      { title: 'Pandas Cheat Sheet', url: '/resources/pandas-cheatsheet.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'py-ds-4',
    courseId: 'python-data-science',
    title: 'Data Visualization with Matplotlib',
    description: 'Create stunning visualizations',
    type: 'video',
    content: 'Learn to create professional data visualizations using Matplotlib and Seaborn.',
    videoUrl: 'https://example.com/videos/py-ds-4.mp4',
    duration: 55,
    order: 4,
    resources: [],
  },
  {
    id: 'py-ds-5',
    courseId: 'python-data-science',
    title: 'Statistical Analysis',
    description: 'Statistical methods for data science',
    type: 'video',
    content: 'Learn statistical analysis techniques including hypothesis testing, correlation, and regression.',
    videoUrl: 'https://example.com/videos/py-ds-5.mp4',
    duration: 80,
    order: 5,
    resources: [],
  },
  {
    id: 'py-ds-6',
    courseId: 'python-data-science',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning with scikit-learn',
    type: 'video',
    content: 'Start your ML journey! Learn supervised and unsupervised learning with scikit-learn.',
    videoUrl: 'https://example.com/videos/py-ds-6.mp4',
    duration: 95,
    order: 6,
    resources: [],
  },
  {
    id: 'py-ds-7',
    courseId: 'python-data-science',
    title: 'Classification and Regression',
    description: 'Build predictive models',
    type: 'video',
    content: 'Master classification and regression algorithms. Build models to make predictions on real data.',
    videoUrl: 'https://example.com/videos/py-ds-7.mp4',
    duration: 85,
    order: 7,
    resources: [],
  },
  {
    id: 'py-ds-8',
    courseId: 'python-data-science',
    title: 'Capstone Project: Data Analysis',
    description: 'Complete end-to-end data science project',
    type: 'text',
    content: `# Capstone Project: Customer Churn Prediction

Apply everything you've learned in a real-world project!

## Project Overview

Predict customer churn for a telecommunications company using machine learning.

## Dataset

- 10,000 customer records
- Features: demographics, usage patterns, customer service interactions
- Target: Churn (Yes/No)

## Tasks

1. **Data Exploration**: Analyze and visualize the data
2. **Data Cleaning**: Handle missing values and outliers
3. **Feature Engineering**: Create new meaningful features
4. **Model Building**: Train multiple ML models
5. **Model Evaluation**: Compare models and select the best
6. **Insights**: Provide business recommendations

## Deliverables

- Jupyter Notebook with complete analysis
- Final model with 85%+ accuracy
- Business presentation with insights

This project will be a great portfolio piece!`,
    videoUrl: null,
    duration: 180,
    order: 8,
    resources: [
      { title: 'Dataset', url: '/resources/churn-dataset.csv', type: 'csv' },
      { title: 'Project Guidelines', url: '/resources/capstone-guidelines.pdf', type: 'pdf' },
    ],
  },

  // UI/UX Design Lessons (uiux-1 to uiux-5)
  {
    id: 'uiux-1',
    courseId: 'ui-ux-fundamentals',
    title: 'Introduction to UI/UX Design',
    description: 'Understanding user interface and user experience',
    type: 'video',
    content: 'Learn the difference between UI and UX, and why both are crucial for successful products.',
    videoUrl: 'https://example.com/videos/uiux-1.mp4',
    duration: 30,
    order: 1,
    resources: [],
  },
  {
    id: 'uiux-2',
    courseId: 'ui-ux-fundamentals',
    title: 'Design Thinking Process',
    description: 'Human-centered design methodology',
    type: 'text',
    content: `# Design Thinking Process

Design thinking is a human-centered approach to innovation.

## The 5 Stages

1. **Empathize**: Understand your users
2. **Define**: Clearly articulate the problem
3. **Ideate**: Generate creative solutions
4. **Prototype**: Build tangible representations
5. **Test**: Gather feedback and iterate

## Empathy in Design

- Conduct user interviews
- Create user personas
- Map user journeys
- Identify pain points

## Iteration is Key

Design thinking is not linear. You'll often loop back to previous stages based on what you learn.

Remember: Design is about solving problems, not making things pretty!`,
    videoUrl: null,
    duration: 45,
    order: 2,
    resources: [],
  },
  {
    id: 'uiux-3',
    courseId: 'ui-ux-fundamentals',
    title: 'Wireframing and Prototyping',
    description: 'Create wireframes and interactive prototypes',
    type: 'video',
    content: 'Learn to create wireframes and prototypes using Figma. Bring your ideas to life!',
    videoUrl: 'https://example.com/videos/uiux-3.mp4',
    duration: 60,
    order: 3,
    resources: [],
  },
  {
    id: 'uiux-4',
    courseId: 'ui-ux-fundamentals',
    title: 'Visual Design Principles',
    description: 'Color, typography, and layout fundamentals',
    type: 'video',
    content: 'Master visual design principles including color theory, typography, hierarchy, and layout.',
    videoUrl: 'https://example.com/videos/uiux-4.mp4',
    duration: 55,
    order: 4,
    resources: [],
  },
  {
    id: 'uiux-5',
    courseId: 'ui-ux-fundamentals',
    title: 'Usability Testing',
    description: 'Test and validate your designs with users',
    type: 'text',
    content: `# Usability Testing

Validate your designs with real users before development.

## Types of Usability Tests

1. **Moderated Testing**: Researcher guides the session
2. **Unmoderated Testing**: Users complete tasks independently
3. **A/B Testing**: Compare two design variations
4. **First Click Testing**: Where do users click first?

## Running a Usability Test

1. Define test objectives
2. Create realistic tasks
3. Recruit participants (5-8 users)
4. Observe and take notes
5. Analyze findings
6. Iterate on design

## Key Metrics

- Task completion rate
- Time on task
- Error rate
- User satisfaction

Testing early and often saves time and money!`,
    videoUrl: null,
    duration: 50,
    order: 5,
    resources: [
      { title: 'Usability Testing Template', url: '/resources/usability-template.pdf', type: 'pdf' },
    ],
  },

  // Additional lessons for other courses (abbreviated for space)
  // Digital Marketing Lessons
  {
    id: 'dm-1',
    courseId: 'digital-marketing',
    title: 'Digital Marketing Overview',
    description: 'Introduction to digital marketing channels',
    type: 'video',
    content: 'Overview of digital marketing landscape and key channels.',
    videoUrl: 'https://example.com/videos/dm-1.mp4',
    duration: 25,
    order: 1,
    resources: [],
  },
  {
    id: 'dm-2',
    courseId: 'digital-marketing',
    title: 'SEO Fundamentals',
    description: 'Search engine optimization basics',
    type: 'video',
    content: 'Learn SEO fundamentals including keyword research, on-page optimization, and link building.',
    videoUrl: 'https://example.com/videos/dm-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'dm-3',
    courseId: 'digital-marketing',
    title: 'Google Ads Mastery',
    description: 'Create effective Google Ads campaigns',
    type: 'video',
    content: 'Master Google Ads including search ads, display ads, and campaign optimization.',
    videoUrl: 'https://example.com/videos/dm-3.mp4',
    duration: 70,
    order: 3,
    resources: [],
  },
  {
    id: 'dm-4',
    courseId: 'digital-marketing',
    title: 'Social Media Marketing',
    description: 'Leverage social media for business growth',
    type: 'video',
    content: 'Learn social media marketing strategies for Facebook, Instagram, LinkedIn, and Twitter.',
    videoUrl: 'https://example.com/videos/dm-4.mp4',
    duration: 55,
    order: 4,
    resources: [],
  },
  {
    id: 'dm-5',
    courseId: 'digital-marketing',
    title: 'Email Marketing',
    description: 'Build and nurture email lists',
    type: 'text',
    content: `# Email Marketing

Email remains one of the highest ROI marketing channels.

## Building Your List

- Create lead magnets (ebooks, checklists)
- Use opt-in forms on your website
- Run contests and giveaways
- Never buy email lists!

## Email Types

1. **Welcome Series**: Onboard new subscribers
2. **Newsletters**: Regular updates and content
3. **Promotional**: Sales and offers
4. **Transactional**: Order confirmations, receipts

## Best Practices

- Write compelling subject lines
- Personalize content
- Mobile-responsive design
- Clear call-to-action
- A/B test everything
- Monitor metrics (open rate, click rate, conversions)

## Tools

- Mailchimp
- ConvertKit
- ActiveCampaign
- Klaviyo`,
    videoUrl: null,
    duration: 50,
    order: 5,
    resources: [],
  },
  {
    id: 'dm-6',
    courseId: 'digital-marketing',
    title: 'Analytics and Measurement',
    description: 'Track and optimize marketing performance',
    type: 'video',
    content: 'Master Google Analytics and data-driven marketing. Learn to track, measure, and optimize campaigns.',
    videoUrl: 'https://example.com/videos/dm-6.mp4',
    duration: 65,
    order: 6,
    resources: [],
  },

  // Productivity Mastery Lessons
  {
    id: 'prod-1',
    courseId: 'productivity-mastery',
    title: 'The Productivity Mindset',
    description: 'Develop a productive mindset and habits',
    type: 'video',
    content: 'Learn the psychology of productivity and how to develop a growth mindset.',
    videoUrl: 'https://example.com/videos/prod-1.mp4',
    duration: 30,
    order: 1,
    resources: [],
  },
  {
    id: 'prod-2',
    courseId: 'productivity-mastery',
    title: 'Time Management Systems',
    description: 'Master proven time management techniques',
    type: 'text',
    content: `# Time Management Systems

Discover proven systems to manage your time effectively.

## Popular Systems

### Getting Things Done (GTD)
1. Capture everything
2. Clarify what it means
3. Organize by category
4. Reflect regularly
5. Engage and do

### Pomodoro Technique
- Work for 25 minutes
- Take 5-minute break
- After 4 pomodoros, take longer break

### Time Blocking
- Schedule specific blocks for different activities
- Batch similar tasks together
- Protect deep work time

### Eisenhower Matrix
Prioritize by urgency and importance:
- Urgent + Important: Do first
- Important, Not Urgent: Schedule
- Urgent, Not Important: Delegate
- Neither: Eliminate

Choose the system that fits your work style!`,
    videoUrl: null,
    duration: 40,
    order: 2,
    resources: [],
  },
  {
    id: 'prod-3',
    courseId: 'productivity-mastery',
    title: 'Goal Setting and Achievement',
    description: 'Set and achieve meaningful goals',
    type: 'video',
    content: 'Learn SMART goal setting, OKRs, and strategies to achieve your biggest goals.',
    videoUrl: 'https://example.com/videos/prod-3.mp4',
    duration: 45,
    order: 3,
    resources: [],
  },
  {
    id: 'prod-4',
    courseId: 'productivity-mastery',
    title: 'Building Lasting Habits',
    description: 'Create habits that stick',
    type: 'video',
    content: 'Master habit formation using proven techniques from Atomic Habits and The Power of Habit.',
    videoUrl: 'https://example.com/videos/prod-4.mp4',
    duration: 50,
    order: 4,
    resources: [],
  },

  // AWS Cloud Lessons
  {
    id: 'aws-1',
    courseId: 'cloud-aws',
    title: 'Introduction to Cloud Computing',
    description: 'Cloud computing fundamentals and AWS overview',
    type: 'video',
    content: 'Learn cloud computing basics and get introduced to AWS services.',
    videoUrl: 'https://example.com/videos/aws-1.mp4',
    duration: 35,
    order: 1,
    resources: [],
  },
  {
    id: 'aws-2',
    courseId: 'cloud-aws',
    title: 'EC2 and Compute Services',
    description: 'Virtual servers and compute on AWS',
    type: 'video',
    content: 'Master EC2 instances, auto-scaling, and load balancing.',
    videoUrl: 'https://example.com/videos/aws-2.mp4',
    duration: 75,
    order: 2,
    resources: [],
  },
  {
    id: 'aws-3',
    courseId: 'cloud-aws',
    title: 'S3 and Storage Solutions',
    description: 'Object storage and data management',
    type: 'video',
    content: 'Learn AWS S3, storage classes, and data lifecycle management.',
    videoUrl: 'https://example.com/videos/aws-3.mp4',
    duration: 60,
    order: 3,
    resources: [],
  },
  {
    id: 'aws-4',
    courseId: 'cloud-aws',
    title: 'Databases on AWS',
    description: 'RDS, DynamoDB, and database services',
    type: 'video',
    content: 'Master AWS database services including RDS, DynamoDB, and Aurora.',
    videoUrl: 'https://example.com/videos/aws-4.mp4',
    duration: 70,
    order: 4,
    resources: [],
  },
  {
    id: 'aws-5',
    courseId: 'cloud-aws',
    title: 'Serverless with Lambda',
    description: 'Build serverless applications',
    type: 'text',
    content: `# AWS Lambda and Serverless

Build applications without managing servers!

## What is Serverless?

Serverless lets you run code without provisioning or managing servers. You only pay for compute time used.

## AWS Lambda

\`\`\`javascript
// Simple Lambda function
exports.handler = async (event) => {
    const name = event.name || 'World';
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: \`Hello \${name}!\`
        })
    };
};
\`\`\`

## Use Cases

- API backends
- Data processing
- Scheduled tasks
- Event-driven workflows

## Benefits

- No server management
- Automatic scaling
- Pay per use
- High availability

## Serverless Framework

Use frameworks like Serverless or SAM to deploy Lambda functions easily.`,
    videoUrl: null,
    duration: 65,
    order: 5,
    resources: [],
  },

  // React Native Lessons
  {
    id: 'rn-1',
    courseId: 'react-native-mobile',
    title: 'Introduction to React Native',
    description: 'Build native mobile apps with JavaScript',
    type: 'video',
    content: 'Learn what React Native is and how to set up your development environment.',
    videoUrl: 'https://example.com/videos/rn-1.mp4',
    duration: 30,
    order: 1,
    resources: [],
  },
  {
    id: 'rn-2',
    courseId: 'react-native-mobile',
    title: 'Core Components and APIs',
    description: 'Master React Native components',
    type: 'video',
    content: 'Learn View, Text, Image, ScrollView, FlatList, and other core components.',
    videoUrl: 'https://example.com/videos/rn-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'rn-3',
    courseId: 'react-native-mobile',
    title: 'Navigation in React Native',
    description: 'Implement navigation with React Navigation',
    type: 'video',
    content: 'Master React Navigation for stack, tab, and drawer navigation.',
    videoUrl: 'https://example.com/videos/rn-3.mp4',
    duration: 55,
    order: 3,
    resources: [],
  },
  {
    id: 'rn-4',
    courseId: 'react-native-mobile',
    title: 'Styling and Animations',
    description: 'Create beautiful mobile UIs',
    type: 'video',
    content: 'Learn React Native styling and create smooth animations.',
    videoUrl: 'https://example.com/videos/rn-4.mp4',
    duration: 65,
    order: 4,
    resources: [],
  },
  {
    id: 'rn-5',
    courseId: 'react-native-mobile',
    title: 'Publishing Your App',
    description: 'Deploy to App Store and Google Play',
    type: 'text',
    content: `# Publishing Your React Native App

Get your app into users' hands!

## iOS App Store

1. **Prepare**
   - Create App Store Connect account
   - Generate certificates and provisioning profiles
   - Prepare app icons and screenshots

2. **Build**
   \`\`\`bash
   cd ios
   xcodebuild archive
   \`\`\`

3. **Submit**
   - Upload to App Store Connect
   - Fill in app information
   - Submit for review

## Google Play Store

1. **Prepare**
   - Create Google Play Console account
   - Generate signing key
   - Prepare store listing

2. **Build**
   \`\`\`bash
   cd android
   ./gradlew bundleRelease
   \`\`\`

3. **Submit**
   - Upload AAB file
   - Complete store listing
   - Submit for review

## Tips

- Test thoroughly before submission
- Follow platform guidelines
- Prepare for review process (can take days)
- Plan your launch marketing`,
    videoUrl: null,
    duration: 70,
    order: 5,
    resources: [
      { title: 'Publishing Checklist', url: '/resources/app-publishing-checklist.pdf', type: 'pdf' },
    ],
  },

  // Deep Learning Lessons
  {
    id: 'dl-1',
    courseId: 'deep-learning-ai',
    title: 'Neural Networks Fundamentals',
    description: 'Understanding artificial neural networks',
    type: 'video',
    content: 'Learn the fundamentals of neural networks, activation functions, and backpropagation.',
    videoUrl: 'https://example.com/videos/dl-1.mp4',
    duration: 90,
    order: 1,
    resources: [],
  },
  {
    id: 'dl-2',
    courseId: 'deep-learning-ai',
    title: 'Convolutional Neural Networks',
    description: 'CNNs for computer vision',
    type: 'video',
    content: 'Master CNNs for image classification, object detection, and computer vision tasks.',
    videoUrl: 'https://example.com/videos/dl-2.mp4',
    duration: 85,
    order: 2,
    resources: [],
  },
  {
    id: 'dl-3',
    courseId: 'deep-learning-ai',
    title: 'Recurrent Neural Networks',
    description: 'RNNs and LSTMs for sequence data',
    type: 'video',
    content: 'Learn RNNs and LSTMs for natural language processing and time series analysis.',
    videoUrl: 'https://example.com/videos/dl-3.mp4',
    duration: 80,
    order: 3,
    resources: [],
  },
  {
    id: 'dl-4',
    courseId: 'deep-learning-ai',
    title: 'Transfer Learning',
    description: 'Leverage pre-trained models',
    type: 'video',
    content: 'Use transfer learning to build powerful models with less data.',
    videoUrl: 'https://example.com/videos/dl-4.mp4',
    duration: 70,
    order: 4,
    resources: [],
  },
  {
    id: 'dl-5',
    courseId: 'deep-learning-ai',
    title: 'Generative AI and GANs',
    description: 'Create new content with AI',
    type: 'video',
    content: 'Learn Generative Adversarial Networks and create AI-generated content.',
    videoUrl: 'https://example.com/videos/dl-5.mp4',
    duration: 95,
    order: 5,
    resources: [],
  },
  {
    id: 'dl-6',
    courseId: 'deep-learning-ai',
    title: 'Transformers and Modern NLP',
    description: 'State-of-the-art NLP with transformers',
    type: 'text',
    content: `# Transformers and Modern NLP

Transformers revolutionized natural language processing.

## What are Transformers?

Transformers use self-attention mechanisms to process sequential data more effectively than RNNs.

## Key Concepts

- **Self-Attention**: Weighing importance of different words
- **Multi-Head Attention**: Multiple attention mechanisms in parallel
- **Positional Encoding**: Adding position information

## Popular Models

- **BERT**: Bidirectional encoder representations
- **GPT**: Generative pre-trained transformer
- **T5**: Text-to-text transfer transformer

## Using Transformers

\`\`\`python
from transformers import pipeline

# Sentiment analysis
classifier = pipeline('sentiment-analysis')
result = classifier('I love this course!')
# Output: [{'label': 'POSITIVE', 'score': 0.9998}]

# Text generation
generator = pipeline('text-generation')
text = generator('Once upon a time')
\`\`\`

## Applications

- Chatbots and conversational AI
- Text summarization
- Translation
- Question answering
- Code generation

The future of AI is here!`,
    videoUrl: null,
    duration: 100,
    order: 6,
    resources: [
      { title: 'Transformers Paper', url: '/resources/attention-is-all-you-need.pdf', type: 'pdf' },
    ],
  },

  // Figma Advanced Lessons
  {
    id: 'figma-1',
    courseId: 'figma-advanced',
    title: 'Advanced Auto Layout',
    description: 'Master responsive design with auto layout',
    type: 'video',
    content: 'Learn advanced auto layout techniques for responsive, flexible designs.',
    videoUrl: 'https://example.com/videos/figma-1.mp4',
    duration: 50,
    order: 1,
    resources: [],
  },
  {
    id: 'figma-2',
    courseId: 'figma-advanced',
    title: 'Component Variants and Properties',
    description: 'Build scalable component systems',
    type: 'video',
    content: 'Master component variants, properties, and create reusable design systems.',
    videoUrl: 'https://example.com/videos/figma-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'figma-3',
    courseId: 'figma-advanced',
    title: 'Design Systems at Scale',
    description: 'Build enterprise-level design systems',
    type: 'video',
    content: 'Create and maintain design systems used by large teams and organizations.',
    videoUrl: 'https://example.com/videos/figma-3.mp4',
    duration: 70,
    order: 3,
    resources: [],
  },
  {
    id: 'figma-4',
    courseId: 'figma-advanced',
    title: 'Advanced Prototyping',
    description: 'Create interactive, realistic prototypes',
    type: 'text',
    content: `# Advanced Prototyping in Figma

Create prototypes that feel like real products!

## Interactive Components

Build components that respond to user interactions:
- Hover states
- Click states
- Toggle switches
- Dropdown menus

## Advanced Interactions

- **Smart Animate**: Smooth transitions between frames
- **Drag Interactions**: Swipeable cards, sliders
- **Scroll Behavior**: Fixed headers, parallax effects
- **Conditional Logic**: Show/hide based on state

## Prototype Settings

\`\`\`
Device: iPhone 14 Pro
Starting Frame: Home Screen
Flow: Main User Flow
Background: #F5F5F5
\`\`\`

## Presentation Tips

- Set up multiple flows for different scenarios
- Add hotspot hints for usability testing
- Use device frames for realistic presentation
- Share prototype links with stakeholders

## Variables (Beta)

Use variables for:
- Colors that change based on mode (light/dark)
- Spacing that adjusts responsively
- Text that updates across designs

Prototypes are powerful tools for validation!`,
    videoUrl: null,
    duration: 65,
    order: 4,
    resources: [],
  },

  // Business Strategy Lessons
  {
    id: 'bs-1',
    courseId: 'business-strategy',
    title: 'Strategic Thinking Fundamentals',
    description: 'Develop strategic thinking skills',
    type: 'video',
    content: 'Learn to think strategically and make better business decisions.',
    videoUrl: 'https://example.com/videos/bs-1.mp4',
    duration: 45,
    order: 1,
    resources: [],
  },
  {
    id: 'bs-2',
    courseId: 'business-strategy',
    title: 'Competitive Analysis',
    description: 'Analyze competitors and market position',
    type: 'video',
    content: 'Master competitive analysis frameworks including Porter\'s Five Forces.',
    videoUrl: 'https://example.com/videos/bs-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'bs-3',
    courseId: 'business-strategy',
    title: 'Strategic Planning Process',
    description: 'Create effective strategic plans',
    type: 'video',
    content: 'Learn the strategic planning process from vision to execution.',
    videoUrl: 'https://example.com/videos/bs-3.mp4',
    duration: 70,
    order: 3,
    resources: [],
  },
  {
    id: 'bs-4',
    courseId: 'business-strategy',
    title: 'Leadership and Change Management',
    description: 'Lead teams through strategic change',
    type: 'video',
    content: 'Develop leadership skills and manage organizational change effectively.',
    videoUrl: 'https://example.com/videos/bs-4.mp4',
    duration: 65,
    order: 4,
    resources: [],
  },
  {
    id: 'bs-5',
    courseId: 'business-strategy',
    title: 'Strategy Execution',
    description: 'Turn strategy into results',
    type: 'text',
    content: `# Strategy Execution

Great strategy means nothing without execution!

## The Execution Gap

70% of strategies fail due to poor execution, not bad strategy.

## Keys to Successful Execution

1. **Clear Communication**
   - Everyone understands the strategy
   - Alignment across all levels
   - Regular updates and feedback

2. **Accountability**
   - Assign clear ownership
   - Set measurable goals
   - Track progress regularly

3. **Resource Allocation**
   - Invest in strategic priorities
   - Reallocate from non-strategic areas
   - Ensure adequate funding

4. **Culture and Capabilities**
   - Build necessary skills
   - Align culture with strategy
   - Remove obstacles

## OKRs for Execution

Use Objectives and Key Results:

**Objective**: Become market leader in customer satisfaction

**Key Results**:
- Increase NPS from 45 to 70
- Reduce support response time to <2 hours
- Achieve 95% customer retention rate

## Monitoring and Adaptation

- Weekly progress reviews
- Monthly strategy sessions
- Quarterly adjustments
- Annual strategic review

Remember: Strategy is a journey, not a destination!`,
    videoUrl: null,
    duration: 55,
    order: 5,
    resources: [
      { title: 'OKR Template', url: '/resources/okr-template.pdf', type: 'pdf' },
    ],
  },

  // Financial Analysis Lessons
  {
    id: 'fa-1',
    courseId: 'financial-analysis',
    title: 'Financial Statements Fundamentals',
    description: 'Read and analyze financial statements',
    type: 'video',
    content: 'Master income statements, balance sheets, and cash flow statements.',
    videoUrl: 'https://example.com/videos/fa-1.mp4',
    duration: 55,
    order: 1,
    resources: [],
  },
  {
    id: 'fa-2',
    courseId: 'financial-analysis',
    title: 'Financial Ratios and Metrics',
    description: 'Analyze company performance with ratios',
    type: 'video',
    content: 'Learn key financial ratios for profitability, liquidity, and efficiency analysis.',
    videoUrl: 'https://example.com/videos/fa-2.mp4',
    duration: 60,
    order: 2,
    resources: [],
  },
  {
    id: 'fa-3',
    courseId: 'financial-analysis',
    title: 'Excel for Financial Modeling',
    description: 'Build financial models in Excel',
    type: 'video',
    content: 'Master Excel for financial modeling including formulas, functions, and best practices.',
    videoUrl: 'https://example.com/videos/fa-3.mp4',
    duration: 75,
    order: 3,
    resources: [],
  },
  {
    id: 'fa-4',
    courseId: 'financial-analysis',
    title: 'Valuation Techniques',
    description: 'Value companies using DCF and multiples',
    type: 'video',
    content: 'Learn DCF valuation, comparable company analysis, and precedent transactions.',
    videoUrl: 'https://example.com/videos/fa-4.mp4',
    duration: 80,
    order: 4,
    resources: [],
  },
  {
    id: 'fa-5',
    courseId: 'financial-analysis',
    title: 'Investment Decision Making',
    description: 'Make informed investment decisions',
    type: 'text',
    content: `# Investment Decision Making

Make smart investment decisions using financial analysis.

## Investment Criteria

### NPV (Net Present Value)
Accept projects with NPV > 0

\`\`\`
NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment
\`\`\`

### IRR (Internal Rate of Return)
Accept if IRR > Required Return

### Payback Period
Time to recover initial investment

## Risk Assessment

- **Sensitivity Analysis**: How changes affect outcomes
- **Scenario Analysis**: Best/base/worst case scenarios
- **Monte Carlo Simulation**: Probability distributions

## Portfolio Theory

- **Diversification**: Don't put all eggs in one basket
- **Risk-Return Tradeoff**: Higher risk = higher potential return
- **Modern Portfolio Theory**: Optimize risk-adjusted returns

## Due Diligence Checklist

✅ Financial statement analysis
✅ Industry and competitive analysis
✅ Management quality assessment
✅ Growth prospects evaluation
✅ Risk identification
✅ Valuation analysis
✅ Investment thesis documentation

## Common Mistakes to Avoid

- Ignoring qualitative factors
- Over-reliance on historical data
- Confirmation bias
- Neglecting risk assessment
- Poor timing

Invest wisely!`,
    videoUrl: null,
    duration: 70,
    order: 5,
    resources: [
      { title: 'Valuation Models', url: '/resources/valuation-models.xlsx', type: 'xlsx' },
    ],
  },

  // Public Speaking Lessons
  {
    id: 'ps-1',
    courseId: 'public-speaking',
    title: 'Overcoming Stage Fright',
    description: 'Conquer fear and build confidence',
    type: 'video',
    content: 'Learn techniques to overcome stage fright and speak with confidence.',
    videoUrl: 'https://example.com/videos/ps-1.mp4',
    duration: 35,
    order: 1,
    resources: [],
  },
  {
    id: 'ps-2',
    courseId: 'public-speaking',
    title: 'Crafting Compelling Presentations',
    description: 'Structure and storytelling for impact',
    type: 'video',
    content: 'Learn to structure presentations and use storytelling to engage audiences.',
    videoUrl: 'https://example.com/videos/ps-2.mp4',
    duration: 50,
    order: 2,
    resources: [],
  },
  {
    id: 'ps-3',
    courseId: 'public-speaking',
    title: 'Voice and Body Language',
    description: 'Master non-verbal communication',
    type: 'video',
    content: 'Use voice modulation, gestures, and body language to enhance your message.',
    videoUrl: 'https://example.com/videos/ps-3.mp4',
    duration: 45,
    order: 3,
    resources: [],
  },
  {
    id: 'ps-4',
    courseId: 'public-speaking',
    title: 'Delivering Your Best Presentation',
    description: 'Practice and deliver with impact',
    type: 'text',
    content: `# Delivering Your Best Presentation

Bring it all together for a powerful delivery!

## Preparation is Key

### Know Your Material
- Practice 10+ times
- Internalize, don't memorize
- Prepare for questions

### Know Your Audience
- Who are they?
- What do they care about?
- What's their knowledge level?

### Know Your Environment
- Visit the venue if possible
- Test equipment
- Have backup plans

## The Delivery

### Opening (First 30 seconds)
- Hook the audience
- State your purpose
- Preview your content

### Body
- Follow your structure
- Use signposts ("First...", "Next...")
- Engage with stories and examples
- Pause for emphasis

### Closing
- Summarize key points
- Call to action
- End with impact

## Handling Q&A

- Listen fully before answering
- Repeat the question
- Be honest if you don't know
- Keep answers concise
- Maintain composure

## Pro Tips

- Arrive early
- Connect with audience members beforehand
- Use the stage/space
- Make eye contact
- Smile and show enthusiasm
- Record yourself for improvement

## Emergency Toolkit

- Water bottle
- Backup slides on USB
- Notes (just in case)
- Confidence!

You've got this! 🎤`,
    videoUrl: null,
    duration: 55,
    order: 4,
    resources: [
      { title: 'Presentation Checklist', url: '/resources/presentation-checklist.pdf', type: 'pdf' },
    ],
  },
]
