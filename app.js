const express = require('express');
const connectDB = require('./db/connect');
const tasks = require('./routes/task');
require('dotenv').config()
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello, Task Manager!");
});

app.use('/api/v1/tasks', tasks);
// -----------------------------
// API Endpoints (in tasks route file):
// GET    /api/v1/tasks       → Get all tasks
// POST   /api/v1/tasks       → Create new task
// GET    /api/v1/tasks/:id   → Get single task
// PATCH  /api/v1/tasks/:id   → Update task
// DELETE /api/v1/tasks/:id   → Delete task
// -----------------------------

// Start Server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // console.log('✅ Connected to Database');

        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('❌ Failed to connect to DB:', error);
    }
};

start();
