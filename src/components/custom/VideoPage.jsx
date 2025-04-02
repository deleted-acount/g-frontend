import React from "react";

const Video = () => {
  const videos = [
    {
      id: "d-e0ic5p658",
      thumbnail: `https://img.youtube.com/vi/d-e0ic5p658/hqdefault.jpg`,
      url: "https://youtu.be/d-e0ic5p658"
    },
    {
      id: "gnJ6DxR2TuA",
      thumbnail: `https://img.youtube.com/vi/gnJ6DxR2TuA/hqdefault.jpg`,
      url: "https://youtu.be/gnJ6DxR2TuA"
    },
    {
      id: "9GAF3Uj5BdY",
      thumbnail: `https://img.youtube.com/vi/9GAF3Uj5BdY/hqdefault.jpg`,
      url: "https://youtu.be/9GAF3Uj5BdY"
    },
    {
      id: "K3edRRYRhtI",
      thumbnail: `https://img.youtube.com/vi/K3edRRYRhtI/hqdefault.jpg`,
      url: "https://youtu.be/K3edRRYRhtI"
    },
    {
      id: "HTRAylDOagI",
      thumbnail: `https://img.youtube.com/vi/HTRAylDOagI/hqdefault.jpg`,
      url: "https://youtu.be/HTRAylDOagI"
    },
    {
      id: "MagfvlEf2KI",
      thumbnail: `https://img.youtube.com/vi/MagfvlEf2KI/hqdefault.jpg`,
      url: "https://youtu.be/MagfvlEf2KI"
    },
    {
      id: "1h343roqIvU",
      thumbnail: `https://img.youtube.com/vi/1h343roqIvU/hqdefault.jpg`,
      url: "https://youtu.be/1h343roqIvU"
    },
    {
      id: "J4yCyLCgwd0",
      thumbnail: `https://img.youtube.com/vi/J4yCyLCgwd0/hqdefault.jpg`,
      url: "https://youtu.be/J4yCyLCgwd0"
    },
    {
      id: "Zp884vfPTTA",
      thumbnail: `https://img.youtube.com/vi/Zp884vfPTTA/hqdefault.jpg`,
      url: "https://youtu.be/Zp884vfPTTA"
    },
    {
      id: "F8iMz5U1ACs",
      thumbnail: `https://img.youtube.com/vi/F8iMz5U1ACs/hqdefault.jpg`,
      url: "https://youtu.be/F8iMz5U1ACs"
    }
  ];

  return (
    <div 
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-yellow-500/30">
                <p className="text-base sm:text-lg font-medium text-yellow-100">वीडियो गैलरी</p>
              </div>
            </div>
          </div>

          {/* Video  */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videos.map((video, index) => (
                <div 
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <a 
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video bg-gray-100"
                  >
                   
                    <img
                      src={video.thumbnail}
                      alt={`Video ${index + 1} thumbnail`}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                      }}
                    />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600/90 text-white">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>

               
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium truncate">
                      गहोई वैश्य महासभा वीडियो {index + 1}
                    </p>
                    <p className="text-gray-200 text-sm">
                      Click to watch on YouTube
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video; 