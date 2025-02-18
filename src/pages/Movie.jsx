import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs"

import "../styles/Movie.css"
import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)

  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div className="movie-page">
      {movie && <>
        <MovieCard movie={movie} showLink={false} />
      
      </>}

    </div>
  )
}

export default Movie