import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom"

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function Navbar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles}
        activeStyle={{ background: "darkblue" }}>Home</NavLink>
      <NavLink exact to="/about" style={linkStyles}
        activeStyle={{ background: "darkblue" }}>About</NavLink>
      <NavLink exact to="/login" style={linkStyles}
        activeStyle={{ background: "darkblue" }}>Login</NavLink>
    </div>
  )
}
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>This is my about Component!</h2>
    </div>
  )
}
function Login() {
  return (
    <div>
      <form>
        <div>

          <input type="text" placeholder="enter your username" name="username"></input>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" placeholder="enter your password" name="password"></input>
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </div>
  )
}

ReactDOM.render(<BrowserRouter>
  <Navbar></Navbar>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
</BrowserRouter>, document.getElementById("root"));
