import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../context/LanguageContext";

const LatestNews = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 4;
  
  const news = [
    {
      id: 1,
      title: {
        hi: "कमलेश्वर महादेव मंदिर पर गहोई समाज के सात जोड़ो ने लिए सात फेरे",
        en: "Seven couples from Gahoi Samaj took seven vows at Kamleshwar Mahadev Temple"
      },
      date: "3 मई 2022",
      location: "करारखेड़ा (पिछोर) जिला शिवपुरी म. प्र.",
      description: {
        hi: "करारखेड़ा (पिछोर) जिला शिवपुरी म. प्र.- दिन्नाक 3 मई 2022 को कमलेश्वर महादेव मंदिर पर चौरासी क्षेत्रीय गहोई वैश्य सभा द्वारा आयोजित 12 वां सामूहिक विवाह सम्मेलन में सर्व प्रथम अथतियों को आमंत्रित कर राष्ट्रकवि डॉ मैथिलीशरण गुप्त एवं चौरासी क्षेत्र के धरोहर पूर्व राजस्व मंत्री स्व लक्ष्मीनारायण गुप्ता के चित्रों पर माल्यार्पण कर दीप प्रज्वलित किया।",
        en: "At Kamleshwar Mahadev Temple, Kararkheda (Pichor) District Shivpuri MP - On May 3, 2022, at the 12th mass marriage conference organized by the Chaurasi Regional Gahoi Vaishya Sabha, the guests were first invited and a lamp was lit after garlanding the pictures of national poet Dr. Maithilisharan Gupt and former Revenue Minister Late Laxminarayan Gupta of Chaurasi region."
      },
      images: [
        "/news/wedding1.webp",
        "/news/wedding2.webp",
        "/news/wedding3.webp",
        "/news/wedding4.webp"
      ]
    },
    {
      id: 2,
      title: {
        hi: "महाकौशल क्षेत्रीय गहोई वैश्य सभा की कार्यकारिणी बैठक सम्पन्न",
        en: "Executive meeting of Mahakaushal Regional Gahoi Vaishya Sabha concluded"
      },
      date: "15 अप्रेल 2022",
      location: "होटल युवराज इन विजयनगर, जबलपुर",
      description: {
        hi: "दीप प्रज्ज्वलन, सूर्य भगवान के पूजन- सूर्य स्तुति, महासभा संस्थापक श्रीयुत नाथूराम जी रेजा के तैलचित्र पर माल्यर्पण, महासभा ध्वजगीत के साथ अ भा गहोई वैश्य महासभा के पूर्व अध्यक्ष श्री केदारनाथ रूसिया जी के मुख्य आतिथ्य एवं श्री शिवकुमार नीखरा जी पूर्व अध्यक्ष महाकौशल क्षेत्र के विशिष्ट आतिथ्य में महाकौशल क्षेत्रीय गहोई वैश्य सभा की कार्यकारिणी बैठक- होटल युवराज इन विजयनगर, जबलपुर में प्रातः 10:45 बजे प्रारम्भ हुई।",
        en: "The executive meeting of Mahakaushal Regional Gahoi Vaishya Sabha began at 10:45 AM at Hotel Yuvraj Inn Vijaynagar, Jabalpur with lamp lighting, Sun God worship, garlanding the oil painting of Mahasabha founder Shri Nathuram Ji Reza, and Mahasabha flag song, under the chief guest Shri Kedarnath Rusia Ji, former president of ABGVM and special guest Shri Shivkumar Nikhra Ji, former president of Mahakaushal region."
      },
      images: [
        "/news/meeting1.webp",
        "/news/meeting2.webp",
        "/news/meeting3.webp",
        "/news/meeting4.webp"
      ]
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(news.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-red-50/30 to-gray-50">
      <Helmet>
        <title>
          {language === "hi" ? "समाचार - गहोई समाज" : "News - Gahoi Samaj"}
        </title>
        <meta
          name="description"
          content={language === "hi" ? "गहोई समाज के नवीनतम समाचार और गतिविधियां" : "Latest news and activities of Gahoi Samaj"}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/30 to-red-900/70"></div>
        <img
          src="/latestnews-hero.webp"
          alt="News Background"
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
                />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {language === "hi" ? "नवीनतम समाचार" : "Latest News"}
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto">
              {language === "hi" 
                ? "गहोई समाज की नवीनतम गतिविधियां और समाचार" 
                : "Latest activities and news of Gahoi Samaj"}
            </p>
          </div>
        </div>
      </div>

      {/* News Content Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {currentNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden "
              >
                <div className="p-6 md:p-8">
                  {/* News Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                      {item.title[language]}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* News Content */}
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {item.description[language]}
                  </p>

                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {item.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video group overflow-hidden rounded-lg shadow-md"
                      >
                        <img
                          src={image}
                          alt={`${item.title[language]} - Image ${index + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 mb-8 flex justify-center items-center space-x-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-full flex items-center ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700 transform hover:-translate-x-1 transition-all duration-200'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {language === "hi" ? "पिछला" : "Previous"}
              </button>
              
              <span className="text-lg font-medium text-gray-700">
                {language === "hi" 
                  ? `पृष्ठ ${currentPage} / ${totalPages}`
                  : `Page ${currentPage} of ${totalPages}`}
              </span>
              
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-full flex items-center ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700 transform hover:translate-x-1 transition-all duration-200'
                }`}
              >
                {language === "hi" ? "अगला" : "Next"}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNews; 