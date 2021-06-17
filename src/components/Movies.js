import React from "react"
import { movies } from "../data"
import MovieLi from "./MovieLi"

function Movies() {
   const moviesArr = movies.map(movie => <MovieLi key={movie.title} {...movie} />)

   return (
      <div>
         <h1>Movies Page</h1>
         <div>{moviesArr}</div>
      </div>
   )
}

export default Movies
