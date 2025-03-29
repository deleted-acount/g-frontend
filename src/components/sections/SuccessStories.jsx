import React from 'react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      coupleImage: 'story-4.jpg',
      groomName: 'Rahul Gahoi',
      brideName: 'Priya Gupta',
      date: 'Married on Dec 15, 2023',
      story: 'Found each other through Gahoi Samaj, and it was an instant connection. Our families matched perfectly, and here we are, living our dream together.',
      location: 'Gwalior, MP'
    },
    {
      id: 2,
      coupleImage: '/story-5.jpg',
      groomName: 'Aditya Neekhra',
      brideName: 'Sneha Gahoi',
      date: 'Married on Nov 20, 2023',
      story: 'Our journey began with a simple profile match on Gahoi Matrimony. Today, were blessed to have found our perfect match.',
      location: 'Indore, MP'
    },
    {
      id: 3,
      coupleImage: '/story-3.jpg',
      groomName: 'Vikram Gahoi',
      brideName: 'Nisha Gupta',
      date: 'Married on Oct 5, 2023',
      story: 'Thanks to Gahoi Samaj for bringing us together. Our traditional values and modern outlook matched perfectly.',
      location: 'Bhopal, MP'
    },
    {
      id: 4,
      coupleImage: '/story-2.jpg',
      groomName: 'Ankit Gupta',
      brideName: 'Riya Gahoi',
      date: 'Married on Sept 12, 2023',
      story: 'From the first meeting through Gahoi Matrimony to our wedding day, every moment has been magical.',
      location: 'Jabalpur, MP'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                <img 
                  src="/ring.png" 
                  alt="Wedding Rings" 
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              Beautiful beginnings of forever after through Gahoi Matrimony
            </p>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.coupleImage}
                  alt={`${story.groomName} & ${story.brideName}`}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-medium text-red-300">{story.date}</div>
                  <div className="font-semibold">{story.location}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {story.groomName} <span className="text-red-600">&</span> {story.brideName}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {story.story}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white rounded-full opacity-30"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-red-300 rounded-full opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="w-16 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
