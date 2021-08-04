import React from "react";
export default class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form>
          <input type="text" placeholder="Enter Username" />
          <input type="text" placeholder="Enter Password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
