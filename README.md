# Video2Quiz.Ai

**Everyone watches YouTube videos to learn and stay informed, but how can you be sure you've understood everything explained in the video?**

**Video2Quiz.Ai** – the app designed to test your knowledge about the YouTube videos you've just watched. With Video2Quiz.Ai, you can transform any YouTube video into an engaging quiz that helps reinforce what you've learned and ensures you grasp the key concepts.

**Watch the full demo here:**  https://screenrec.com/share/VIH3kTg2Y8 


https://github.com/user-attachments/assets/332549fa-469f-47f9-9e63-82dab81ddf91


## Key Features

- **AI-Powered Quiz Generation**: Simply enter the URL of any YouTube video, and our AI will generate a comprehensive quiz based on the video's content.
- **Real-Time Knowledge Testing**: Immediately test your understanding of the video and get a score.
- **Save and Review Quizzes**: Save quizzes to revisit later, and review your past quizzes to track your learning progress.
- **Responsive Design**: Enjoy a seamless experience across all devices, whether you're on your phone, tablet, or desktop.


## Tech Stack

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **MongoDB**: A powerful non-relational database for storing user-generated quiz data.
- **Mongoose**: Object-relational mapper for working with MongoDB.
- **YouTube-transcript npm**: A npm package for generating the transcript from the YouTube video.
- **Google Gemini API**: Generates questions from the YouTube video transcript.
- **Clerk**: Authentication service for secure user management.
- **Tailwind CSS**: A utility-first CSS framework for designing modern and responsive user interfaces.


## How It Works

1. **Enter Video URL**: Paste the URL of the YouTube video you want to quiz yourself on.
2. **Generate Quiz**: Click "Generate Quiz" and let our AI create a set of questions based on the video's content.
3. **Take the Quiz**: Answer the questions to the best of your ability.
4. **Get Your Score**: See your results instantly and identify areas where you can improve.
5. **Save and Review**: Save quizzes for future review and keep track of your learning journey.

## Installation

Follow these steps to get the application up and running:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Video2Quiz.ai.git
   cd Video2Quiz.ai```

2. **Go to root directory and install dependencies**:
   ```bash
   npm install

3. **Set Up Environment Variables**:
Create a .env.local file in the root directory of your project with the following content:
```bash
GOOGLE_GEMINI_API=your_google_gemini_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_uri_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

4. Start the Development Server:
 ```bash
next dev
```

---
