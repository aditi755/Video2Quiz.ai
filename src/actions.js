
'use server';
import { YoutubeTranscript } from 'youtube-transcript';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dbConnect from './lib/dbConnect';
import Quiz from './models/Quiz';

const apiKey = process.env.GOOGLE_GEMINI_API;

async function fetchTranscriptAction(videoUrl) {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
    
    const cleanedTranscript = transcript
      .map(entry => entry.text.replace(/&#?\w+;/g, ' ').trim())
      .join('\n');
    return cleanedTranscript;
  } catch (error) {
    console.error('Error fetching transcript:', error);
    throw new Error('Failed to fetch transcript');
  }
}

async function generateQuizQuestions(description) {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [
            { text: "you will be given a description of the video and you need to return me a JSON object of 5 questions with its options and correct answer that you will generate on basis of the description" },
          ],
        },
        {
          role: 'model',
          parts: [
            { text: "Okay, I'm ready! Please provide me with the description of the video. I will then analyze it and generate 5 multiple-choice questions with options and the correct answer for you." },
          ],
        },
        {
          role: 'user',
          parts: [
            { text: description },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(description);
    const rawResponse = await result.response.text();

    const jsonMatch = rawResponse.match(/\[.*\]/s);
    if (!jsonMatch) {
      throw new Error('No valid JSON array found in the response');
    }

    const cleanResponse = jsonMatch[0];
    const parsedResponse = JSON.parse(cleanResponse);

    // Ensure the response is an array and contains valid objects
    if (!Array.isArray(parsedResponse) || parsedResponse.some(item => typeof item !== 'object')) {
      throw new Error('Invalid format of quiz questions');
    }

    return parsedResponse;
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    throw new Error('Failed to generate quiz questions');
  }
}

export async function handleTranscriptFetchAction(videoUrl) {
  try {
    await dbConnect();
    const transcriptText = await fetchTranscriptAction(videoUrl);
    const quizQuestions = await generateQuizQuestions(transcriptText);

    const newQuiz = new Quiz({ videoUrl, quiz: quizQuestions });
    await newQuiz.save();

    // Convert Mongoose document to plain object and extract necessary fields
    const quizObject = {
      videoUrl: newQuiz.videoUrl,
      quiz: newQuiz.quiz,
    };

    return quizObject;
  } catch (error) {
    console.error('Error handling transcript fetch action:', error);
    throw new Error('Failed to handle transcript fetch action');
  }
}

export async function getSavedQuizzes() {
  try {
    await dbConnect();
    const quizzes = await Quiz.find({});
    // Convert each Mongoose document to plain object
    return quizzes.map(quiz => ({
      videoUrl: quiz.videoUrl,
      quiz: quiz.quiz,
    }));
  } catch (error) {
    console.error('Error getting saved quizzes:', error);
    throw new Error('Failed to get saved quizzes');
  }
}

export async function deleteQuizById(id) {
  try {
    await dbConnect();
    await Quiz.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting quiz by ID:', error);
    throw new Error('Failed to delete quiz by ID');
  }
}
