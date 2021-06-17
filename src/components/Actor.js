import React from "react"

export default function ({ name, movies }) {
   const moviesByActor = movies.map(movie => <li key={movie}>{movie}</li>)

   return (
      <div>
         {name}
         <ul>{moviesByActor}</ul>
      </div>
   )
}
