import React from 'react';
import UserListItem from './userListItem';


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
      return user && <UserListItem user={user} key={user.id} />
    })

    return (
      <div className="users-page">
        <header className="users-header">
          <div className="container">
            <h1>My Test Friends</h1>
          </div>
        </header>
        <article className="user-cards">
          <div className="container">
            { userList }
          </div>
        </article>
      </div>
    );
  }
}
