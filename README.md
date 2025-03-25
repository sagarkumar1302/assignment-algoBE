# Backend Task Manager

This is the backend service for the Task Manager application. It provides APIs to manage tasks, including creating, updating, deleting, and retrieving tasks. The backend is built using **Node.js** and **Express.js**, with **MongoDB** as the database.

---

## Features

- **Create Tasks**: Add new tasks with a title, description, and completion status.
- **Update Tasks**: Edit task details or mark tasks as completed.
- **Delete Tasks**: Remove tasks from the database.
- **Retrieve Tasks**: Fetch all tasks or specific tasks by ID.

---

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: For environment variable management.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/backend-task-manager.git
   cd backend-task-manager
2. npm install
3. Create a .env file in the root directory and add the following:
    PORT=3000
    MONGO_URI=your_mongodb_connection_string

API Endpoints
Base URL: http://localhost:3000/api/user
Method	Endpoint	Description	Request Body
GET	/	Fetch all tasks	-
POST	/register	Create a new task	{ "title": "Task Title", "description": "Task Description", "completed": false }
PUT	/update/:id	Update a task by ID	{ "title": "Updated Title", "description": "Updated Description", "completed": true }
DELETE	/delete/:id	Delete a task by ID	-

backend-algo/
├── controllers/
│   └── taskController.js   # Task-related logic
├── models/
│   └── Task.js             # Mongoose schema for tasks
├── routes/
│   └── taskRoutes.js       # API routes
├── .env                    # Environment variables
├── server.js               # Entry point of the application
└── [README.md](http://_vscodecontentref_/0)               # Documentation