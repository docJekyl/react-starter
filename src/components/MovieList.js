import React from 'react';
import Movies from './Movies'

const MovieList = (props) => {

  return (
    <div className="movieListDiv">
      {/* {console.log(props)} */}
      {props.titles.map((movie, i) =>
        <Movies
          toggleWatced={props.toggleWatched}
          movie={movie}
          key={i}
        />)}
    </div>
  );
}


export default MovieList;