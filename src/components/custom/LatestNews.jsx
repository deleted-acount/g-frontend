import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../context/LanguageContext";

const API_URL = "http://localhost:1337";

const LatestNews = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentNewsItem, setCurrentNewsItem] = useState(null);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const newsPerPage = 4;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(
          `${API_URL}/api/latest-news-items?populate[0]=Title&populate[1]=Description&populate[2]=Images`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const result = await response.json();
        console.log('Raw API response:', result);

        if (!result.data || !Array.isArray(result.data)) {
          throw new Error('Invalid data structure received');
        }

        const fetchedNews = result.data.map((item) => {
          // Get both language versions for title and description
          const hiTitle = item.Title?.[0]?.hi || '';
          const enTitle = item.Title?.[0]?.en || '';
          
          // Process description properly to get full text
          const hiDesc = item.Description?.[0]?.hi?.map(block => 
            block.children?.map(child => child.text).join('')
          ).join('\n') || '';
          
          const enDesc = item.Description?.[0]?.en?.map(block => 
            block.children?.map(child => child.text).join('')
          ).join('\n') || '';
          
          return {
            id: item.id,
            title: {
              hi: hiTitle,
              en: enTitle || hiTitle // fallback to hindi if eng not available
            },
            description: {
              hi: hiDesc,
              en: enDesc || hiDesc // fallback to hindi if eng not available
            },
            date: item.Date ? new Date(item.Date) : new Date(0),
            formattedDate: item.Date ? new Date(item.Date).toLocaleDateString() : '',
            location: item.Location || '',
            images: item.Images?.map(img => {
              const url = img.url;
              return url ? (url.startsWith('http') ? url : `${API_URL}${url}`) : '';
            }) || []
          };
        });

        // Sort news by date in descending order (newest first)
        fetchedNews.sort((a, b) => b.date - a.date);

        console.log('Processed news:', fetchedNews);
        setNews(fetchedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(news.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const openModal = (image, newsItem) => {
    setSelectedImage(image);
    setCurrentNewsItem(newsItem);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentNewsItem(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    if (!currentNewsItem) return;
    const currentIndex = currentNewsItem.images.indexOf(selectedImage);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentNewsItem.images.length;
    } else {
      newIndex = (currentIndex - 1 + currentNewsItem.images.length) % currentNewsItem.images.length;
    }

    setSelectedImage(currentNewsItem.images[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentNewsItem]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-red-50/30 to-gray-50">
      <Helmet>
        <title>{language === "hi" ? "समाचार - गहोई समाज" : "News - Gahoi Samaj"}</title>
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : error ? (
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === "hi" ? "समाचार लोड करने में त्रुटि" : "Error Loading News"}
              </h3>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : news.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === "hi" ? "कोई समाचार नहीं मिला" : "No News Found"}
              </h3>
              <p className="text-gray-600">
                {language === "hi" 
                  ? "वर्तमान में कोई समाचार उपलब्ध नहीं है"
                  : "There are currently no news items available"}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {currentNews.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {item.title[language]}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        {item.formattedDate}
                      </div>
                      {item.location && (
                        <div className="flex items-center">
                          <span className="mr-2">📍</span>
                          {item.location}
                        </div>
                      )}
                    </div>
                    <div className="text-gray-700 mb-6 whitespace-pre-wrap leading-relaxed">
                      {item.description[language].split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    {item.images && item.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {item.images.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-video cursor-pointer"
                            onClick={() => openModal(image, item)}
                          >
                            <img
                              src={image}
                              alt={`${item.title[language]} - ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full ${
                  currentPage === 1 ? 'bg-gray-200' : 'bg-red-600 text-white'
                }`}
              >
                {language === "hi" ? "पिछला" : "Previous"}
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full ${
                  currentPage === totalPages ? 'bg-gray-200' : 'bg-red-600 text-white'
                }`}
              >
                {language === "hi" ? "अगला" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal with Carousel */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeModal}
        >
          <div 
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            {currentNewsItem && currentNewsItem.images.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={() => {
                    const currentIndex = currentNewsItem.images.indexOf(selectedImage);
                    const prevIndex = (currentIndex - 1 + currentNewsItem.images.length) % currentNewsItem.images.length;
                    setSelectedImage(currentNewsItem.images[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => {
                    const currentIndex = currentNewsItem.images.indexOf(selectedImage);
                    const nextIndex = (currentIndex + 1) % currentNewsItem.images.length;
                    setSelectedImage(currentNewsItem.images[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentNewsItem.images.indexOf(selectedImage) + 1} / {currentNewsItem.images.length}
                </div>
              </>
            )}

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 p-2 rounded-full transition-all"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
