"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";

export default function Landing() {
  const [soundPlayable, setSoundPlayable] = useState(false);
  const [navigatorReady, setNavigatorReady] = useState(
    typeof navigator !== "undefined"
  );
  const isMobile = () => {
    if (navigatorReady) {
      const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent) || window.innerWidth <= 1366;
    }
  };

  useEffect(() => {
    setSoundPlayable(true);
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.code === "Space" && soundPlayable && !isMobile())
        new Audio("/v8_sound.mp3").play();
    });
  });

  useEffect(() => {
    setNavigatorReady(typeof navigator !== "undefined");
  }, [navigatorReady]);

  return (
    <>
      <div className="bg-image"></div>
      {!isMobile() && (
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
      )}
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
