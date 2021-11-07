import React from "react";

const headerStyle = {
  height: "100%",
  backgroundColor: "#ADD8E6",
  padding: "5px",
};

class Header extends React.Component {
  state = {
    username: "",
  };

  handleChange = (e) => this.setState({ username: e.target.value });

  fakeLogin = (e) => {
    const { username } = this.state;
    e.preventDefault();
    if (!username) {
      return alert("Provide valid username!!");
    }
    this.props.login(username);
    this.setState({ username: "" });
  };

  fakeLogout = () => this.props.logout();

  render() {
    const { auth } = this.props;
    if (auth.isLoggedIn) {
      return (
        <div style={headerStyle}>
          <span>
            Welcome <strong>{auth.username}</strong> |{" "}
          </span>

          <button onClick={this.fakeLogout}>Logout</button>
        </div>
      );
    }

    return (
      <div style={headerStyle}>
        <form onSubmit={this.fakeLogin}>
          <input
            value={this.state.username}
            style={{ width: "80px" }}
            onChange={this.handleChange}
          />
          &nbsp; | &nbsp;
          <button>Login</button> &nbsp;| &nbsp;
          <span>Not logged in</span>
        </form>
      </div>
    );
  }
}

export default Header;
