"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const lotties = [
    "https://assets7.lottiefiles.com/packages/lf20_6takxjbf.json",
    "https://assets10.lottiefiles.com/packages/lf20_0lx8iflw.json",
    "https://assets10.lottiefiles.com/packages/lf20_oi68gwcv.json",
    "https://assets5.lottiefiles.com/packages/lf20_vldjl23f.json",
    ];

    export default function LottieGrid() {
    return (
        <div className="grid grid-cols-2 gap-6">
        {lotties.map((src, i) => (
            <div key={i} className="border rounded-xl p-4">
            <Player
                src={src}
                loop
                controls
                autoplay
                style={{ height: 300, width: "100%" }}
            />
            </div>
        ))}
        </div>
    );
    }
