import React from 'react'
import { useParams } from 'react-router-dom'

const SongLyrics = () => {
  const {songDetails} = useParams()
  const decodedURI = decodeURIComponent(songDetails)
  return (
    <div>
      Song Knowledge
      {decodedURI.split("+").join(" ")}
    </div>
  )
}

export default SongLyrics
