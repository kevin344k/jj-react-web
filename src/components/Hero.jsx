import React from "react";
import video from "../assets/Video/hero_video.mp4";

export default function Hero() {
  return (
    <div>
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
