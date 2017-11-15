import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
        <ul role="nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    );
  }
}
