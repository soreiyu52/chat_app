import React, { useState, useEffect } from 'react'
import firebase from '../config/firebase';

const Room = () => {
    const [messages, setMessages] = useState(null)

    // snapshotイベントは、対象のコレクション(今回はmessages)に変更があるたびに発生する
    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                // map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し
                // その結果からなる新しい配列を生成します
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                // 内部データ確かめよう
                console.log(messages);
                setMessages(messages);
            });
    }, [])

    return (
        <>
            <h1>Room</h1>
            <ul>
                {/* messagesを取得する前に出力されることを抑止する。 */}
                {messages && messages.map(messages =>
                    <li key={messages.user}> {messages.context} </li>
                )}
            </ul>
            {/* ログアウト機能追加 */}
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room
