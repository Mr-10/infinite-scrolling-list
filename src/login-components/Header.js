import React from "react";

const headerStyle = {
  height: "100%",
  backgroundColor: "#ADD8E6",
  padding: "5px",
};

class Header extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => this.setState({ username: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  fakeLogin = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    if (!username || !password) {
      return alert("Provide valid details!!");
    }
    this.props.login(username, password);
    this.setState({ username: "", password: "" });
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
            placeholder="Username"
            style={{ width: "80px" }}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            style={{ width: "80px" }}
            onChange={this.handlePasswordChange}
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
