import React from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
import SearchField from "./component/search-box/search-boc.component";

class App extends React.Component {
  constructor() {
    super();
    console.log(this);
    this.state = {
      card: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ card: user }));
  }

  OnChangeSearchField = e => {
    this.setState({
      searchField: e.target.value
    });
  };


  render() {
    const { searchField, card } = this.state;

    const filterdUser = card.filter(user =>
      user.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Rebot App</h1>
        <SearchField OnChangeSearchField={this.OnChangeSearchField} />
        <CardList user={filterdUser} />
      </div>
    );
  }
}

export default App;
