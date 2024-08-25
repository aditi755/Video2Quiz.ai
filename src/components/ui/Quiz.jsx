'use client'
import React, {useState, useEffect, Suspense} from 'react'
import { Button } from './button';
import { Input } from './input';
import {  saveQuiz, deleteQuiz, generateTranscript } from "@/lib/api";
import { v4 as uuidv4 } from 'uuid';
import '../../app/globals.css';
import { useUser } from '@clerk/nextjs';
import Loading from '@/app/loading';
import { toast } from 'react-hot-toast';

const Quiz = ({ savedQuizzes, setSavedQuizzes }) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [quiz, setQuiz] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { user } = useUser();
  
    const handleTranscriptFetch = async () => {
      setLoading(true);

    if (!user) {
        setError('User is not authenticated.');
        setLoading(false);
        return;
      }
  
      try {
        console.log('clerk auth id', user.id)
        const data = await generateTranscript(videoUrl);
        if (Array.isArray(data) && data.length > 0) {
          setQuiz(data);
          setUserAnswers(new Array(data.length).fill(''));
        
          // Get the Clerk user ID
          const userIdentifier = user.id;
  
          const newQuiz = { userIdentifier, videoUrl, quiz: data };
          //setSavedQuizzes((prev) => [newQuiz, ...prev]);
          await saveQuiz(newQuiz);
       
  
          setSavedQuizzes((prev) => [newQuiz, ...prev]);
          setMessage('Quiz saved successfully!');
        } else {
          setError('Unexpected format of quiz questions');
        }
      } catch (error) {
        setError('Failed to fetch transcript. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleTranscriptFetch();
    };
  
    const handleAnswerChange = (questionIndex, answer) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[questionIndex] = answer;
      setUserAnswers(updatedAnswers);
    };
  
    const handleQuizSubmit = (event) => {
      event.preventDefault();
      toast.success("Quiz has been submitted!")
      let calculatedScore = 0;
      quiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct_answer) {
          calculatedScore += 1;
        }
      });
      setScore(calculatedScore);
    };
  
    return (
      <div className="p-4 sm:h-screen flex flex-col ">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mx-auto">Transform Your Learning Experience</h2>
        <p className=" text-lg mx-auto mt-3">
          Start creating engaging quizzes from your YouTube videos today.
        </p>
        <div className="flex justify-center mt-10 ">
          <input
            type="text"
            placeholder="  Enter YouTube video link"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="max-w-md flex-1 text-white bg-black"/>
          <Button onClick={handleSubmit} className="ml-4">Convert</Button>
        </div>
        <section className="container mx-auto px-4 md:px-6 ">
          {loading ? (
            <Suspense  fallback={<Loading />} >
             <Loading className="mt-56"/>
            </Suspense>
          ) : (
            quiz && (
              <div className="max-w-3xl mx-auto mt-10">
                <h2 className="text-3xl font-bold tracking-tight mb-4 ">Your Quiz</h2>
                <form onSubmit={handleQuizSubmit} className="space-y-6">
                  {quiz.map((question, index) => (
                    <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-2">{question.question}</h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                checked={userAnswers[index] === option}
                                onChange={() => handleAnswerChange(index, option)}
                                className="form-radio"
                              />
                              <span className="ml-2">{option}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button type="submit">Submit Quiz</Button>
                </form>
                {score !== null && (
                  <div className="mt-6 text-center w-48 h-16 bg-white mx-auto rounded-md sm:mb-10 ">
                    <p className="text-xl font-bold text-black pt-4 ">Your Score: {score} / {quiz.length}</p>
                  </div>
                )}
              </div>
            )
          )}
        </section>
      </div>
    );
  };

export default Quiz