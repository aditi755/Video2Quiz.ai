'use server'
export async function fetchTranscript(videoUrl) {
    try {
      console.log("start fetching url", videoUrl)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transcript`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch transcript');
      }
      console.log('res', res)
  
      const data = await res.json();
      console.log('data', data)
      return data;
    } catch (err) {
      console.log('error fiunf')
      throw new Error(err.message);
    }
  }