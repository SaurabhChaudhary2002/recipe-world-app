# 🍽️ Recipe World

Recipe World is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to explore, create, edit, and manage recipes. The application provides a clean and responsive interface along with secure backend APIs for recipe management.

---

## 🚀 Features

- 🔐 User Authentication (Sign Up & Login)
- 📖 Browse all recipes
- ➕ Add new recipes
- ✏️ Edit existing recipes
- 🗑️ Delete recipes
- 🖼️ Upload recipe images
- 📱 Responsive user interface
- 🌐 RESTful API integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Multer

---

## 📂 Project Structure

```
Recipe_World/
│
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── public/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   └── recipe-world-app/
│       ├── public/
│       ├── src/
│       ├── package.json
│       └── vite.config.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Recipe_World.git
cd Recipe_World
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Install Frontend Dependencies

```bash
cd ../frontend/recipe-world-app
npm install
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

or

```bash
npm start
```

---

### Start Frontend

```bash
cd frontend/recipe-world-app
npm run dev
```

The frontend runs at:

```
http://localhost:5173
```

The backend runs at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### Recipe Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/recipe` | Get all recipes |
| GET | `/recipe/:id` | Get recipe by ID |
| POST | `/recipe` | Add a new recipe |
| PUT | `/recipe/:id` | Update a recipe |
| DELETE | `/recipe/:id` | Delete a recipe |

### User Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/signup` | Register a new user |
| POST | `/login` | Login user |

---

## 📸 Screenshots

You can add screenshots here after uploading them.

Example:

```
screenshots/
    home.png
    login.png
    recipe-details.png
```

---

## 📌 Future Improvements

- 🔍 Search recipes
- 🏷️ Recipe categories
- ❤️ Favorite recipes
- ⭐ Ratings & Reviews
- 💬 Comments
- 🌙 Dark mode
- 📄 Pagination

---

## 👨‍💻 Author

**Saurabh Chaudhary**

MCA Student, MNNIT Allahabad

GitHub: https://github.com/YOUR_GITHUB_USERNAME

---

## 📄 License

This project is intended for educational and portfolio purposes.
