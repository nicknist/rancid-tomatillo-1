import React from 'react';
import './Movie.scss';

const Movie = ({ title, releaseDate, poster, backdrop, overview, avgRating, userRating }) => {
  return (
    <article className='movie-card'>
      <img src={poster} className='movie-poster'/>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
      <p>{avgRating}</p>
      <p>{userRating ? userRating : ''}</p>
    </article>
  )
}

export default Movie
