
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VXWEzKD0vpb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// src/pages/index.js

'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";

export default function VideoToQuiz() {
  // const [videoUrl, setVideoUrl] = useState("");
  // const [quiz, setQuiz] = useState(null);
  // const [userAnswers, setUserAnswers] = useState([]);
  // const [score, setScore] = useState(null);
  // const [error, setError] = useState("");
  // const [savedQuizzes, setSavedQuizzes] = useState([]);
  // const [viewSavedQuiz, setViewSavedQuiz] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const savedQuizzes = localStorage.getItem("savedQuizzes");
  //   if (savedQuizzes) {
  //     setSavedQuizzes(JSON.parse(savedQuizzes));
  //   }
  // }, []);

  // const handleTranscriptFetch = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "/api/transcript",
  //       { videoUrl: String(videoUrl) },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //     if (response.status !== 200) {
  //       console.error("Error fetching transcript:", response.status);
  //       throw new Error("Failed to fetch transcript");
  //     }
  //     const quizQuestions = response.data;
  //     setQuiz(quizQuestions);
  //     setUserAnswers(new Array(quizQuestions.length).fill(""));
  //     const newSavedQuizzes = [{ videoUrl, quiz: quizQuestions }, ...savedQuizzes];
  //     setSavedQuizzes(newSavedQuizzes);
  //     localStorage.setItem("savedQuizzes", JSON.stringify(newSavedQuizzes));
  //   } catch (error) {
  //     console.error("Error fetching transcript:", error);
  //     setError("Failed to fetch transcript. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleTranscriptFetch();
  // };

  // const handleAnswerChange = (questionIndex, answer) => {
  //   const updatedAnswers = [...userAnswers];
  //   updatedAnswers[questionIndex] = answer;
  //   setUserAnswers(updatedAnswers);
  // };

  // const handleQuizSubmit = (event) => {
  //   event.preventDefault();
  //   let calculatedScore = 0;
  //   quiz.forEach((question, index) => {
  //     if (userAnswers[index] === question.correct_answer) {
  //       calculatedScore += 1;
  //     }
  //   });
  //   setScore(calculatedScore);
  // };

  // const clearSavedQuizzes = () => {
  //   localStorage.removeItem("savedQuizzes");
  //   setSavedQuizzes([]);
  //   setViewSavedQuiz(null);
  // };

  // const handleViewSavedQuiz = (index) => {
  //   setViewSavedQuiz(savedQuizzes[index].quiz);
  // };

  // const handleDeleteQuiz = (index) => {
  //   const newSavedQuizzes = savedQuizzes.filter((_, i) => i !== index);
  //   setSavedQuizzes(newSavedQuizzes);
  //   localStorage.setItem("savedQuizzes", JSON.stringify(newSavedQuizzes));
  //   setViewSavedQuiz(null);
  // };

  const [videoUrl, setVideoUrl] = useState('')
  const [quiz, setQuiz] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(null)
  const [error, setError] = useState('')
  const [savedQuizzes, setSavedQuizzes] = useState([])
  const [viewSavedQuiz, setViewSavedQuiz] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedQuizzes = localStorage.getItem('savedQuizzes')
    if (savedQuizzes) {
      setSavedQuizzes(JSON.parse(savedQuizzes))
    }
  }, [])

  const handleTranscriptFetch = async () => {
    setLoading(true)
    try {
      const response = await axios.post(
        '/api/transcript',
        { videoUrl: String(videoUrl) },
        { headers: { 'Content-Type': 'application/json' } }
      )
      if (response.status !== 200) {
        console.error('Error fetching transcript:', response.status)
        throw new Error('Failed to fetch transcript')
      }
      const quizQuestions = response.data
      setQuiz(quizQuestions)
      setUserAnswers(new Array(quizQuestions.length).fill(''))
      const newSavedQuizzes = [{ videoUrl, quiz: quizQuestions }, ...savedQuizzes]
      setSavedQuizzes(newSavedQuizzes)
      localStorage.setItem('savedQuizzes', JSON.stringify(newSavedQuizzes))
    } catch (error) {
      console.error('Error fetching transcript:', error)
      setError('Failed to fetch transcript. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleTranscriptFetch()
  }

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[questionIndex] = answer
    setUserAnswers(updatedAnswers)
  }

  const handleQuizSubmit = (event) => {
    event.preventDefault()
    let calculatedScore = 0
    quiz.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        calculatedScore += 1
      }
    })
    setScore(calculatedScore)
  }

  const clearSavedQuizzes = () => {
    localStorage.removeItem('savedQuizzes')
    setSavedQuizzes([])
    setViewSavedQuiz(null)
  }

  const handleViewSavedQuiz = (index) => {
    setViewSavedQuiz(savedQuizzes[index].quiz)
  }

  const handleDeleteQuiz = (index) => {
    const newSavedQuizzes = savedQuizzes.filter((_, i) => i !== index)
    setSavedQuizzes(newSavedQuizzes)
    localStorage.setItem('savedQuizzes', JSON.stringify(newSavedQuizzes))
    setViewSavedQuiz(null)
  }


    return (
      <div className="w-full min-h-screen bg-background text-foreground">
        <header className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <PlayIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Video to Quiz</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </header>
        <main>
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Convert YouTube Videos to Interactive Quizzes
              </h1>
              <p className="text-muted-foreground text-lg">
                Engage your audience and improve knowledge retention with our powerful video to quiz conversion tool.
              </p>
            </div>
            <img
              src="/pic.png"
              width={600}
              height={400}
              alt="Hero Image"
              className="rounded-lg overflow-hidden"
            />
          </section>
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it Works</h2>
              <p className="text-muted-foreground text-lg">
                Our intuitive tool makes it easy to convert any YouTube video into an engaging quiz. Simply enter the
                video link and we'll handle the rest.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <UploadIcon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Upload Video</h3>
                <p className="text-muted-foreground">Paste the link to your YouTube video and let us do the rest.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <FilePenIcon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customize Quiz</h3>
                <p className="text-muted-foreground">Easily add questions, answers, and explanations to your quiz.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <ShareIcon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Share and Embed</h3>
                <p className="text-muted-foreground">Publish your quiz and share it with your audience.</p>
              </div>
            </div>
          </section>
          {/* <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transform Your Learning Experience</h2>
              <p className="text-muted-foreground text-lg">
                Start creating engaging quizzes from your YouTube videos today.
              </p>
              <div className="flex justify-center">
                <Input type="text" placeholder="Enter YouTube video link" className="max-w-md flex-1" />
                <Button>Convert</Button>
              </div>
            </div>
          </section> */}


<section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transform Your Learning Experience</h2>
            <p className="text-muted-foreground text-lg">
              Start creating engaging quizzes from your YouTube videos today.
            </p>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Enter YouTube video link"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="max-w-md flex-1"
              />
              <Button onClick={handleSubmit}>Convert</Button>
            </div>
          </div>
        </section>
{quiz && (
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Your Quiz</h2>
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
                <div className="mt-6 text-center">
                  <p className="text-xl font-bold">Your Score: {score} / {quiz.length}</p>
                </div>
              )}
            </div>
          </section>
        )}
        {savedQuizzes.length > 0 && (
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Saved Quizzes</h2>
              <ul className="space-y-4">
                {savedQuizzes.map((savedQuiz, index) => (
                  <li key={index} className="bg-background p-6 rounded-lg shadow-sm flex justify-between items-center">
                    <div>
                      <p className="font-medium">{savedQuiz.videoUrl}</p>
                      <Button variant="link" onClick={() => handleViewSavedQuiz(index)}>View Quiz</Button>
                    </div>
                    <Button variant="danger" onClick={() => handleDeleteQuiz(index)}>Delete</Button>
                  </li>
                ))}
              </ul>
              {viewSavedQuiz && (
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-4">Viewing Saved Quiz</h3>
                  <form onSubmit={handleQuizSubmit} className="space-y-6">
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
                    <div className="mt-6 text-center">
                      <p className="text-xl font-bold">Your Score: {score} / {viewSavedQuiz.length}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <footer className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <PlayIcon className="w-6 h-6" />
          <span className="font-bold text-lg">Video to Quiz</span>
        </div>
        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}




  function FilePenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
      </svg>
    )
  }
  
  
  function PlayIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    )
  }
  
  
  function ShareIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    )
  }
  
  
  function UploadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
  }
  
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui';
// import { PlayIcon, UploadIcon, FilePenIcon, ShareIcon, CheckIcon } from '@/components/icons';

