import React from "react";
import { auth } from "../firebase";
import { ExitOutline } from "react-ionicons";

export default function SignOut() {
    return (
        auth.currentUser && (
            <button
                className="flex gap-2 justify-center items-center"
                onClick={() => auth.signOut()}
            >
                <span className="text-sm text-gray-400">Leave this shit</span>
                <ExitOutline width="20px" height="20px" color="#9CA3AF" />
            </button>
        )
    );
}
