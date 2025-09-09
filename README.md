# Meme Voting Arena

A fun and interactive web application where users can view, upload, and vote on memes.

## 🎯 Project Overview

Meme Voting Arena allows users to:
- Upload memes with a title, image, and category.
- View memes in a responsive gallery.
- Upvote or downvote memes.
- See the top voted memes in a leaderboard.
- see user's favorite memes

## 🚀 Features

- User Signup & Login
- Upload memes with image and category
- Image upload using Cloudinary
- Category-based meme filtering
- Upvote/Downvote functionality
- Top 5 Meme Leaderboard
- Simple responsive design (Bootstrap 5)
- Backend validation with Joi

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (MongoDB Atlas + Mongoose)
- Cloudinary for Image Storage
- EJS templating
- Bootstrap 5
- Joi (validation)
- dotenv (environment variables)
- Multer (file uploads)
- express-session + connect-mongo (sessions)
- passport for authentication
---

## ✅ Installation & Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/memeVotingArena.git
    ```

2. Navigate to the project directory:
    ```bash
    cd memeVotingArena
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the project root with this content:
    ```env
    PORT=3000
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    SECRET=your_session_secret
    ```

5. Start the application:
    ```bash
    node app.js
    ```

6. Visit in your browser:
    ```
    http://localhost:8080
    ```

---

## ⚡ Dependencies

```bash
npm install express mongoose ejs-mate dotenv method-override joi express-session connect-mongo multer cloudinary passport passport-local passport-local-mongoose multer-storage-cloudinary connect-flash
