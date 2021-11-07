import React, { Component } from "react";
import Card from "./components/Card";
import axios from "axios";
import InfinitScroll from "react-infinite-scroll-component";
import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: 20,
      start: 1,
      msg: "",
    };
  }

  componentDidMount() {
    this.fetchRandomUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      this.setState({
        users: this.state.users,
      });
    }
  }

  fetchRandomUsers() {
    const { count, start } = this.state;
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then((response) => {
        this.setState({ users: response.data.results });
      });
  }

  fetchNextUsers = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + this.state.count });
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then((response) => {
        this.setState({
          users: this.state.users.concat(response.data.results),
        });
      });
  };

  render() {
    return (
      <div className="images">
        <InfinitScroll
          dataLength={this.state.users.length}
          next={this.fetchNextUsers}
          hasMore={true}
          loader={<h4>Loading ... </h4>}
        >
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>
                <Card
                  gender={user.gender}
                  name={`${user.name.first} ${user.name.last}`}
                  picture={user.picture.medium}
                  address={`${user.location.city}, ${user.location.state}`}
                  email={user.email}
                  id={user.login.uuid}
                  nat={user.nat}
                />
              </li>
            ))}
          </ul>
        </InfinitScroll>
      </div>
    );
  }
}

export default Home;
