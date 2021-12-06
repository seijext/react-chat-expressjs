import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase.js";
import { LogoGoogle, LogoReact } from "react-ionicons";

export default function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div className="flex-1 bg-black h-screen w-screen flex justify-center items-center select-none">
            <div className="w-full h-full md:w-3/4 md:h-5/6 lg:w-1/2 rounded-3xl flex justify-around items-center flex-col text-white sm:border-white sm:border">
                <div className="text-2xl flex flex-col justify-center items-center gap-2">
                    <LogoReact
                        color={"#FFF"}
                        height="64px"
                        width="64px"
                        rotate
                    />
                    React shit-chat app
                </div>
                <button
                    onClick={signInWithGoogle}
                    className="border-white border rounded-xl flex flex-row items-center justify-between"
                >
                    <span className="leading-none p-3">Continue with</span>
                    <div className="bg-white p-3 rounded-lg">
                        <LogoGoogle width="25px" height="25px" />
                    </div>
                </button>
            </div>
        </div>
    );
}
