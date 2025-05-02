// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const eventDate = new Date("2025-05-03T16:00:00"); // Cambia la fecha/hora del evento

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openLocation = () => {
    window.open("https://maps.app.goo.gl/nE3ADdHgvaRejrFk7?g_st=aw", "_blank"); // Cambia por tu ubicación real
  };

  return (
    <div className="app">
      <>
        <img src="../gif.2.gif" alt="" className="corner-gif top-left" />
        <img src="../gif.2.gif" alt="" className="corner-gif top-right" />
        <img src="../gif.2.gif" alt="" className="corner-gif bottom-left" />
        <img src="../gif.2.gif" alt="" className="corner-gif bottom-right" />
      </>
      <div className="content">
        <div className="baby-text-container">
          <h2 className="baby-text pink">
            Te invitamos a compartir este bello momento
          </h2>
          <h2 className="baby-text ">
            <span className="baby-text nombre xavi"> Xavi </span>{" "}
            <span className="baby-text nombre color_y">y</span>{" "}
            <span className="baby-text nombre pink">Lizz</span>
          </h2>

          <h2 className="baby-text blue">
            la revelación de Género de nuestro Bebé
          </h2>
        </div>

        <p className="message">Este sábado 03 de mayo de 2025 a las 16H00..!</p>

        {!isPlaying && (
          <button onClick={handlePlayMusic} className="play-button"></button>
        )}

        <audio ref={audioRef} preload="auto">
          <source src="../cancion.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>

        <div className="countdown">
          {timeLeft.days != null ? (
            <span>
              {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </span>
          ) : (
            <span>¡Ya es el día!</span>
          )}
        </div>

        <section className="guess-section">
          <article className="guess guess-girl">
            <h3>Si crees que es niña</h3>
            <span>Viste una prenda rosa y trae pañales Huggies</span>
          </article>
          <article className="guess guess-boy">
            <h3>Si crees que es niño</h3>
            <span>Viste una prenda azul y trae pañitos húmedos</span>
          </article>
        </section>

        <button className="btn-location" onClick={openLocation}>
          Te esperamos aquí..! <span> </span>
          <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
        </button>

        <p className="message">
          ¡No faltes! Será un momento inolvidable lleno de emoción 💙💖
        </p>
      </div>
    </div>
  );
}

export default App;
