import React from 'react'
import firebase from '../config/firebase';

const Room = () => {
    return (
        <>
            <h1>Room</h1>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room
