import React from "react";
import userApi from "../../services/userApi";
import { Link } from 'react-router';

export default class UserPage extends React.Component {
  componentDidMount(){
    userApi.getUsers(this.props.params.id)
    .then(results => (results.json()))
    .then(data => {
      this.setState({ user: data })
    })
  }

  render() {
    if (!this.state || !this.state.user) {
      return null;
    }
    const user = this.state.user;
    return (
      <div className="container user-container">
        <header>
          <div className="back"><Link to={`/`}>Back to users</Link></div>
        </header>
        <main>
          <div className="row">
            <div className="left col-lg-4">
              <div className="photo-left">
                <img className="photo" src={user.avatar} />
              </div>
              <h4 className="name">{user.name}</h4>
              <p className="desc">{user.description}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
