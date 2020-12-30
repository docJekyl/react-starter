import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
    console.log(e)
  }

  submitValue(e) {
    e.preventDefault();
    this.props.fn(this.state.userInput);
  }

render() {
  return (
    <div>
      <form
        className='movieForm'>
        <input
          className='searchBar'
          type='text'
          placeholder={this.props.placeholderText}
          onChange={this.handleInput}
        />
        <input
          type='submit'
          value={this.props.btnText}
          onClick={this.submitValue}
        />
      </form>
    </div>
  )
}


};

export default Form;