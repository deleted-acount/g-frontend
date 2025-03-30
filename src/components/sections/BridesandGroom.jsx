import React from 'react';

const BridesandGroom = () => {
  const members = [
    {
      id: 1,
      image: '/01.webp',
      BrideId: 99398715,
      title: 'Pratibha Neekhra',
      Age: 31,
      Education: 'MSc',
      Height: '5feet 3inches (160.02 cm)',
      role: 'Bride'
    },
    {
      id: 2,
      image: '/02.webp',
      BrideId: 99398716,
      title: 'Rahul Bhrijpuria',
      role: 'Groom',
      Age: 28,
      Education: 'B.Tech',
      Height: '5feet 8inches (172.72 cm)'
    },
    {
      id: 3,
      image: '/03.webp',
      BrideId: 99398717,
      title: 'Deeksha Gupta',
      role: 'Bride',
      Age: 25,
      Education: 'MBA',
      Height: '5feet 4inches (162.56 cm)'
    },
    {
      id: 4,
      image: '/04.webp',
      BrideId: 99398718,
      title: 'Pooja Gupta',
      role: 'Bride',
      Age: 27,
      Education: 'M.Com',
      Height: '5feet 5inches (165.1 cm)'
    },
    {
      id: 5,
      image: '/05.webp',
      BrideId: 99398719,
      title: 'Sachin Gupta',
      role: 'Groom',
      Age: 29,
      Education: 'MCA',
      Height: '5feet 9inches (175.26 cm)'
    },
    {
      id: 6,
      image: '/06.webp',
      BrideId: 99398782,
      title: 'Priyanshi Gupta',
      role: 'Bride',
      Age: 20,
      Education: 'B.Com',
      Height: '5 feet 6 inches(167.64)'
    },
    {
      id: 7,
      image: '/07.webp',
      BrideId: 99398721,
      title: 'Lakhan Gupta',
      role: 'Groom',
      Age: 30,
      Education: 'CA',
      Height: '5feet 10inches (177.8 cm)'
    },
    {
      id: 8,
      image: '/08.webp',
      BrideId: 99398722,
      title: 'Prerna Gupta',
      role: 'Bride',
      Age: 24,
      Education: 'B.Arch',
      Height: '5feet 4inches (162.56 cm)'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
              Brides And Grooms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              The start of something beautiful, where every moment is a treasure.
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="relative group transform transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="relative">
                    <span className="block text-xs font-medium text-white">ID: {member.BrideId}</span>
                    <h3 className="text-sm font-bold">{member.title}</h3>
                    <span className="block text-xs font-medium text-white">Age - {member.Age}</span>
                    <p className="text-xs text-white">Education - {member.Education}</p>
                    <p className="text-xs text-white">Height - {member.Height}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 rotate-45 group-hover:rotate-0"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-red-300 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 -rotate-45 group-hover:rotate-0"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="w-16 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridesandGroom;
