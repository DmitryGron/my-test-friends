import React from 'react';
import { Link } from 'react-router';

const UserListItem = (props) => (
  <li className="user-list-item">
    <Link
      to={`user/${props.user.id}`}>
      <div className="user-card">
        <div className="user-avatar-wrap">
          <img src={props.user.avatar} className="user-card-avatar" />
        </div>
        <div className="user-card-name">{props.user.name}</div>
      </div>
    </Link>
  </li>
);

export default UserListItem;
