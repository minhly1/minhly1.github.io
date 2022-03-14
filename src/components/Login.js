import React, { useState } from 'react';
import { connect } from 'react-redux'
import { toggleLogin } from '../actions/index.js'
import { useNavigate } from "react-router-dom";

const Login = ({dispatch}) => {
    // {username: , password: }
    const [ userInput, setUserInput ] = useState('');
    const navigate = useNavigate();

    let authority = {
        'admin': '123',
        'mint': '123',
    }

    const handleChange = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (authority[userInput.username] && userInput.password === authority[userInput.username]) {
            dispatch(toggleLogin());
            navigate("/");
        }
        else alert("The username or password you entered is incorrect");
        setUserInput(''); 
    }
    return (
        <div className="App">
            <header>
                <h1>Login</h1>
            </header>
            
            {/* Login form*/}
            <div className='container'>
                    <form className='persistent-header' onSubmit={handleSubmit}>
                        <label> Username:
                            <input
                                className=''
                                style={{
                                    backgroundColor: "rgba(255, 255, 255)",
                                    border: "2px solid rgba(255, 255, 255, 0.1)",
                                    margin: "10px",
                                    height: "20px",
                                    width: "200px",
                                }}
                                name="username"
                                type="text"
                                value={userInput.username ? userInput.username : ''}
                                onChange={handleChange} />
                        </label>
                        
                        <label> Password:
                            <input
                                className=''
                                style={{
                                    backgroundColor: "rgba(255, 255, 255)",
                                    border: "2px solid rgba(255, 255, 255, 0.1)",
                                    margin: "10px",
                                    height: "20px",
                                    width: "200px",
                                }}
                                name="password"
                                type="password"
                                value={userInput.password ? userInput.password : ''}
                                onChange={handleChange} />
                        </label>
                        <button type="submit" className='todo-list-item-button'> Login </button>
                    </form>
                </div>

            <br/> 
            <footer>Made by Lee Kim Min</footer>
        </div> 
    );
};

export default connect()(Login);