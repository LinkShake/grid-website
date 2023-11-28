"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";

export default function Landing() {
  const [soundPlayable, setSoundPlayable] = useState(false);

  useEffect(() => {
    setSoundPlayable(true);
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.code === "Space" && soundPlayable)
        new Audio("/v8_sound.mp3").play();
    });
  });

  return (
    <>
      <div className="bg-image"></div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#fcd34d",
            textShadow: "2px 2px red",
          }}
        >
          Press <i>Space</i> to unlock the next-gen sound
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "20px",
        }}
      >
        <Link
          href={"/home"}
          style={{
            textDecoration: "none",
            fontSize: "20px",
          }}
          id="more-link"
          onClick={() => setSoundPlayable(false)}
        >
          <i>MORE...</i>
        </Link>
      </div>
    </>
  );
}
