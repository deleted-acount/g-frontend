import React from "react";
import { Helmet } from "react-helmet";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-red-50/30 to-gray-50">
      <Helmet>
        <title>वीडियो गैलरी - गहोई समाज</title>
        <meta
          name="description"
          content="गहोई वैश्य महासभा की वीडियो गैलरी - हमारी गतिविधियों और कार्यक्रमों का संग्रह"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/30 to-red-900/70"></div>
        <img
          src="/videopage-hero.webp"
          alt="Video Gallery Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full w-20 h-20 mx-auto mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              वीडियो गैलरी
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto">
              गहोई वैश्य महासभा की गतिविधियों का दृश्य संग्रह
            </p>
          </div>
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video bg-gray-900 rounded-xl"
                  >
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={`Video ${index + 1} thumbnail`}
                      className="w-full h-full object-cover rounded-xl group-hover:opacity-80 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                      }}
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600/90 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <h3 className="text-white font-medium text-lg mb-1">
                        गहोई वैश्य महासभा वीडियो {index + 1}
                      </h3>
                      <p className="text-gray-200 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        Watch on YouTube
                      </p>
                    </div>
                  </a>
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