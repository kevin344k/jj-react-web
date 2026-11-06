import React from "react";
import VideoGallery from "../components/VideoGallery";
import videos from "../assets/data/video_url.json";

export default function Debates() {
  return (
    <VideoGallery
      eyebrow="Conversaciones"
      title="Debates"
      subtitle="Entrevistas y debates sobre Bitcoin, libertad y dinero."
      videos={videos.debates}
    />
  );
}
