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

  render() {
    return (
      <figure className="data-container">
        <blockquote id="text"></blockquote>
        <figcaption id="author"></figcaption>
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
