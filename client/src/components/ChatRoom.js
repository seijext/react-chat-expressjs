import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import Message from "./Message";

export default function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        db.collection("messages")
            .orderBy("createdAt")
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView();
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="flex-1 bg-black h-screen w-screen flex justify-center items-center select-none">
            <div className="w-full h-full md:w-3/4 md:h-5/6 lg:w-1/2 rounded-3xl flex text-white sm:border-white sm:border flex-col justify-between p-4">
                <div className="h-12 flex justify-between items-center px-4">
                    <h1 className="text-xl font-bold">🐶 Bonkers</h1>
                    <SignOut />
                </div>
                <div className="flex-1 flex-col space-y-4 overflow-x-hidden overflow-y-auto my-4 chat-scroll">
                    {messages.map(
                        ({ id, text, photoURL, uid, displayName, meme }) => (
                            <Message
                                key={id}
                                pfpUrl={photoURL}
                                text={text}
                                meme={meme}
                                name={displayName}
                                recieving={
                                    uid === auth.currentUser.uid ? false : true
                                }
                            />
                        )
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <SendMessage />
            </div>
        </div>
    );
}
