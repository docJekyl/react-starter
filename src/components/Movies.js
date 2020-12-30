import React from 'react';

const Movies = (props) => {
  return(
  <div>
     {/* {console.log(props)} */}
    <div
      className="IndividualTitle">
        {props.movie.title}

    </div>
    <div>
      <button>
        Watched
      </button>
    </div>
  </div>
  )
}


export default Movies;