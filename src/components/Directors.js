import React from "react"
import { directors } from "../data"
import Director from "./Director"

function Directors() {
   const directorsArr = directors.map(director => <Director key={director.name} {...director} />)

   return (
      <div>
         <h1>Directors Page</h1>
         {directorsArr}
      </div>
   )
}

export default Directors
