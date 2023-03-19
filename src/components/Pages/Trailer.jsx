import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams ,useNavigate } from 'react-router-dom';

const Trailer = ({movies}) => {
    const navigate = useNavigate();
    const {id} = useParams()



    const movie = movies.find((movie)=>movie.id === +id)

    return (
    <div>
        
        <h3> Movie Title : {movie.name}  </h3>
        <YouTube videoId={movie.trailerId}  />
        <h3>Description :</h3>
        <p> {movie.description} </p>
        <button onClick={()=>navigate(-1)}>Back To Movies List</button>
    </div>
  )
}

export default Trailer