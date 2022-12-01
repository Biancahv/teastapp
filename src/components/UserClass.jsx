import React from "react";

class UserClass extends React.Component {
  render() {
    const nume = this.props.nume;
    const varsta = this.props.varsta;

    return (
      <div>
        <h2> Nume: Bianca </h2>
        <p>Varsta: 19</p>
      </div>
    );
  }
}

export default UserClass;
