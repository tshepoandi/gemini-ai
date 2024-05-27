// import searchResults from '../assets/resultExample.json'
import { useEffect,useState } from 'react'


const SearchResults = () => {

    const [searchData,setSearchData] = useState([]);

    useEffect(()=>{
        fetch('/resultExample.json')
        .then(res => res.json())
        .then(data => setSearchData(data))
        .catch(error => console.error("error fetching data ", error))
    },[])
  return (
    <div className='px-20'>
       <div>
      <h1>Search Results</h1>
      <ul>
        {searchData.map((item, index) => (
          <li key={index} className='flex justify-between w-[75%] my-12'>
            <div className='text-start'>
                <h1 className='text-2xl'>{item.title}</h1>
                <p>{item.artist}</p>
            </div>
            <div>
                <img src={item.thumbnail} alt="song thumbnail"></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default SearchResults
