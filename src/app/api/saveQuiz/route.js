import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Quiz from '@/models/Quiz';

export async function POST(req) {
  await dbConnect();

  try {
    const { userIdentifier, videoUrl, quiz } = await req.json();
    console.log('savequiz', userIdentifier, videoUrl, quiz);

    if (!userIdentifier || !videoUrl || !quiz) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newQuiz = new Quiz({ userIdentifier, videoUrl, quiz });
    await newQuiz.save();

    return NextResponse.json({ message: 'Quiz saved successfully', quiz: newQuiz }, { status: 201 });
  } catch (error) {
    console.error('Error saving quiz:', error);
    return NextResponse.json({ error: 'Failed to save quiz' }, { status: 500 });
  }
}
