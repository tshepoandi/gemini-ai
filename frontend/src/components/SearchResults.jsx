// import searchResults from '../assets/resultExample.json'
import { useEffect,useState } from 'react'
import SongLayout from './SongLayout';


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
          <li key={index.id} className='my-12'>
            <SongLayout artist={item.artist} title={item.title} thumbnail={item.thumbnail}/>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default SearchResults
