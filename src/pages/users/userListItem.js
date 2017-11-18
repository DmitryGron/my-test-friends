import React from 'react';
import { Link } from 'react-router';

class UserListItem extends React.Component {
  render(){
    const user = this.props.user;
    return(
      <li className="user-list-item">
        <Link
          to={`user/${user.id}`}>
          <div className="user-card">
            <img src={user.avatar} className="user-card-avatar" />
            <div className="user-card-name">{user.name}</div>
          </div>
        </Link>
      </li>
    )
  }
}

export default UserListItem;
