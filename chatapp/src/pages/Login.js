import React from 'react';

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        // getElementByIdで取得するID
                        id='email'
                        name='email'
                        // 初期値'Email'を入れる
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        // getElementByIdで取得するID
                        id='password'
                        name='password'
                        // 初期値'password'を入れる
                        placeholder='password'
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login
