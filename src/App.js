import './App.css';
import React from 'react';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    }
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        };
        return response.json();
      })
      .then(data => {
        this.setState({author: data.author, text: data.content})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <figure className="data-container">
        <blockquote id="text">{this.state.text}</blockquote>
        <figcaption id="author">{this.state.author}</figcaption>
      </figure>
    )
  }
}

function App() {
  return (
    <GetData />
  )
}

export default App;
