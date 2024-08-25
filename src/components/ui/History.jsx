
'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { Button } from './button';
import { fetchSavedQuizzes, fetchQuizDetails, deleteQuiz } from  "@/lib/api";
import { useUser } from '@clerk/nextjs';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
const History = ({ savedQuizzes, setSavedQuizzes }) => {
    const [viewSavedQuiz, setViewSavedQuiz] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useUser()

    console.log('SAVEDQUIZZES', savedQuizzes)

    const userIdentifier = user.id;
    // Function to fetch saved quizzes on component mount
    useEffect(() => {
      const fetchQuizzes = async () => {
        setLoading(true);
        try {
          const quizzes = await fetchSavedQuizzes(userIdentifier);
          setSavedQuizzes(quizzes);
        } catch (err) {
          console.error('Error fetching saved quizzes:', err);
          setError('Failed to fetch saved quizzes. Please try again.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchQuizzes();
    }, [setSavedQuizzes]);
  
    const handleViewSavedQuiz = async (index) => {
      setLoading(true);
      try {
        setViewSavedQuiz(savedQuizzes[index].quiz);
      
        console.log('view',viewSavedQuiz)
        console.log('saved', savedQuizzes)
      } catch (err) {
        console.error('Error fetching quiz details:', err);
        setError('Failed to fetch quiz details. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleDeleteQuiz = async (index) => {
      setLoading(true);
      try {
        const quizId = savedQuizzes[index]._id;
        await deleteQuiz(quizId);
  
        // Update the list of saved quizzes
        const newSavedQuizzes = savedQuizzes.filter((_, i) => i !== index);
        setSavedQuizzes(newSavedQuizzes);
        setViewSavedQuiz(null);
        toast.success('Quiz has been deleted')
      } catch (err) {
        console.error('Error deleting quiz:', err);
        setError('Failed to delete quiz. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    if (loading) return (
        <Suspense  fallback={<Loading />} >
       <Loading />
        </Suspense>
   
);

    console.log('viewsaved quiz', viewSavedQuiz)
  
    return (

    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 ">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-4">Saved Quizzes</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {savedQuizzes.length > 0 ? (
          savedQuizzes.map((savedQuiz, index) => (
            <li key={savedQuiz._id} className="bg-muted p-6 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <p className="font-medium">{savedQuiz.videoUrl}</p>
                <Button variant="link" onClick={() => handleViewSavedQuiz(index)}>View Quiz</Button>
              </div>
              <Button variant="danger" onClick={() => handleDeleteQuiz(index)}>Delete</Button>
            </li>
          ))
        ) : (
          <p>No saved quizzes available.</p>
        )}
      </ul>
      {viewSavedQuiz && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Viewing Saved Quiz</h3>
          <form className="space-y-6">
            {/* here i want to have quiz on next page on its id of quiz /[id] in next and show the quiz to user */}
{viewSavedQuiz && (
                <div className="mt-6">
                  
                  <form className="space-y-6">
                    {viewSavedQuiz.map((question, index) => (
                      <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold mb-2">{question.question}</h3>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                              <label className="inline-flex items-center">
                              <input
                                  type="radio"
                                  name={`view-question-${index}`}
                                  value={option}
                                  
                                 
                                  className="form-radio"
                                />
                                <span className="ml-2">{option}</span>
                              </label>
                            </div>
                          ))}

                          
                          <div className="font-bold">Correct answer: {question.correct_answer}</div>

                        </div>
                      </div>
                    ))}
                   
                  </form>
                 
                </div>
              )}
          </form>
        </div>
      )}
    </div>
  </section>
    );
  };

export default History;
