"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";

export default function Landing() {
  const [linkVisible, setLinkVisible] = useState(true);

  useEffect(() => {
    new Audio("/v8_sound").play();
  }, []);

  return (
    <>
      <div className="bg-image"></div>
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
        {linkVisible && (
          <Link
            href={"/home"}
            style={{
              textDecoration: "none",
              fontSize: "20px",
            }}
            id="more-link"
          >
            <i>MORE...</i>
          </Link>
        )}
        {/* <audio src="/v8_sound.mp3" autoPlay></audio> */}
        {/* <button
          style={
            {
              // display: "none",
            }
          }
          id="sound"
          onClick={() => {
            new Audio("/v8_sound.mp3").play();
          }}
        >
          play sound
        </button> */}
      </div>
    </>
  );
}
