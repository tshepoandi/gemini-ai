import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const SongLyrics = () => {
  const [songData,setSongData] = useState(null)
  const {songDetails} = useParams()
  const [translation,setTranslation] = useState("")
  const decodedURI = decodeURIComponent(songDetails)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/genius/song', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ post: decodedURI }) // Assuming decodedURI is defined elsewhere
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSongData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [decodedURI]);

  useEffect(()=>{
    // generateText
    try {
      const fetchTranslation = async()=> {
        const response = await fetch('http://localhost:3000/gemini/send-prompt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: songData.lyrics })
        });
        const data = await response.json();
        setTranslation(data);
      }
      if(songData?.lyrics){
        fetchTranslation()
      }
    } catch (error) {
      console.log(error)
    }
  },[songData])
  return (
    <div className='mx-4'>
      <div>
        <h1 className='text-3xl my-4 font-extrabold'>Song Knowledge</h1>
        <div>
          <p style={{whiteSpace:"pre-line"}}>
          
          {songData ? (
              <div>
                <div className='my-4 collapse collapse-plus bg-base-200'>
                  <input type="radio" name="my-accordion-3"/>
                  <div className="collapse-title text-xl font-medium">
                    <h1>View Song Lyrics</h1>
                  </div>
                  <div className="collapse-content"> 
                    {songData.lyrics}
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    Translation
                  </div>
                  <div className="collapse-content">
                    {translation.generateText}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </p>
        </div>
      </div>
      
      
    </div>
  )
}

export default SongLyrics
