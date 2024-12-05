import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles/Login.css';

const Login = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/data/users.json');
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        })();
    }, []);

    const handleLogin = () => {
        const user = users.find(u => u.username === username && u.password === password);
        
        if(user) {
            setIsAuthenticated(true);
            setError('');
            console.log('Login successful!!')
        }else {
            setIsAuthenticated(false);
            setError('Invalid username or password');
        }
    };

    if(isAuthenticated) {
        navigate('/home');
    }

    return (
        <div className="login-page">
          <div className="login-form">
            <h1>Welcome to VacationPlanner!</h1>
            <form>
                <div className="form-inputs">
                    <div className="form-group">
                        <label id="form-label" htmlFor="username">Username:</label>
                        <input 
                            id="username" 
                            type="text" 
                            name="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="form-label" htmlFor="password">Password:</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button onClick={handleLogin}>Login</button>
                <div className="form-links">
                    <p>No Account? Go to <Link to="/create-account">Create Account</Link></p>
                    <p><Link to="/forgot-password">Forgot Password</Link></p>
                </div>
            </form>
          </div>
        </div>
    );
};

export default Login;