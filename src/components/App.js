import React from 'react';
import Form from './Form';
import MovieList from './MovieList';

let movieTitles =  [
{
  title: "mean girls",
  watched: true,
  selected: false
},
{
  title:"nice girls",
  watched: true,
  selected: true
}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTitles: [],
      filteredTitles: '',
      searchValue: ''
    }
    this.filterMovie = this.filterMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.updateWatchBins = this.updateWatchBins.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }



  componentDidMount() {}

  filterMovie(input) {
    let filtered = [];
    this.state.allTitles.forEach(title => {
      if(title.title === input) {
        filtered.push(title)
      }
      this.setState(this.state.filteredTitles = filtered)
    })
  }

  addMovie(input) {
    let movieTemplate = {
      title: input,
      watched: false,
      selected: false
    }
    let currentList = this.state.allTitles;
    currentList.push(movieTemplate);
    this.setState(this.state.allTitles = currentList)
  }

  toggleWatched() {}

  updateWatchBins() {}

  toggleSelected() {}

  clearFilter() {
    this.setState({filteredTitles: ''})
  }

  render(){
    return(
    <div>
      <div>
        <Form
        placeholderText={'Add Movie Title'}
        btnClass="greenbtn"
        btnText={'Add'}
        fn={this.addMovie}
        />
      </div>
      <div>
        <Form
        placeholderText={'Search Movies'}
        btnClass="greenbtn"
        btnText={'Search'}
        fn={this.filterMovie}
        />
      </div>
      <button onClick={this.clearFilter}>
        clear filter
      </button>
      <div>
        {this.state.filteredTitles ?
          <MovieList
            titles={this.state.filteredTitles}
            toggleWatched={this.toggleWatched}/>:
          <MovieList
            titles={this.state.allTitles}
            toggleWatched={this.toggleWatched}/>
          }
      </div>
    </div>
  )}
}

export default App;
