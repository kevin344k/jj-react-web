import React from "react";
import VideoGallery from "../components/VideoGallery";
import videos from "../assets/data/video_url.json";

export default function Compras() {
  return (
    <VideoGallery
      eyebrow="Guías"
      title="Compras"
      subtitle="Aprende a comprar Bitcoin de forma segura, paso a paso."
      videos={videos.compras}
    />
  );
}
