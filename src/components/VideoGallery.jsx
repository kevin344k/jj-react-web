import React, { useState } from "react";
import { Play } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";

function VideoItem({ video }) {
  const [playing, setPlaying] = useState(false);
  const id = video.id.split("&")[0];

  return (
    <article className="group overflow-hidden rounded-2xl border border-ui-border bg-ui-bg2 transition duration-300 hover:-translate-y-1 hover:border-btc/50">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 h-full w-full" aria-label={`Reproducir ${video.title}`}>
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-btc text-black shadow-xl transition group-hover:scale-110">
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-3 font-display text-lg font-bold leading-snug">{video.title}</h3>
        {video.fecha && <p className="mt-2 text-sm text-ui-muted">{video.fecha.trim()}</p>}
      </div>
    </article>
  );
}

export default function VideoGallery({ eyebrow, title, subtitle, videos }) {
  return (
    <div className="min-h-screen bg-ui-bg font-body text-ui-text">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@jjchagerben"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-btc px-6 py-3 font-bold text-btc transition hover:bg-btc/10"
          >
            Ver más en YouTube
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