// const Home = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [quiz, setQuiz] = useState(null);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [score, setScore] = useState(null);
//   const [error, setError] = useState('');
//   const [savedQuizzes, setSavedQuizzes] = useState([]);
//   const [viewSavedQuiz, setViewSavedQuiz] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const savedQuizzes = localStorage.getItem('savedQuizzes');
//     if (savedQuizzes) {
//       setSavedQuizzes(JSON.parse(savedQuizzes));
//     }
//   }, []);

//   const handleTranscriptFetch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/transcript', { videoUrl }, { headers: { 'Content-Type': 'application/json' } });
//       if (response.status !== 200) throw new Error('Failed to fetch transcript');
//       const quizQuestions = response.data;
//       setQuiz(quizQuestions);
//       setUserAnswers(new Array(quizQuestions.length).fill(''));
//       const newSavedQuizzes = [{ videoUrl, quiz: quizQuestions }, ...savedQuizzes];
//       setSavedQuizzes(newSavedQuizzes);
//       localStorage.setItem('savedQuizzes', JSON.stringify(newSavedQuizzes));
//     } catch (error) {
//       setError('Failed to fetch transcript. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleTranscriptFetch();
//   };

//   const handleAnswerChange = (questionIndex, answer) => {
//     const updatedAnswers = [...userAnswers];
//     updatedAnswers[questionIndex] = answer;
//     setUserAnswers(updatedAnswers);
//   };

