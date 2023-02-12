import './App.css';
import React from 'react';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
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
      <figure id="quote-box">
        <blockquote id="text">{this.state.text}</blockquote>
        <figcaption id="author">{this.state.author}</figcaption>
        <div id="action-container">
          <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" rel="noreferrer"><span className="icon-style"><i class="fa-brands fa-twitter"></i></span></a>
          <button id="new-quote" onClick={this.componentDidMount}>Next</button>
        </div>
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
