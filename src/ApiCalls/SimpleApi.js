import React, { Component } from 'react';

class SimpleApi extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      results: []  
    };
  }

  handleApiCall = (e) => {
    e.preventDefault();
    fetch("https://example.org/products.json")
      .then((res) => res.json())
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <button onClick={this.handleApiCall}>Call API</button>
        <>
        {
            this.state.results.map((item) => (
              <>
              <h2>{item.name}</h2>
              </>

               
            ))
        }: (
            <p>No results to display</p>
          )
        </>
      </>
    );
  }
}

export default SimpleApi;
