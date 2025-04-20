import React, { useState } from "react";
import {
  Download,
  Search,
  Calendar,
  IndianRupee,
  HousePlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


import { useLanguage } from "../../context/LanguageContext";

const CowIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
<path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>


);

const CowSevaCollection = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  const content = {
    title: {
      hi: "गौ सेवा संग्रह",
      en: "Cow Seva Collection",
    },
    description: {
      hi: "हमारी गौशाला में किए गए कार्यों का संग्रह",
      en: "Collection of works done in our gaushala",
    },
    donations: [
      {
        id: 1,
        name: { hi: "राजेश ", en: "Rajesh " },
        amount: 5000,
        date: "2025-04-10",
        place: { hi: " गोशाला", en: " Goshala" },
        purpose: { hi: "चारा और चिकित्सा", en: "Feed and Medicine" },
      },
      {
        id: 2,
        name: { hi: "प्रिय ", en: "Priya " },
        amount: 3000,
        date: "2025-04-05",
        place: { hi: "गाय आश्रय", en: " Cow Shelter" },
        purpose: { hi: "रखरखाव", en: "Maintenance" },
      },
      {
        id: 3,
        name: { hi: "अमित ", en: "Amit " },
        amount: 10000,
        date: "2025-03-28",
        place: { hi: " गोशाला", en: " Goshala" },
        purpose: { hi: "नया आश्रय निर्माण", en: "New Shelter Construction" },
      },
      {
        id: 4,
        name: { hi: "सुनीता ", en: "Sunita " },
        amount: 2500,
        date: "2025-03-22",
        place: { hi: " गोशाला", en: " Goshala" },
        purpose: { hi: "चिकित्सा उपचार", en: "Medical Treatment" },
      },
      {
        id: 5,
        name: { hi: "विक्रम ", en: "Vikram " },
        amount: 7500,
        date: "2025-03-15",
        place: { hi: " गाय आश्रय", en: " Cow Shelter" },
        purpose: { hi: "चारा", en: "Feed" },
      },
      {
        id: 6,
        name: { hi: "विक्रम ", en: "Vikram " },
        amount: 9500,
        date: "2025-03-05",
        place: { hi: " गाय आश्रय", en: " Cow Shelter" },
        purpose: { hi: "चारा", en: "Feed" },
      },
    ],
    monthlyExpenses: [
      {
        month: { hi: "जनवरी", en: "January" },
        feed: 45000,
        medical: 20000,
        maintenance: 15000,
        staff: 30000,
        total: 110000,
      },
      {
        month: { hi: "फरवरी", en: "February" },
        feed: 42000,
        medical: 18500,
        maintenance: 16000,
        staff: 30000,
        total: 106500,
      },
      {
        month: { hi: "मार्च", en: "March" },
        feed: 47000,
        medical: 25000,
        maintenance: 12000,
        staff: 32000,
        total: 116000,
      },
      {
        month: { hi: "अप्रैल", en: "April" },
        feed: 44000,
        medical: 19000,
        maintenance: 14000,
        staff: 32000,
        total: 109000,
      },
    ],
    sevaPlaces: [
      {
        name: { hi: "गौशाला 1", en: "Goshala 1" },
        address: { hi: "भिंड रोड के पास, एमपी", en: "Near Bhind Road, MP" },
        contact: "+91 99999 99999",
        inCharge: "Ajay",
      },
      {
        name: { hi: "एमपी गाय आश्रय", en: "MP Cow Shelter" },
        address: { hi: "कृष्ण नगर, एमपी", en: "Krishna Nagar, MP" },
        contact: "+91 99999 99999",
        inCharge: "Ramesh",
      },
      {
        name: { hi: "गोवर्धन गोशाला", en: "Govardhan Goshala" },
        address: {
          hi: "गोवर्धन हिल रोड, गोवर्धन, एमपी",
          en: "Govardhan Hill Road, Govardhan, MP",
        },
       contact: "+91 99999 99999",
        inCharge: "Dr. Mohan",
      },
    ],
  };

  const totalDonations = content.donations.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );
  const totalYearlyExpenses = content.monthlyExpenses.reduce(
    (sum, month) => sum + month.total,
    0
  );

  const [activeTab, setActiveTab] = useState("donations");
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination 
  const filteredDonations = content.donations.filter(
    (donation) =>
      searchTerm === "" ||
      donation.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.place[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.purpose[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDonations.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedDonations = filteredDonations.slice(startIndex, startIndex + entriesPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="container mx-auto py-6 px-3 sm:px-4 md:py-8">
        {/* Title and Description */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {content.title[language]}
          </h2>
          <p className="text-gray-600">
            {content.description[language]}
          </p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-700">
                {language === "hi" ? "कुल दान" : "Total Donations"}
              </h3>
              <IndianRupee className="text-orange-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-orange-600">
              ₹{totalDonations.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {language === "hi" ? "पिछले 30 दिन" : "Last 30 days"}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-700">
                {language === "hi" ? "कुल व्यय" : "Total Expenses"}
              </h3>
              <Calendar className="text-orange-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-orange-600">
              ₹{totalYearlyExpenses.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {language === "hi" ? "वर्ष के लिए" : "Year to date"}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-700">
                {language === "hi" ? "संरक्षित गायें" : "Cows Sheltered"}
              </h3>
              <CowIcon className="text-orange-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-orange-600">775</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {language === "hi" ? "सभी केंद्रों में" : "cross all centers"}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-700">
                {language === "hi" ? "सेवा केंद्र" : "Seva Centers"}
              </h3>
              <HousePlus className="text-orange-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-orange-600">
              {content.sevaPlaces.length}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {language === "hi" ? "सक्रिय स्थान" : "Active locations"}
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6 overflow-x-auto">
          <nav className="flex space-x-4 sm:space-x-8">
            <button
              onClick={() => setActiveTab("donations")}
              className={`py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm border-b-2 whitespace-nowrap ${
                activeTab === "donations"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {language === "hi" ? "दान" : "Donations"}
            </button>
            <button
              onClick={() => setActiveTab("expenses")}
              className={`py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm border-b-2 whitespace-nowrap ${
                activeTab === "expenses"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {language === "hi" ? "व्यय" : "Expenses"}
            </button>
            <button
              onClick={() => setActiveTab("places")}
              className={`py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm border-b-2 whitespace-nowrap ${
                activeTab === "places"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {language === "hi" ? "सेवा स्थान" : "Seva Places"}
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "expenses" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  {language === "hi" ? "मासिक खर्च" : "Monthly Expenses"}
                </h2>
                <div className="flex space-x-2 sm:space-x-4">
                  <button className="border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center space-x-2 hover:bg-gray-50 transition text-sm">
                    <Download size={16} />
                    <span className="hidden sm:inline">{language === "hi" ? "रिपोर्ट निर्यात करें" : "Export Report"}</span>
                    <span className="sm:hidden">{language === "hi" ? "निर्यात" : "Export"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Expenses Cards (shown on small screens) */}
            <div className="sm:hidden">
              {content.monthlyExpenses.map((expense, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-900">{expense.month[language]} 2025</h3>
                    <div className="font-bold text-gray-900">₹{expense.total.toLocaleString()}</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{language === "hi" ? "चारा" : "Feed"}:</span>
                      <span>₹{expense.feed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{language === "hi" ? "चिकित्सा" : "Medical"}:</span>
                      <span>₹{expense.medical.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{language === "hi" ? "रखरखाव" : "Maintenance"}:</span>
                      <span>₹{expense.maintenance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{language === "hi" ? "कर्मचारी" : "Staff"}:</span>
                      <span>₹{expense.staff.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table (hidden on small screens) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "महीना" : "Month"}
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "चारा" : "Feed"}
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "चिकित्सा" : "Medical"}
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "रखरखाव" : "Maintenance"}
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "कर्मचारी" : "Staff"}
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "कुल" : "Total"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {content.monthlyExpenses.map((expense, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-medium text-gray-900 text-xs sm:text-sm">
                        {expense.month[language]} 2025
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-500 text-xs sm:text-sm">
                        ₹{expense.feed.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-500 text-xs sm:text-sm">
                        ₹{expense.medical.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-500 text-xs sm:text-sm">
                        ₹{expense.maintenance.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-500 text-xs sm:text-sm">
                        ₹{expense.staff.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                        <div className="font-bold text-gray-900">
                          ₹{expense.total.toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "places" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                {language === "hi"
                  ? "हमारी गौ सेवा केंद्र"
                  : "Our Cow Seva Centers"}
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {language === "hi"
                  ? "हम कई गौशालाएँ (गायों के आश्रय स्थल) चलाते हैं।"
                  : "We maintain several gaushalas (cow shelters)."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {content.sevaPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                  >
                    <div className="h-32 sm:h-48 bg-orange-100 flex items-center justify-center">
                      <CowIcon size={60} className="text-orange-500" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-base sm:text-lg mb-2">
                        {place.name[language]}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3">
                        {place.address[language]}
                      </p>
                      <div className="space-y-1 sm:space-y-2">
                       
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-xs sm:text-sm">
                            {language === "hi" ? "जिम्मेदार:" : "In Charge:"}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{place.inCharge}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-xs sm:text-sm">
                            {language === "hi" ? "संपर्क:" : "Contact:"}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{place.contact}</span>
                        </div>
                      </div>
                      <button className="mt-3 sm:mt-4 w-full bg-orange-100 text-orange-700 rounded-lg py-1.5 sm:py-2 hover:bg-orange-200 transition font-medium text-xs sm:text-sm">
                        {language === "hi" ? "केंद्र पर जाएं" : "Visit Center"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "donations" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  {language === "hi" ? "दान रिकॉर्ड" : "Donation Records"}
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder={
                        language === "hi"
                          ? "दान खोजें..."
                          : "Search donations..."
                      }
                      className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-1.5 sm:py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search
                      className="absolute left-3 top-2 text-gray-400"
                      size={16}
                    />
                  </div>
                  <button className="border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition text-sm">
                    <Download size={16} />
                    <span>{language === "hi" ? "निर्यात" : "Export"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Donation Cards */}
            <div className="sm:hidden">
              {paginatedDonations.map((donation) => (
                <div key={donation.id} className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900 text-sm">
                      {donation.name[language]}
                    </div>
                    <div className="text-gray-900 font-bold text-sm">
                      ₹{donation.amount.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <div>{new Date(donation.date).toLocaleDateString()}</div>
                    <div>{donation.place[language]}</div>
                  </div>
                  <div className="flex justify-end">
                    <span className="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-orange-100 text-orange-800">
                      {donation.purpose[language]}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Pagination Controls - Mobile */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  {language === "hi" 
                    ? `${startIndex + 1}-${Math.min(startIndex + entriesPerPage, filteredDonations.length)} कुल ${filteredDonations.length} में से`
                    : `${startIndex + 1}-${Math.min(startIndex + entriesPerPage, filteredDonations.length)} of ${filteredDonations.length}`
                  }
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`p-1 rounded ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-1 rounded ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "दानकर्ता का नाम" : "Donor Name"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "राशि" : "Amount"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "तारीख" : "Date"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "स्थान" : "Place"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {language === "hi" ? "उद्देश्य" : "Purpose"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedDonations.map((donation) => (
                    <tr key={donation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {donation.name[language]}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">
                          ₹{donation.amount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {new Date(donation.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {donation.place[language]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                          {donation.purpose[language]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination Controls - Desktop */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  {language === "hi" 
                    ? `${startIndex + 1}-${Math.min(startIndex + entriesPerPage, filteredDonations.length)} कुल ${filteredDonations.length} में से`
                    : `${startIndex + 1}-${Math.min(startIndex + entriesPerPage, filteredDonations.length)} of ${filteredDonations.length}`
                  }
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded border ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <ChevronLeft size={16} />
                      <span>{language === "hi" ? "पिछला" : "Previous"}</span>
                    </div>
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded border ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{language === "hi" ? "अगला" : "Next"}</span>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CowSevaCollection;
