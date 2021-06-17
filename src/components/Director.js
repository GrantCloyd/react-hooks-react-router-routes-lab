import React from "react"

export default function Director({ name, movies }) {
   const moviesByDir = movies.map(movie => <li key={movie}>{movie}</li>)

   return (
      <div>
         {name}
         <ul>{moviesByDir}</ul>
      </div>
   )
}
