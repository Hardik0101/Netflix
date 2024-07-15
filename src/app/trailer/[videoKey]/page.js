"use client";

const MovieTrailer = ({ params }) => {
  const videoUrl = `https://www.youtube.com/embed/${params.videoKey}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative pb-[56.25%] w-full max-w-[100vw] lg:max-w-[100vw] xl:max-w-[100vw]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
