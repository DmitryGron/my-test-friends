import React from "react";
import styles from "./style.css";

export default class UserPage extends React.Component {
  componentDidMount(){
    fetch(`https://my-test-friends.firebaseio.com/users/${this.props.params.id}.json`)
    .then(results => (results.json()))
    .then(data => {
      this.setState({ user: data })
    })
  }


  render() {
    if (!this.state || !this.state.user) {
      return null;
    }
    return (
      <div className={styles.content}>
        <h1>{this.state.user.name}</h1>
        <p className={styles.welcomeText}>This is user</p>
      </div>
    );
  }
}
