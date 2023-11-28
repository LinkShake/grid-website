"use client";

import { Carousel } from "@/components/Carousel";
import "../style.css";
import { useState } from "react";

export default function Home() {
  const [shouldFirstContainerAnimate, setShouldFirstContainerAnimate] =
    useState(true);
  const [shouldSecondContainerAnimate, setShouldSecondContainerAnimate] =
    useState(true);

  const onLongPress = (src: "first" | "second") => {
    console.log("long press");
    if (src === "first") setShouldFirstContainerAnimate(false);
    else setShouldSecondContainerAnimate(false);
  };
  const onLongPressEnd = (src: "first" | "second") => {
    console.log("long press end");
    if (src === "first") setShouldFirstContainerAnimate(true);
    else setShouldSecondContainerAnimate(true);
  };

  return (
    <>
      <div className="bg-image"></div>
      <div className="container">
        <header>
          <h1>
            <span id="T">T</span>
            he <span id="U">U</span>
            nreal <span id="E">E</span>
            ngine Jo
            <span id="u">u</span>
            rna
            <span id="l">l</span>
          </h1>
        </header>
        <nav>
          <div id="news-container">
            <h2>
              Breaking: CD Projekt Red is using UE5 for all of its up coming
              games
            </h2>
            <h2>
              Unreal Engine 5.2 is out: the new procedural generation tool is
              available to all developers
            </h2>
            <h2>UE5 is now industry standard aligned for cinematics </h2>
          </div>
        </nav>
        <main
          style={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Carousel />
        </main>
        <div
          className="aside_top"
          style={{
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          <div
            id="games-container-top"
            style={{
              animationPlayState: shouldFirstContainerAnimate
                ? "running"
                : "paused",
            }}
            onMouseDown={() => onLongPress("first")}
            onMouseUp={() => onLongPressEnd("first")}
            onTouchStart={() => onLongPress("first")}
            onTouchEnd={() => onLongPressEnd("first")}
          >
            <div id="first-top">
              <h3>God of War (2018)</h3>
              <br />
              <p>
                In 2018, Santa Monica Studio redefined the God of War franchise
                with a Norse mythology twist on the PlayStation 4. Kratos, the
                former Greek god, embarks on a gripping journey with his son,
                Atreus. The game impresses with its seamless narrative, intense
                combat, stunning visuals, and a one-shot camera style that
                enhances the cinematic experience. The father-son dynamic and
                Kratos' personal growth make God of War (2018) a standout in the
                action-adventure genre.
              </p>
            </div>
            <div id="second-top">
              <h3>Batman Arkham Knight</h3>
              <br />
              <p>
                Batman: Arkham Knight, the final chapter in Rocksteady Studios'
                Arkham series, is a 2015 video game set in a besieged Gotham
                City. Players embody Batman, navigating intense combat and
                utilizing the iconic Batmobile to thwart the enigmatic Arkham
                Knight's plans. The gripping narrative unravels the mystery
                behind the Arkham Knight, delivering a visually stunning and
                immersive experience that concludes the acclaimed series.
              </p>
            </div>
          </div>
        </div>
        <div
          className="aside_bottom"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <div
            id="games-container-bottom"
            style={{
              animationPlayState: shouldSecondContainerAnimate
                ? "running"
                : "paused",
            }}
            onMouseDown={() => onLongPress("second")}
            onMouseUp={() => onLongPressEnd("second")}
            onTouchStart={() => onLongPress("second")}
            onTouchEnd={() => onLongPressEnd("second")}
          >
            <div id="first-bottom">
              <h3>Hellblade: Senua's Sacrifice</h3>
              <br />
              <p>
                Released in 2017, Hellblade: Senua's Sacrifice, by Ninja Theory,
                offers a unique action-adventure experience. Following the
                journey of Senua, a Celtic warrior with psychosis, the game
                delves into Norse mythology as she battles through the Viking
                underworld. Hellblade stands out for its authentic portrayal of
                mental illness, using binaural audio and striking visuals to
                depict Senua's hallucinations. The narrative, infused with
                psychological horror, creates an immersive and emotionally
                resonant gaming experience that leaves a lasting impact.
              </p>
            </div>
            <div id="second-bottom">
              <h3>The day before</h3>
              <br />
              <p>
                "The Day Before" is a 2022 survival game by FNTASTIC, plunging
                players into a post-apocalyptic world teeming with zombies.
                Navigating the desolate landscape, scavenging resources, and
                facing both the undead and fellow survivors, players must
                cooperate to endure the harsh realities of the collapse. With
                realistic graphics and intense gameplay, "The Day Before"
                delivers a gripping and visually immersive survival experience.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <p>
            Brought you by{" "}
            <a href="https://github.com/LinkShake" target="_blank">
              LinkShake
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
