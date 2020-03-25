import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [user, setUser] = useState({ username: '', password: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axiosWithAuth()
            .post('/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected');
            })
            .catch(err => console.log(err))

    }


    return (
        <div className='inputs'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                {loading ? 'logging in...' : <button>Log in</button>}
            </form>
        </div>
    )
}

export default Login;