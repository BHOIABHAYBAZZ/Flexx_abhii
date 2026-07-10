import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

import banner1 from "../assets/images/baner1.png";
import gym1 from "../assets/images/gym1.png";
import gym2 from "../assets/images/gym2.png";

const slides = [banner1, gym1, gym2];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <button
        className="prev-btn"
        onClick={() =>
          setCurrentSlide(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
          )
        }
      >
        &#10094;
      </button>

      <img
        src={slides[currentSlide]}
        alt={`Banner ${currentSlide + 1}`}
        className="hero-image"
        loading="eager"
      />

      <button
        className="next-btn"
        onClick={() =>
          setCurrentSlide((currentSlide + 1) % slides.length)
        }
      >
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}