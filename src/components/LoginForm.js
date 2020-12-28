import React, {useState} from 'react';
import './../style/App.css';
import './../style/LoginForm.css';
export default function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login">
      <h2>Register/Login</h2>
      <input
        className="login__input"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        className="login__input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {props.error ? <div className="error">{props.error}</div> : null}
      <button
        className="login__button"
        onClick={() => props.loginHandler(username, password)}
      >
        Login
      </button>
      <br />
      <strong>New user?</strong>
      <button
        className="login__button"
        onClick={() => props.signupHandler(username, password)}
      >
        Register
      </button>
    </div>
  );
}
