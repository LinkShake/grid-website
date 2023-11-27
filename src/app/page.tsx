"use client";

import { Carousel } from "@/components/Carousel";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>The Unreal Engine Journal</h1>
      </header>
      <nav>
        <div id="news-container">
          <h2>
            Official: CD Projekt Red is using UE5 for all of its up coming games
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
      <div className="aside_top">
        <h3>God of War (2018)</h3>
        <br />
        <p>
          In 2018, Santa Monica Studio redefined the God of War franchise with a
          Norse mythology twist on the PlayStation 4. Kratos, the former Greek
          god, embarks on a gripping journey with his son, Atreus. The game
          impresses with its seamless narrative, intense combat, stunning
          visuals, and a one-shot camera style that enhances the cinematic
          experience. The father-son dynamic and Kratos' personal growth make
          God of War (2018) a standout in the action-adventure genre.
        </p>
      </div>
      <div className="aside_bottom">
        <h3>Hellblade: Senua's Sacrifice</h3>
        <br />
        <p>
          Released in 2017, Hellblade: Senua's Sacrifice, by Ninja Theory,
          offers a unique action-adventure experience. Following the journey of
          Senua, a Celtic warrior with psychosis, the game delves into Norse
          mythology as she battles through the Viking underworld. Hellblade
          stands out for its authentic portrayal of mental illness, using
          binaural audio and striking visuals to depict Senua's hallucinations.
          The narrative, infused with psychological horror, creates an immersive
          and emotionally resonant gaming experience that leaves a lasting
          impact.
        </p>
      </div>
      <footer>FOOTER</footer>
    </div>
  );
}
