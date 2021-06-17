import React from "react"

export default function MovieLi({ title, time, genres }) {
   const genreLis = genres.map(genre => <li key={genre}>{genre}</li>)

   return (
      <div>
         {title} : Length: {time}
         <ul>{genreLis}</ul>
      </div>
   )
}
