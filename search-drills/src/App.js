import React, { Component } from 'react';
import data from './data';

class App extends Component {
  state = {
    searchTerm: null,
    found: false,
    iterations: 0,
  };

  linearSearch(arr, searchTerm) {
    let iterations = 0;

    for (let i = 0; i < arr.length; i++) {
      iterations++;

      if (arr[i] === searchTerm) {
        return {
          searchTerm,
          found: true,
          iterations
        };
      }
    }
  }

  binarySearch(arr, searchTerm, start = 0, end = arr.length - 1, iterations = 0) {
    iterations++;

    if (start > end) {
      return {
        searchTerm,
        found: false,
        iterations
      }
    }

    const index = Math.floor((start + end) / 2);
    const middle = arr[index];

    if (searchTerm === middle) {
      return {
        searchTerm,
        found: true,
        iterations
      };
    }

    else if (searchTerm > middle) {
      return this.binarySearch(arr, searchTerm, index + 1, end, iterations);
    }

    else if (searchTerm < middle) {
      return this.binarySearch(arr, searchTerm, index - 1, iterations);
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const searchTerm = parseInt(e.target.num.value);
    const searchType = e.target.searchType.value;

    if (searchType === 'Linear') {
        this.setState(this.linearSearch(data, searchTerm));
    }
    if (searchType === 'Binary') {
        const DATA = data.sort((a, b) => a - b);
        this.setState(this.binarySearch(DATA, searchTerm));
    }
  }

  render() {
    return (
      <main className='App'>

        <header role="banner">
          <h1>Search Algorithm Comparison</h1>
        </header>

        <div className="Search_Box">

          <form className="search-forms" onSubmit={this.handleSubmit}>

              <label htmlFor="num">Enter Number:</label>
              <input type="number" id="num" name="num" required></input>

              <h2>Numbers to Choose From:</h2>
              <p>89, 30, 25, 32, 72, 70, 51, 42, 25, 24,</p>
              <p>53, 55, 78, 50, 13, 40, 48, 32, 26,  2,</p>
              <p>14, 33, 45, 72, 56, 44, 21, 88, 27, 68,</p>
              <p>15, 62, 93, 98, 73, 28, 16, 46, 87, 28,</p>
              <p>65, 38, 67, 16, 85, 63, 23, 69, 64, 91,</p>
              <p> 9, 70, 81, 27, 97, 82,  6, 88,  3,  7,</p>
              <p>46, 13, 11, 64, 76, 31, 26, 38, 28, 13,</p>
              <p>17, 69, 90,  1,  6,  7, 64, 43,  9, 73,</p>
              <p>80, 98, 46, 27, 22, 87, 49, 83,  6, 39,</p>
              <p>42, 51, 54, 84, 34, 53, 78, 40, 14,  5</p>
              
              <h2>Select Search Type:</h2>
              <label htmlFor="Linear">Linear Search</label>
              <input type="radio" name="searchType" id="Linear" value="Linear"required></input>
              
              <br/>

              <label htmlFor="binary">Binary Search</label>
              <input type="radio" name="searchType" id="Binary" value="Binary"></input>

              <br/><br/>

              <button type="submit">Search</button>

          </form>

            {this.state.searchTerm !== null && (
                <div>
                    <p>Searching for number {this.state.searchTerm}...</p>
                    <p>Found? {this.state.found ? "Yes" : "No"}</p>
                    <p>It took {this.state.iterations} attempts to find your number.</p>
                </div>
            )}

          </div>
      </main>
    );
  }
}

export default App;
