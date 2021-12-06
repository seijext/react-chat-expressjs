import React from "react";

export default function Message({ pfpUrl, text, recieving, name, meme }) {
    return (
        <div className={`flex-col w-full space-y-1`}>
            {recieving ? (
                <p className="text-gray-400 text-xs">{name}</p>
            ) : (
                <></>
            )}
            <div
                className={`flex gap-2 ${
                    recieving ? "" : "flex-row-reverse pr-2"
                }`}
            >
                {recieving ? (
                    <img src={pfpUrl} alt="" className="h-8 w-8 rounded-lg" />
                ) : (
                    <></>
                )}
                {meme ? (
                    <img src={meme} alt="" className="w-64 rounded-xl" />
                ) : (
                    <span
                        class={`px-4 py-2 rounded-xl ${
                            recieving
                                ? "border border-white text-white"
                                : "bg-white text-black"
                        } break-words max-w-xs`}
                    >
                        {text}
                    </span>
                )}
            </div>
        </div>
    );
}
