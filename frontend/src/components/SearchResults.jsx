// import searchResults from '../assets/resultExample.json'
import { useEffect,useState } from 'react'
import SongLayout from './SongLayout';


const SearchResults = () => {
    

    const [searchData,setSearchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        fetch('http://localhost:3000/genius/search',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ search: searchTerm})
        })
        .then(res => res.json())
        .then(data => setSearchData(data))
        .catch(error => console.error("error fetching data ", error))
    },[searchTerm])
    const handleSearchInputChange = event => {
        setSearchTerm(event.target.value);
      };
  return (
    <div className='px-20'>
       <div>
      {/* <h1>Search Results</h1> */}
      <input type="text" value={searchTerm} onChange={handleSearchInputChange} className='border-2 border-black rounded-md px-2 py-1' />
      <ul className='grid grid-cols-1 '>
        {searchData.map((item, index) => (
          <li key={index.id} className='my-12'>
            <SongLayout id={item.id} artist={item.artist} title={item.title} thumbnail={item.thumbnail}/>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default SearchResults
