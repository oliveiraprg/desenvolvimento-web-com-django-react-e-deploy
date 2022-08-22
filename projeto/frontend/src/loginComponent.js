import React from "react";


export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', password: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({username: event.target.value});
      }
    
      handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
      
    handleSubmit(event) {
		var url = 'http://localhost:8000/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem('token', data.token));
        
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
}