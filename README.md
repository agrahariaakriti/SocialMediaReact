# 🌐 React Social Media Mini Platform

A simple social media application built using **React**. It allows users to create posts with various input fields (like user ID, title, body, reactions, and tags), and then view those posts on a separate Home page.

---

## 📌 Features

- 🔹 **Create Post**:
  - Fill out fields like user ID, title, post body, reaction count, and tags.
  - Click the "Create Post" button to publish your post.

- 🔹 **View Posts (Home)**:
  - Navigate to the **Home** page to see all posts you've created.
  - Each post is displayed in a card format, showing all relevant data.

---

## 🧩 Components

### 1. **Home**
Displays a list of all posts created by the user. Posts are shown in cards with:
- Title
- Body
- Reactions
- Tags (styled using Bootstrap badges)

### 2. **CreatePost**
This component provides a form with:
- 🔹 User ID input
- 🔹 Post Title input
- 🔹 Post Body input
- 🔹 Reactions input
- 🔹 Tags input

After filling the form, clicking the **Create Post** button adds the post to the global context and redirects (or allows the user) to view it on the Home page.

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components & Hooks)
- 🧠 React Context API for global state management
- 🧩 useRef for form handling
- 🎨 Bootstrap for styling
- 💾 Local state (no backend)

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-social-media-app.git
   cd react-social-media-app

