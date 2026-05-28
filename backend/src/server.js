const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running on Render!' });
});

// Profile API
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Tafawa",
    title: "Full Stack Developer",
    bio: "Cloud Computing student from Dar es Salaam, Tanzania.",
    location: "Dar es Salaam, Tanzania"
  });
});

// Projects API
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online shopping website with cart and checkout system.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Real-time collaborative task manager with drag & drop.",
      tech: ["Next.js", "Tailwind", "Firebase"],
      link: "#",
      github: "#"
    }
  ]);
});

// Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log('New Contact Form Submission:', { name, email, message });

  res.status(200).json({ 
    success: true, 
    message: "Thank you! Your message has been received." 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});