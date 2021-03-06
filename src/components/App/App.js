import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`You are searching Yelp API for "${term}" 😋, at ${location}, with the "${sortBy}" sort by option...`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Apollo Yelp API Project</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        <footer>
          <span>
            This project is reproduced from &copy;Codecademy project Ravenous Yelp clone application
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
