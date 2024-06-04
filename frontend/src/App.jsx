import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults'
import SongLyrics from './pages/SongLyrics'
function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SearchResults/>}/>
        <Route path="/song/:songDetails" element={<SongLyrics/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
