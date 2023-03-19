import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies, searchRating,x}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between", margin:"10px"}}>
        {
            movies
            .filter((el)=>el.rating >= searchRating &&
            el.name.toLowerCase().includes(x.toLowerCase().trim()))
            .map((el)=>(
                <MovieCard movie={el} key={el.id} />
            ))
        }
    </div>
  )
}

export default MoviesList