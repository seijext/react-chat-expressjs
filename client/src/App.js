import "./index.css";
import React, { useRef, useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogoReact } from "react-ionicons";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

function App() {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <LogoReact color={"#FFF"} height="64px" width="64px" rotate />
            </div>
        );
    }
    if (user) {
        return <ChatRoom />;
    }
    return <SignIn />;
}

export default App;
