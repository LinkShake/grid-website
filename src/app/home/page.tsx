"use client";

import { Carousel } from "@/components/Carousel";
import "../style.css";
import { useEffect, useState } from "react";

export default function Home() {
  const resources = [
    {
      text: "Unreal Engine docs",
      link: "https://docs.unrealengine.com/5.3/en-US/",
      hiddenContent: "The official Unreal Engine documentation site",
    },
    {
      text: "Epic dev portal",
      link: "https://dev.epicgames.com/community/unreal-engine/learning",
      hiddenContent:
        "The Epic Games developer portal with planty of learning material both from community and developers",
    },
    {
      text: "Interesting devlogs",
      link: "https://www.youtube.com/@solomon-gumball",
      hiddenContent:
        "A small channel that makes devlogs about the development of a skiing based game with UE5",
    },
    {
      text: "Great overall UE channel",
      link: "https://www.youtube.com/@PrismaticaDev",
      hiddenContent: "A fantastic channel that makes content about UE4/UE5",
    },
    {
      text: "UE Cinematics channel",
      link: "https://www.youtube.com/@JoshToonen",
      hiddenContent:
        "A channel about creating cinematics and VFX in UE5 from a guy who worked on films such as 'Ready Player One' and 'Avatar the way of water'",
    },
    {
      text: "10 UE5 tips",
      link: "https://www.youtube.com/watch?v=ZF7Vwc8L1ok",
      hiddenContent:
        "Fantastic video that shows 10 usefull and easy tricks to make better content in UE5",
    },
  ];

  const [activeHiddenContent, setActiveHiddenContent] = useState(-1);

  const [shouldFirstContainerAnimate, setShouldFirstContainerAnimate] =
    useState(true);
  const [shouldSecondContainerAnimate, setShouldSecondContainerAnimate] =
    useState(true);

  const [resourcesModalOpen, setResourcesModalOpen] = useState(false);

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

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setResourcesModalOpen(false);
    });
  });

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
              Unreal Engine 5.2 is out: the new procedural generation framework
              is available to all developers
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
                {"Kratos'"} personal growth make God of War (2018) a standout in
                the action-adventure genre.
              </p>
            </div>
            <div id="second-top">
              <h3>Batman Arkham Knight</h3>
              <br />
              <p>
                Batman: Arkham Knight, the final chapter in Rocksteady{" "}
                {"Studios'"}
                Arkham series, is a 2015 video game set in a besieged Gotham
                City. Players embody Batman, navigating intense combat and
                utilizing the iconic Batmobile to thwart the enigmatic Arkham
                {"Knight's"} plans. The gripping narrative unravels the mystery
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
            // overflowY: "auto",
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
              <h3>Hellblade: {"Senua's"} Sacrifice</h3>
              <br />
              <p>
                Released in 2017, Hellblade:{" Senua's"} Sacrifice, by Ninja
                Theory, offers a unique action-adventure experience. Following
                the journey of Senua, a Celtic warrior with psychosis, the game
                delves into Norse mythology as she battles through the Viking
                underworld. Hellblade stands out for its authentic portrayal of
                mental illness, using binaural audio and striking visuals to
                depict {"Senua's"} hallucinations. The narrative, infused with
                psychological horror, creates an immersive and emotionally
                resonant gaming experience, leaving a lasting impact.
              </p>
            </div>
            <div id="second-bottom">
              <h3>The day before</h3>
              <br />
              <p>
                {'"The Day Before"'} is a 2022 survival game by FNTASTIC,
                plunging players into a post-apocalyptic world teeming with
                zombies. Navigating the desolate landscape, scavenging
                resources, and facing both the undead and fellow survivors,
                players must cooperate to endure the harsh realities of the
                collapse. With realistic graphics and intense gameplay,{" "}
                {`"The Day
                Before"`}{" "}
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
          <button
            style={{
              backgroundColor: "black",
              boxShadow: ".1em .1em .1em 2px #fcd34d",
              border: "none",
              height: "2rem",
              width: "6rem",
              borderRadius: "7.5px",
              cursor: "pointer",
              transition: ".2s",
            }}
            id="resources-btn"
            onClick={() => setResourcesModalOpen(true)}
          >
            Resources
          </button>
        </footer>
        {resourcesModalOpen && (
          <>
            <div
              id="learning-resources-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: " blur(4px)",
                zIndex: 100,
                transition: "all 0.5s",
              }}
              onClick={() => setResourcesModalOpen(false)}
              // onLoad={() => {
              //   console.log("i am loaded");
              // }}
            ></div>
            <div
              id="learning-resources"
              style={{
                width: "20rem",
                height: "40rem",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 101,
                backgroundColor: "black",
                boxShadow: "0.15em .1em .5em .25em  #fcd34d",
                paddingTop: "20px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                }}
                id="sources-ul"
              >
                {resources.map(({ text, link, hiddenContent }, idx) => {
                  return (
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setActiveHiddenContent(idx);
                      }}
                      onMouseLeave={() => {
                        setActiveHiddenContent(-1);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <div className="source-div">
                        <a href={link} target="_blank">
                          {text}
                        </a>
                        <button
                          className="source-btn"
                          onClick={() => {
                            setActiveHiddenContent(
                              activeHiddenContent === idx ? -1 : idx
                            );
                          }}
                        >
                          {activeHiddenContent === idx ? "-" : "+"}
                        </button>
                      </div>
                      {activeHiddenContent === idx && (
                        <div className="hidden-content">{hiddenContent}</div>
                      )}
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
