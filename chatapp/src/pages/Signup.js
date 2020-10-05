import React from 'react'

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        // getElementByIdで取得するID
                        id='email'
                        // 初期値'Email'を入れる
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        // getElementByIdで取得するID
                        id='password'
                        // 初期値'password'を入れるZ
                        placeholder='Password'
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp

