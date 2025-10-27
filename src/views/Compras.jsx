import React from 'react';
import Navbar from "../components/Navbar";
import videos from "../assets/data/video_url.json";

export default function Compras() {






  return (
    <div className='bg-neutral-200 min-h-screen'>
      <Navbar />
      <div className="w-full sm:gap-y-7 md:gap-y-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {videos.compras.map((video) => (
          <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">

      
            <div className="p-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
                  <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className='text-neutral-600 text-sm'>{video.fecha}</p>
            </div>
          </div>
        ))}
        <div className="bg-none flex items-center justify-center rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <p className='p-4 bg-[#FF0000] text-white cursor-pointer font-bold rounded-md'>ver más ...</p>

        </div>
      </div>
    </div>
  );
}
