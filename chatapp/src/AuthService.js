import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // 現在ログインしているユーザーを取得するには、
    // Auth オブジェクトでオブザーバーを設定することをおすすめします。
    // useEffect に渡された関数はレンダーの結果が画面に反映された後に動作します
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            // 実行順の確かめ。
            console.log("AuthProvider# useEffect : " + user.email);
            setUser(user);
        });
    }, []);

    // App.jsの AuthProvider に囲んでいる箇所が'children'で取得できる。
    return (
        // 実行順の確かめ。
        console.log("AuthProvider# return"),
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}
