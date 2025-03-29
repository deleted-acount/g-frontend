import React from 'react'

const SuggestionSection = () => {
  const suggestions = [
    {
      id: 1,
      name: "Priyanka Bijpuriya",
      message: "Sir, I Have Id 25485152 But Not Received ...",
      reply: "आई. डी. पासवर्ड मोबाईल नंबर 94250628 पर S ...",
    },
    {
      id: 2,
      name: "Prabhakar Tikarya",
      message: "1 गहोई बंधु पत्रिका को वेब साइट पर प्रति माह अपलोड...",
      reply: "आपके द्वारा दिए सुझाव पर विचार कर निर्णय लेकर का...",
    },
    {
      id: 3,
      name: "Ankit Gupta",
      message: "सर, मै आपसे आग्रह करता हूँ की आप गहोई बंधु पत्रिका...",
      reply: "Ankit Ji , Gahoi Bandhu Patrika Uplod Na ...",
    },
    {
      id: 4,
      name: "Ajay Gupta",
      message: "सर, मै आपसे आग्रह करता हूँ की आप गहोई बंधु पत्रिका...",
      reply: "Ankit Ji , Gahoi Bandhu Patrika Uplod Na ...",
    }
  ];
  
  return (
    <div className="relative">
   {/* Header with decorative elements */}
   {/* <div className="text-center mb-2 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
          <div className="relative">
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                <img 
                  src="/ring.png" 
                  alt="Wedding Rings" 
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>
            </div>
           
          </div>
        </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-2 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side  */}
          <div className="w-full lg:w-2/3">
            <div className="bg-red-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/News-add.webp" 
                alt="गहोई समाज इंडिया न्यूज़"
                className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] min-[768px]:h-[380px] lg:h-[400px] xl:h-[440px] object-cover object-center"
              />
            </div>
          </div>
          
          {/* Right side  */}
          <div className="w-full lg:w-1/3">
            <div className="h-[300px] sm:h-[400px] lg:h-[440px] flex flex-col">
             
              <div className="bg-[#CC8F1A] text-white font-semibold p-3 rounded-t-lg">
                <h2 className="text-lg sm:text-xl">Suggestion</h2>
                <p className="text-sm sm:text-base">आपका आई डी + पासवर्ड द्वारा भेजा गया है</p>
              </div>
              
              {/* Suggestions List */}
              <div className="bg-white/95 rounded-b-lg shadow-md flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-red-800">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="mb-2">
                      <h3 className="font-medium text-blue-800 text-sm sm:text-base">{suggestion.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-700">{suggestion.message}</p>
                    </div>
                    
                    <div className="mt-2">
                      <span className="text-red-600 font-medium text-xs sm:text-sm">Reply : </span>
                      <p className="text-xs sm:text-sm text-gray-600 ml-1 inline">{suggestion.reply}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         

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
  )
}

export default SuggestionSection