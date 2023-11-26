"use client";

import { useEffect, useMemo, useState } from "react";
import "./style.css";
import dynamic from "next/dynamic";
import {
  IconMicrophone,
  IconMicrophoneOff,
  IconVideo,
  IconVideoOff,
} from "@tabler/icons-react";

export default function Home() {
  const [geoLocation, setGeoLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [constraints, setConstraints] = useState({
    video: true,
    audio: true,
  });
  const cb = (stream: any) => {
    const video = document.querySelector("video");
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => cb(stream))
      .catch((err) => {
        if (
          err.message ===
          "Failed to execute 'getUserMedia' on 'MediaDevices': At least one of audio and video must be requested"
        )
          document.querySelector("video").srcObject = null;
      });
  }, [constraints]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setGeoLocation(data.coords);
    });
  }, []);

  return (
    <div className="container">
      <header>HEADER</header>
      <nav>NAV</nav>
      <main
        style={{
          position: "relative",
        }}
      >
        <video
          src=""
          style={{
            objectFit: "fill",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        ></video>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "10px",
            width: "100%",
            // border: "2px solid red",
            height: "3rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              zIndex: 101,
              backgroundColor: constraints.video ? "red" : "gray",
              height: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setConstraints({
                ...constraints,
                video: !constraints.video,
              });
            }}
          >
            {constraints.video ? (
              <IconVideoOff size={20} />
            ) : (
              <IconVideo size={20} />
            )}
          </button>
          <button
            style={{
              zIndex: 101,
              backgroundColor: constraints.audio ? "red" : "gray",
              height: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setConstraints({
                ...constraints,
                audio: !constraints.audio,
              });
            }}
          >
            {constraints.audio ? (
              <IconMicrophoneOff size={20} />
            ) : (
              <IconMicrophone size={20} />
            )}
          </button>
        </div>
      </main>
      <div className="aside_top">
        <Map coords={[geoLocation.latitude, geoLocation.longitude]} />
      </div>
      <div className="aside_bottom">ASIDE BOTTOM</div>
      <footer>FOOTER</footer>
    </div>
  );
}
