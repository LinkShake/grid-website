"use client";

import { useEffect, useState } from "react";
import "../app/style.css";

export const Carousel = () => {
  const paragraphs = [
    // General Introduction
    "Unreal Engine, developed by Epic Games, stands as one of the most powerful and versatile game development platforms in the industry. Initially released in 1998, Unreal Engine has undergone significant evolution, becoming a comprehensive suite that caters not only to game developers but also to architects, filmmakers, and other professionals. With its intuitive interface and robust capabilities, Unreal Engine has played a pivotal role in shaping the landscape of modern digital experiences.",

    // Niagara
    "Niagara, Unreal Engine's visual effects system, revolutionizes the creation of dynamic and complex particle systems. Introduced in Unreal Engine 4, Niagara provides developers with a node-based interface to design intricate visual effects for games and simulations. Its flexibility and real-time editing capabilities enable artists to craft immersive environments and lifelike animations. Niagara's ability to simulate a wide range of phenomena, from fire and smoke to fluid dynamics, empowers developers to enhance the visual fidelity of their projects.",

    // Blueprint
    "Blueprint, Unreal Engine's node-based scripting system, empowers developers with varying levels of programming expertise to create game logic and functionality without delving into traditional code. This visual scripting system simplifies the development process, making it accessible to designers and artists. With Blueprint, developers can rapidly prototype and iterate on game mechanics, fostering a more collaborative and iterative approach to game design. This democratization of game development contributes to Unreal Engine's appeal across a diverse range of creative disciplines.",

    // Chaos Destruction System
    "Unreal Engine's Chaos Destruction System is a groundbreaking physics and destruction simulation tool. It enables developers to create realistic, dynamic destruction within their games, bringing environments to life with destructible objects and structures. This system enhances the overall immersive quality of games, allowing for unprecedented realism in scenarios where destruction is a crucial element. Chaos Destruction System provides a robust framework for handling complex physics interactions, enabling developers to craft engaging and visually stunning experiences.",

    // Nanite
    "Nanite virtualized geometry is a cutting-edge technology introduced in Unreal Engine 5, redefining the boundaries of detail and scale. Nanite allows for the rendering of incredibly detailed geometric assets with minimal impact on performance. This innovation facilitates the creation of expansive and highly detailed environments, granting developers the ability to push the boundaries of visual fidelity in their projects. Nanite's ability to handle vast amounts of geometric detail contributes to Unreal Engine's position at the forefront of real-time graphics technology.",

    // Lumen
    "Lumen, another feature of Unreal Engine 5, introduces dynamic global illumination with real-time global illumination and reflections. Lumen adapts to changes in the environment, providing a more immersive and realistic lighting experience. This technology enhances the visual quality of scenes by simulating how light interacts with surfaces in real time. Lumen's dynamic nature allows developers to create visually stunning environments with realistic lighting conditions, further solidifying Unreal Engine's status as a powerhouse in the world of game development and beyond.",

    // Megascan/Quixel
    "The Megascans library is the cornerstone of Quixel's offerings, providing an extensive and ever-expanding array of assets. From photorealistic surface scans to detailed 3D models, Megascans empowers creators to build immersive and realistic environments. The library covers a broad spectrum of materials, including rocks, vegetation, architecture, and much more, making it a go-to solution for artists seeking top-tier assets for their productions.",
  ];
  const [activeParagraph, setActiveParagraph] = useState(0);
  const [visibleVideo, setVisibleVideo] = useState(-1);
  const [verse, setVerse] = useState<"right" | "left">("right");
  const handleBtn = (action: "prev" | "next") => {
    setActiveParagraph(
      action === "prev" ? activeParagraph - 1 : activeParagraph + 1
    );
  };

  const calculateBgImg = (idx: number) => {
    switch (idx) {
      case 0:
        return "https://beforesandafters.com/wp-content/uploads/2021/05/Welcome-to-Unreal-Engine-5-Early-Access-11-16-screenshot.png";
      case 1:
        return "https://media.sidefx.com/uploads/tutorial/3rd_party/simon_v/niagara/niagara_part01.jpg";
      case 2:
        return "https://docs.unrealengine.com/4.27/Images/ProgrammingAndScripting/Blueprints/UserGuide/Timelines/Examples/OpeningDoors/Blueprint/image_21.png";
      case 3:
        return "https://docs.unrealengine.com/4.27/Images/InteractiveExperiences/Physics/ChaosPhysics/ChaosDestruction/ChaosDestructionOverview/GeoCollection_05.jpg";
      case 4:
        return "https://docs.unrealengine.com/5.0/Images/designing-visuals-rendering-and-graphics/rendering-optimization/nanite/nanite-datasize-nanitemeshwithnormal.jpg";
      case 5:
        return "https://docs.unrealengine.com/5.0/Images/building-virtual-worlds/lighting-and-shadows/global-illumination/lumen/TechOverview/lumen-far-field.jpg";
      case 6:
        return "https://i.ytimg.com/vi/5ZjwwtMlNCU/maxresdefault.jpg";
      default:
        return "";
    }
  };

  const calculateVideo = (idx: number) => {
    switch (idx) {
      case 0:
        return "https://www.youtube.com/embed/qC5KtatMcUw?si=X_ZA_tOLVcDPjlAZ";
      case 1:
        return "https://www.youtube.com/embed/04k9JDx-KTM?si=t_HTi-cFKdBae9mX";
      case 2:
        return "https://www.youtube.com/embed/paNTx_uviWg?si=J34SKZ6tK6iXqpRk";
      case 3:
        return "https://www.youtube.com/embed/Xw9QEMFInYU?si=T2yF19izcU2oMFzx";
      case 4:
        return "https://www.youtube.com/embed/ADIldob0Sxg?si=LoAS02OJIaAVetl6";
      case 5:
        return "https://www.youtube.com/embed/sfMG746hk3k?si=XnogA9k9Pimqq0_A";
      case 6:
        return "https://www.youtube.com/embed/ca2ME4Wy0eM?si=MR4BxRleiXoOJ0QF";
      default:
        return "";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeParagraph >= 0 && activeParagraph < paragraphs.length - 1) {
        if (activeParagraph === 0 && verse === "left") {
          setVerse("right");
          setActiveParagraph(activeParagraph + 1);
        } else
          setActiveParagraph(
            verse === "right" ? activeParagraph + 1 : activeParagraph - 1
          );
      } else if (activeParagraph === paragraphs.length - 1) {
        setActiveParagraph(activeParagraph - 1);
        setVerse("left");
      }
    }, 5 * Math.pow(10, 3));

    return () => clearInterval(interval);
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && visibleVideo !== -1) setVisibleVideo(-1);
    });
  });

  return (
    <>
      {paragraphs.map((text, idx) => {
        return (
          <div key={idx}>
            <div
              className="carousel-el"
              style={{
                transform: `translateX(${100 * (idx - activeParagraph)}%)`,
                width: "100%",
                height: "90%",
                position: "absolute",
                top: 0,
                left: 0,
                paddingLeft: "10vw",
                paddingRight: "10vw",
                boxSizing: "border-box",
                // border: "1px solid red",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",

                // fontSize: "20px",
                textAlign: "center",
                // fontWeight: "bold",

                backgroundImage: `url(${calculateBgImg(idx)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: ".2s",
              }}
              onClick={() => setVisibleVideo(idx)}
            >
              {text}
            </div>
            {visibleVideo === idx && (
              <>
                <div
                  className="video-overlay"
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
                  onClick={() => setVisibleVideo(-1)}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    left: 0,
                  }}
                >
                  <iframe
                    id="video"
                    src={calculateVideo(idx)}
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      position: "fixed",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "65rem",
                      aspectRatio: "16 / 9",
                      zIndex: 101,
                    }}
                  ></iframe>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div
        id="carousel-btn-container"
        style={{
          height: "10%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          width: "100%",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <button
          className="carousel-btn"
          onClick={() => {
            handleBtn("prev");
          }}
          disabled={activeParagraph === 0}
        >
          &larr;
        </button>
        <button
          className="carousel-btn"
          onClick={() => {
            handleBtn("next");
          }}
          disabled={activeParagraph === paragraphs.length - 1}
        >
          &rarr;
        </button>
      </div>
    </>
  );
};
