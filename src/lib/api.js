export async function fetchSavedQuizzes(userId) {

  if (!userId) {
    throw new Error('User not authenticated');
  }
  
  try {
    const response = await fetch(`/api/getSavedQuiz?userId=${userId}`, {
      method: 'GET',
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to fetch quizzes');
    }

    return result;
  } catch (error) {
    console.error('Error fetching quizzes api.js:', error);
    throw new Error(error.message || 'An unexpected error occurred');
  }
}


export async function saveQuiz(quizData) {
  // No need to get userIdentifier from localStorage
  console.log('userdata for save clerk', quizData.userIdentifier)
  console.log(quizData.quiz)

  const response = await fetch('/api/saveQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quizData), // Already includes userIdentifier
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || 'Failed to save quiz');
  }
  return result;
}

  
  export async function deleteQuiz(id){
    const response = await fetch('/api/deleteQuiz', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id})
    })
    const result = await response.json();
    console.log(result)
    if(!response.ok){
        throw new Error(result.error || 'Failed to delete quiz');
    }
    return result;
  }

export async function generateTranscript(videoUrl) {
    try {
        const response = await fetch('/api/transcript', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ videoUrl }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to generate transcript from /api.js');
        }

        // Return the JSON data
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error in generateTranscript:', error);
        throw error;  
    }
}


// quiz
// : 
// (5) [{…}, {…}, {…}, {…}, {…}]
// userIdentifier
// : 
// "user_2jvPkU9SkQQfHpVUCUi0tAGSCim" -pic
//user_2jvPkU9SkQQfHpVUCUi0tAGSCim -pic
// user_2jvBYTEH3qlNRVmNSrS5UVXUxyW -simple
// videoUrl
// : 
// "https://youtu.be/-iWaarLI7zI?si=bau7hW1VlMW0-nvz"
// [[Prototype]]
// : 
// Object