//   const handleQuizSubmit = (event) => {
//     event.preventDefault();
//     let calculatedScore = 0;
//     quiz.forEach((question, index) => {
//       if (userAnswers[index] === question.correct_answer) {
//         calculatedScore += 1;
//       }
//     });
//     setScore(calculatedScore);
//   };

//   const clearSavedQuizzes = () => {
//     localStorage.removeItem('savedQuizzes');
//     setSavedQuizzes([]);
//     setViewSavedQuiz(null);
//   };

//   const handleViewSavedQuiz = (index) => {
//     setViewSavedQuiz(savedQuizzes[index].quiz);
//   };

//   const handleDeleteQuiz = (index) => {
//     const newSavedQuizzes = savedQuizzes.filter((_, i) => i !== index);
//     setSavedQuizzes(newSavedQuizzes);
//     localStorage.setItem('savedQuizzes', JSON.stringify(newSavedQuizzes));
//     setViewSavedQuiz(null);
//   };

//   return (
//     <div className="w-full min-h-screen bg-background text-foreground">
//       <header className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
//         <Link href="#" className="flex items-center gap-2" prefetch={false}>
//           <PlayIcon className="w-6 h-6" />
//           <span className="font-bold text-lg">Video to Quiz</span>
//         </Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Features
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Pricing
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             About
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Contact
//           </Link>
//         </nav>
//         <Button>Get Started</Button>
//       </header>
//       <main>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="max-w-xl space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//               Convert YouTube Videos to Interactive Quizzes
//             </h1>
//             <p className="text-muted-foreground text-lg">
//               Engage your audience and improve knowledge retention with our powerful video to quiz conversion tool.
//             </p>
//             <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md">
//               <Input
//                 type="text"
//                 value={videoUrl}
//                 onChange={(e) => setVideoUrl(e.target.value)}
//                 placeholder="Enter YouTube video link"
//                 className="flex-1"
//               />
//               <Button type="submit">Convert</Button>
//             </form>
//           </div>
//           <img src="/favicon.ico" width={600} height={400} alt="Hero Image" className="rounded-lg overflow-hidden" />
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it Works</h2>
//             <p className="text-muted-foreground text-lg">
//               Our intuitive tool makes it easy to convert any YouTube video into an engaging quiz. Simply enter the
//               video link and we'll handle the rest.
//             </p>
//           </div>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <UploadIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Upload Video</h3>
//               <p className="text-muted-foreground">Paste the link to your YouTube video and let us do the rest.</p>
//             </div>
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <FilePenIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Customize Quiz</h3>
//               <p className="text-muted-foreground">Easily add questions, answers, and explanations to your quiz.</p>
//             </div>
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <ShareIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Share and Embed</h3>
//               <p className="text-muted-foreground">Publish your quiz and share it with your audience.</p>
//             </div>
//           </div>
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
//             <p className="text-muted-foreground text-lg">
//               Our pricing is simple and transparent. Choose the plan that best fits your needs.
//             </p>
//           </div>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Free</CardTitle>
//                 <CardDescription>Get started for free</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>1 quiz per month</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Basic quiz customization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Unlimited viewers</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Get Started</Button>
//               </CardFooter>
//             </Card>
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Pro</CardTitle>
//                 <CardDescription>For teams and businesses</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Unlimited quizzes</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Advanced quiz customization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Analytics and reporting</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Team collaboration</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Get Started</Button>
//               </CardFooter>
//             </Card>
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Enterprise</CardTitle>
//                 <CardDescription>Tailored for large organizations</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Dedicated account manager</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Custom branding and integrations</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Advanced security and compliance</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Scalable for large audiences</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Contact Sales</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transform Your Learning Experience</h2>
//             <p className="text-muted-foreground text-lg">
//               Start creating engaging quizzes from your YouTube videos today.
//             </p>
//             <div className="flex justify-center">
//               <Input type="text" placeholder="Enter YouTube video link" className="max-w-md flex-1" />
//               <Button>Convert</Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
//         <div className="flex items-center gap-2">
//           <PlayIcon className="w-6 h-6" />
//           <span className="font-bold text-lg">Video to Quiz</span>
//         </div>
//         <nav className="flex items-center gap-4 mt-4 md:mt-0">
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Privacy
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Terms
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Contact
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   )
// }


