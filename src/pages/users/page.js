import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';


export default class UsersPage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }

  componentDidMount(){
    fetch("https://my-test-friends.firebaseio.com/users.json")
    .then(results => (results.json()))
    .then(data => {
      this.setState({ users: data })
    })
  }

  render() {
    const userList = this.state.users && this.state.users.map((user) => {
      return user && <li key={user.id}><Link to={`user/${user.id}`}>{user.name}</Link></li>
    })
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Users</h1>
        <ul role="nav">
          { userList }
        </ul>
      </div>
    );
  }
}
