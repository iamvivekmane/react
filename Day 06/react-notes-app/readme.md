# TheNotebook 📓

> A full-stack note-taking web application built with the MERN stack. This is my first fully deployed full-stack project — built from scratch to learn React, Express, MongoDB, and JWT Authentication.

🌐 **Live Demo:** [https://thenotebookapp.onrender.com](https://thenotebookapp.onrender.com)

---

## 📌 About The Project

TheNotebook is not just a note-taking app — it is the result of learning React by actually building something real. The goal was never to build a perfect product, but to understand how a full-stack application works end to end — from a user clicking a button, to data being stored in a database, to that data coming back on the screen.

---

## ✨ Features

- 🔐 User Signup and Login with JWT Authentication
- 📝 Create, Read, Update and Delete (CRUD) notes
- 🔒 Protected routes — notes are private to each user
- 📱 Responsive design — works on all screen sizes
- ☁️ Fully deployed and live on the internet

---

## 🛠️ Tech Stack

### Frontend

- **React.js** — component-based UI
- **React Router** — client-side routing
- **Context API** — global auth state management

### Backend

- **Node.js** — runtime environment
- **Express.js** — REST API framework
- **MongoDB Atlas** — cloud database
- **Mongoose** — ODM for MongoDB
- **JWT (JSON Web Tokens)** — authentication
- **bcrypt.js** — password hashing

### Deployment

- **Render** — both frontend and backend deployed separately

---

## 🧠 What I Learned

This project was my primary React learning experience. Here's what I picked up:

### React

- `useState` and `useEffect` for state and side effects
- `useContext` for global auth state without prop drilling
- Custom hooks to keep components clean
- Conditional rendering based on auth state
- Handling API responses and showing user-friendly errors

### Backend

- Building a REST API from scratch with Express.js
- JWT-based authentication — generating, sending, and verifying tokens
- Writing middleware to protect routes
- Password hashing with bcrypt before storing in DB
- Returning proper HTTP status codes (400, 401, 404, 500) with clean error messages

### Deployment

- Using `.env` files to store secrets and accessing them via `process.env`
- Configuring environment variables on Render's hosting platform
- Separating frontend and backend as two independent services
- Understanding and fixing CORS issues
- What `npm run build` produces and how a static React build is served

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account
- A `.env` file set up (see below)

### Clone the repository

```bash
git clone https://github.com/iamvivekmane/react-learning.git
cd "Day 06/react-notes-app"
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will run at `http://localhost:3000`

---

## 📁 Project Structure

```
thenotebook/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── middleware/
│   │   └── fetchuser.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
└── README.md
```

---

## 🔐 Environment Variables

The following environment variables are required to run the backend:

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| `MONGO_URI`  | MongoDB Atlas connection string    |
| `JWT_SECRET` | Secret key for signing JWT tokens  |
| `PORT`       | Port number for the backend server |

> ⚠️ Never commit your `.env` file to GitHub. It is already added to `.gitignore`.

---

⭐ If you found this project helpful or interesting, consider giving it a star on GitHub!
