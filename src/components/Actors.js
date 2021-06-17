import React from "react"
import { actors } from "../data"
import Actor from "./Actor"

function Actors() {
   const actorsArr = actors.map(actor => <Actor key={actor.name} {...actor} />)
   return (
      <div>
         <h1>Actors Page</h1>
         <div>{actorsArr}</div>
      </div>
   )
}

export default Actors
