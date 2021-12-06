import React, { useState } from "react";
import { db, auth } from "../firebase";
import axios from "axios";
import firebase from "firebase";
import { SendOutline } from "react-ionicons";

export default function SendMessage() {
    const [msg, setMsg] = useState("");

    async function sendMeme(urlMeme) {
        await db.collection("messages").add({
            meme: urlMeme.url,
            photoURL:
                "https://firebasestorage.googleapis.com/v0/b/sei-react-chat.appspot.com/o/K63Ijhfl_400x400.jpeg?alt=media&token=9c285116-63bd-4578-800c-052167b48abb",
            uid: "meme",
            displayName: "🐸 Dankmemer",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    const memeCommand = () => {
        axios.get(`/endpoint`).then((res) => {
            const persons = res.data;
            sendMeme(persons);
        });
    };

    async function sendMessage(e) {
        e.preventDefault();
        if (msg === "") return;
        if (msg === "/meme") {
            setMsg("");
            return memeCommand();
        }
        const { uid, photoURL, displayName } = auth.currentUser;

        await db.collection("messages").add({
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMsg("");
    }
    return (
        <form
            onSubmit={sendMessage}
            className="h-12 border border-white w-full rounded-xl flex justify-between items-center"
        >
            <input
                class="focus:outline-none bg-transparent px-4 placeholder-white w-full"
                type="text"
                placeholder="type a message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button
                className="bg-white h-full text-black rounded-lg w-12 flex justify-center items-center"
                type="submit"
            >
                <SendOutline width="25px" height="25px" />
            </button>
        </form>
    );
}