// function FilePenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//     </svg>
//   )
// }


// function PlayIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="6 3 20 12 6 21 6 3" />
//     </svg>
//   )
// }


// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }


// function UploadIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" x2="12" y1="3" y2="15" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }




// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// export default function Component() {
//   return (
//     <div className="w-full min-h-screen bg-background text-foreground">
//       <header className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
//         <Link href="#" className="flex items-center gap-2" prefetch={false}>
//           <PlayIcon className="w-6 h-6" />
//           <span className="font-bold text-lg">Video to Quiz</span>
//         </Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Features
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Pricing
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             About
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Contact
//           </Link>
//         </nav>
//         <Button>Get Started</Button>
//       </header>
//       <main>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="max-w-xl space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//               Convert YouTube Videos to Interactive Quizzes
//             </h1>
//             <p className="text-muted-foreground text-lg">
//               Engage your audience and improve knowledge retention with our powerful video to quiz conversion tool.
//             </p>
//             <div className="flex items-center gap-2 w-full max-w-md">
//               <Input type="text" placeholder="Enter YouTube video link" className="flex-1" />
//               <Button>Convert</Button>
//             </div>
//           </div>
//           <img
//             src="/favicon.ico"
//             width={600}
//             height={400}
//             alt="Hero Image"
//             className="rounded-lg overflow-hidden"
//           />
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it Works</h2>
//             <p className="text-muted-foreground text-lg">
//               Our intuitive tool makes it easy to convert any YouTube video into an engaging quiz. Simply enter the
//               video link and we'll handle the rest.
//             </p>
//           </div>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <UploadIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Upload Video</h3>
//               <p className="text-muted-foreground">Paste the link to your YouTube video and let us do the rest.</p>
//             </div>
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <FilePenIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Customize Quiz</h3>
//               <p className="text-muted-foreground">Easily add questions, answers, and explanations to your quiz.</p>
//             </div>
//             <div className="bg-background p-6 rounded-lg shadow-sm">
//               <ShareIcon className="w-8 h-8 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Share and Embed</h3>
//               <p className="text-muted-foreground">Publish your quiz and share it with your audience.</p>
//             </div>
//           </div>
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
//             <p className="text-muted-foreground text-lg">
//               Our pricing is simple and transparent. Choose the plan that best fits your needs.
//             </p>
//           </div>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Free</CardTitle>
//                 <CardDescription>Get started for free</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>1 quiz per month</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Basic quiz customization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Unlimited viewers</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Get Started</Button>
//               </CardFooter>
//             </Card>
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Pro</CardTitle>
//                 <CardDescription>For teams and businesses</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Unlimited quizzes</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Advanced quiz customization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Analytics and reporting</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Team collaboration</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Get Started</Button>
//               </CardFooter>
//             </Card>
//             <Card className="bg-background p-6 rounded-lg shadow-sm">
//               <CardHeader>
//                 <CardTitle>Enterprise</CardTitle>
//                 <CardDescription>Tailored for large organizations</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Dedicated account manager</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Custom branding and integrations</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Advanced security and compliance</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckIcon className="w-5 h-5 text-primary" />
//                     <span>Scalable for large audiences</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button>Contact Sales</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </section>
//         <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 bg-muted">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transform Your Learning Experience</h2>
//             <p className="text-muted-foreground text-lg">
//               Start creating engaging quizzes from your YouTube videos today.
//             </p>
//             <div className="flex justify-center">
//               <Input type="text" placeholder="Enter YouTube video link" className="max-w-md flex-1" />
//               <Button>Convert</Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
//         <div className="flex items-center gap-2">
//           <PlayIcon className="w-6 h-6" />
//           <span className="font-bold text-lg">Video to Quiz</span>
//         </div>
//         <nav className="flex items-center gap-4 mt-4 md:mt-0">
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Privacy
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Terms
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Contact
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   )
// }


// function FilePenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//     </svg>
//   )
// }


// function PlayIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="6 3 20 12 6 21 6 3" />
//     </svg>
//   )
// }


// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }


// function UploadIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" x2="12" y1="3" y2="15" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
