# Twinstagram

📸 A full-stack clone of Instagram — with a twist!  
Twinstagram is a personal project built to deepen understanding of full-stack web development by replicating common social media functionality. Users can create accounts, post images, comment, like posts, and follow others.

## 🌟 Purpose

This project was created to learn how platforms like Instagram are built from the ground up. It’s an exploration of authentication flows, relational databases, and CRUD operations across both frontend and backend.

## 🛠️ Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** JSON Web Tokens (JWT)
- **Image Hosting:** Cloudinary

## ✨ Features

- 👤 User authentication with JWT
- 🖼️ Image uploading via Cloudinary
- 📝 Create, edit, and delete posts
- ❤️ Like/unlike posts
- 💬 Comment on posts
- 🔁 Follow and unfollow other users
- 🚦 Conditional rendering for public/private content

## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Cloudinary account (for image uploads)

### Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/patsylin/instaGram.git
    cd instaGram
    ```

2. Install dependencies:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Create a `.env` file in the `/server` directory with your Cloudinary keys and JWT secret:
    ```
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    JWT_SECRET=your_jwt_secret
    ```

4. Set up the database:
    ```bash
    npm run seed
    ```

5. Run the app:

    - In `/client`:
      ```bash
      npm run dev
      ```

    - In `/server`:
      ```bash
      npm run start:dev
      ```

6. Open your browser:  
   `http://localhost:5173`

## 🤝 Contributors

- **Patsy Lin** – Full Stack Developer  
  [GitHub](https://github.com/patsylin) | [LinkedIn](https://linkedin.com/in/patsy-lin)

## 📬 Contact

📧 pohutchison@gmail.com

---

**Note:** This project was built as part of the Grace Hopper Program at Fullstack Academy.
