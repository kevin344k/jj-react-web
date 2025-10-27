function VideoCard({ video }) {
  const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={thumbnail} alt={video.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.title}</h3>
      </div>
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
    </div>
  );
}

export default VideoCard;