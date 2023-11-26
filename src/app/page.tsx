"use client";

import { useEffect, useMemo, useState } from "react";
import "./style.css";
import Map from "@/components/Map/Map";
import dynamic from "next/dynamic";
import {
  IconCameraOff,
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
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setGeoLocation(data.coords);
    });
  }, []);

  return (
    <div className="contenitore">
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
        <button
          style={{
            position: "absolute",
            bottom: 0,
            left: "50px",
            zIndex: 101,
            backgroundColor: constraints.video ? "red" : "gray",
          }}
          onClick={() => {
            setConstraints({
              ...constraints,
              video: !constraints.video,
            });
          }}
        >
          {constraints.video ? (
            <IconVideoOff size={14} />
          ) : (
            <IconVideo size={14} />
          )}
        </button>
        <button
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 101,
            backgroundColor: constraints.audio ? "red" : "gray",
          }}
          onClick={() => {
            setConstraints({
              ...constraints,
              audio: !constraints.audio,
            });
          }}
        >
          {constraints.audio ? (
            <IconMicrophoneOff size={14} />
          ) : (
            <IconMicrophone size={14} />
          )}
        </button>
      </main>
      <div className="aside_top">
        <Map coords={[geoLocation.latitude, geoLocation.longitude]} />
      </div>
      <div className="aside_bottom">ASIDE BOTTOM</div>
      <footer>FOOTER</footer>
    </div>
  );
}
