import React, { useState } from 'react'

import { moviesData } from './Data'
import MovieCard from './components/Pages/Moviecard'
import AppNavbar from './components/Pages/AppNavbar'

const Movielist = ({movies, searchRating, x}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between", margin:"10px"}}>
        {
            movies
            ?.filter((el)=>el.rating >= searchRating &&
            el.name.toLowerCase().includes(x.toLowerCase().trim()))
            .map((el)=>(
                <MovieCard movie={el} key={el.id} />
            ))
        }
    </div>
  )
}

const ListWithSearch = () => {
  const [searchRating, setSearchRating] = useState(0)
  const [x, setX] = useState("")

  return (
    <div>
      <AppNavbar setSearchRating={setSearchRating} xy={setX} />
      <Movielist movies={moviesData} searchRating={searchRating} x={x} />
    </div>
  )
}

export default ListWithSearch