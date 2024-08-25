import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Quiz from '@/models/Quiz'; 

export async function GET(req) {
  await dbConnect(); 

  try {
    const { searchParams } = new URL(req.url);
    console.log('SEARCHPARAMAS',searchParams )
    const userId = searchParams.get('userId'); // Extract userId from query parameters
    console.log('SERVER SERACHPARAM', userId)
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    //const quizzes = await Quiz.find({ userIdentifier: userId }).exec(); // Fetch quizzes specific to the user
    const quizzes = await Quiz.find({ userIdentifier: userId })
    .sort({ createdAt: -1 })  // Sort by 'createdAt' in descending order
    .exec(); // Fetch quizzes specific to the user
    return NextResponse.json(quizzes, { status: 200 });
  } catch (error) {
    console.error('Error fetching quizzes route.js api:', error);
    return NextResponse.json({ error: 'Failed to fetch quizzes' }, { status: 500 });
  }
}
