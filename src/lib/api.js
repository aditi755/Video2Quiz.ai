export async function fetchSavedQuizzes() {
  try {
    const response = await fetch('/api/getSavedQuiz', {
      method: 'GET',
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to fetch quizzes');
    }

    return result;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw new Error(error.message || 'An unexpected error occurred');
  }
}

//logic
export async function saveQuiz(quizData) {
  const userIdentifier = localStorage.getItem('userIdentifier');
  console.log('api js savequiz', userIdentifier)
  const response = await fetch('/api/saveQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...quizData, userIdentifier }),
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


