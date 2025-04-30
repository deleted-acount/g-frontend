"use client";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet";

const AllAssembly = () => {
  const [activeTab, setActiveTab] = useState("2019");
  const { language } = useLanguage();

  // Language-specific font class
  const languageFontClass = language === "hi" ? "font-[Noto_Sans_Devanagari]" : "font-inter";

  const translations = {
    pageTitle: {
      hi: "गहोई वैश्य महासभा",
      en: "Gahoi Vaishya Mahasabha"
    },
    pageSubtitle: {
      hi: "सभी महासभाओं का विवरण",
      en: "Details of All Assemblies"
    },
    tab2015: {
      hi: "2015 महासभा",
      en: "2015 Assembly"
    },
    tab2019: {
      hi: "2019 महासभा",
      en: "2019 Assembly"
    },
    tabCentral: {
      hi: "पुरानी महासभा",
      en: "Central Assembly"
    },
    executiveList: {
      hi: "अखिल भारतीय गहोई वैश्य महासभा के निर्वाचित पदाधिकारी गण",
      en: "Elected Office Bearers of the All India Gahoi Vaishya Mahasabha"
    },
    executiveList2015: {
      hi: "अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची-2015",
      en: "All India Gahoi Vaishya Mahasabha Executive List-2015"
    },
    executiveList2019: {
      hi: "अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची-2019",
      en: "All India Gahoi Vaishya Mahasabha Executive List-2019"
    },
    nominatedOfficials2015: {
      hi: "मनोनीत पदाधिकारी गण 2015",
      en: "Nominated Officials 2015"
    },
    nominatedOfficialsCentral: {
      hi: "महासभा के मनोनीत पदाधिकारी एबं का. का. सदस्यों की सूची",
      en: "List of Nominated Officials and Executive Members"
    },
    projectOfficials: {
      hi: "प्रकल्पों के पधाधिकारी",
      en: "Project Officials"
    },
    gahoiBandhuEditorialBoard: {
      hi: "गहोई बंधु संपादक मंडल",
      en: "Gahoi Bandhu Editorial Board"
    }
  };

  const Assembly2015Data = {
    officials: [
      {
        position: language === "hi" ? "राष्ट्रीय अध्यक्ष" : "National President",
        name: language === "hi" ? "श्री कैलाश नारायण सावला" : "Shri Kailash Narayan Sawla",
        address: language === "hi" ? "5/45 कृष्णपुरा डबरा (ग्वालियर) (म. प्र.)" : "5/45 Krishnapura, Dabra (Gwalior) (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425481606" : "Mob. 9425481606",
        image: "/executive/1.webp"
      },
      {
        position: language === "hi" ? "वरिष्ठ उपाध्यक्ष" : "Senior Vice President",
        name: language === "hi" ? "श्रीमती पुष्पा ददरया" : "Smt. Pushpa Dadarya",
        address: language === "hi" ? "3664 मनमोहन नगर, गायत्री मन्दिर के पास, जबलपुर (म.प्र.)" : "3664 Manmohan Nagar, Near Gayatri Mandir, Jabalpur (M.P.)",
        mobile: language === "hi" ? "मोबा. 9479495800" : "Mob. 9479495800",
        image: "/executive/2.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री सतीष सुहाने" : "Shri Satish Suhane",
        address: language === "hi" ? "305 तानसेन अपार्टमेन्ट, तानसेन रोड, ग्वालियर (म.प्र.)" : "305 Tanasen Apartment, Tanasen Road, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425482181" : "Mob. 9425482181",
        image: "/executive/3.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री रमेश सेठ" : "Shri Ramesh Seth",
        address: language === "hi" ? "1389, रिफ्यूजी कॉलोनी, सीपरी बाजार, झांसी (उ.प्र.)" : "1389, Refugie Kholoni, Ceperi Bazar, Jhansi (U.P.)",
        mobile: language === "hi" ? "मोबा. 9415030647" : "Mob. 9415030647",
        image: "/executive/4.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री पुरूशोत्तम पोद्दार" : "Shri Purushottam Poddar",
        address: language === "hi" ? "पोद्दार ज्वैलर्स, इन्दरगढ़ जिला-दतिया (म.प्र.)" : "Poddar Jewellers, Indargarh District-Dattia (M.P.)",
        mobile: language === "hi" ? "मोबा. 9893877819" : "Mob. 9893877819",
        image: "/executive/5.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री कैलाश नारायण सुहाने" : "Shri Kailash Narayan Suhane",
        address: language === "hi" ? "डी-72, विश्णु हाईटेक सिटी बाबडि़याकला भोपाल (म.प्र.)" : "D-72, Vishnu Heights City, Babadiya Kalaya, Bhopal (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425011411" : "Mob. 9425011411",
        image: "/executive/6.webp"
      },
      {
        position: language === "hi" ? "महामंत्री" : "General Secretary",
        name: language === "hi" ? "श्री सतीष महतेले" : "Shri Satish Mahtele",
        address: language === "hi" ? "एच-10, चेतकपुरी, ग्वालियर (म.प्र.)" : "H-10, Chetakpur, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425338638" : "Mob. 9425338638",
        image: "/executive/7.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री राधेश्याम सेठ" : "Shri Radheshyam Seth",
        address: language === "hi" ? "माँ भगवती कृपा, मोटे गणेश गली, खासगी बाजार, ग्वालियर (म.प्र.)" : "Maa Bhagwati Kripa, Motegaon Gani, Khagri Bazar, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425336363" : "Mob. 9425336363",
        image: "/executive/8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री मैथिलीशरण सेठ" : "Shri Mathilisharan Seth",
        address: language === "hi" ? "642 कमलसिंह कॉलोनी, खाती बाबा,झांसी (उ.प्र.)" : "642 Kamalsingh Kholoni, Khati Baba, Jhansi (U.P.)",
        mobile: language === "hi" ? "मोबा. 09415401600" : "Mob. 09415401600",
        image: "/executive/9.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री अशोक नगरिया" : "Shri Ashok Nagariya",
        address: language === "hi" ? "बी-601, षिवदर्षन हाउसिंग सोसायटी, नवी मुम्बई (महा.)" : "B-601, Shivdarsan Housing Society, New Mumbai (M.H.)",
        mobile: language === "hi" ? "मोबा. 9320341782" : "Mob. 9320341782",
        image: "/executive/10.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री जगदीश प्रसाद गेड़ा" : "Shri Jagdish Prasad Gadha",
        address: language === "hi" ? "राममन्दिर के सामने, फालका बाजार, ग्वालियर (म.प्र.)" : "Rammandir, Falak Bazar, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9203305960" : "Mob. 9203305960",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री संजय ब्रजपुरिया" : "Shri Sanjay Bhragpriya",
        address: "910 तुलसी नगर, उरई, जिला-जालौन (उ.प्र.)",
        mobile: language === "hi" ? "मोबा. 9829743382" : "Mob. 9829743382",
        image: "/executive/12.webp"
      },
      {
        position: language === "hi" ? "कोशाध्यक्ष" : "Co-ordinator",
        name: language === "hi" ? "श्री राकेश लहारिया" : "Shri Rakesh Lahariya",
        address: "लहारिया भवन, लोहिया बाजार,ग्वालियर (म.प्र.)",
        mobile: language === "hi" ? "मोबा. 9770252486" : "Mob. 9770252486",
        image: "/executive/13.webp"
      },
      {
        position: language === "hi" ? "प्रचार मंत्री" : "Publicity Minister",
        name: language === "hi" ? "श्री मोहन कनकने" : "Shri Mohan Kanake",
        address: "थोराट की गोठ, लोहिया बाजार,ग्वालियर (म.प्र.)",
        mobile: language === "hi" ? "मोबा. 9425109958" : "Mob. 9425109958",
        image: "/executive/14.webp"
      },
      {
        position: language === "hi" ? "सम्पत्ति न्यास निरी." : "Property Development Coordinator",
        name: language === "hi" ? "श्री मनोज चौधरी" : "Shri Manoj Chauhary",
        address: "बड़ा बाजार, पिछोर, जिला-शिवपुरी (म.प्र.)",
        mobile: language === "hi" ? "मोबा. 9425763325" : "Mob. 9425763325",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अंकेक्षक" : "Coordinator",
        name: language === "hi" ? "श्री प्रदीप नीखरा" : "Shri Pradeep Nihar",
        address: "15 अमलतास फेस-2, चूना भट्टी भोपाल (म.प्र.)",
        mobile: language === "hi" ? "मोबा. 9425011461" : "Mob. 9425011461",
        image: "/executive/15.webp"
      }

    ],
    nominatedOfficials: [
      {
        position: language === "hi" ? "प्रबं." : "Manager",
        name: language === "hi" ? "श्री संजय बिष्वारी" : "Shri Sanjay Bishwari",
        address: language === "hi" ? "राजाबेटी भवन 128/240 एच-1 ब्लॉक किदवई नगर कानपुर (उ.प्र.)" : "Rajabeti Bhawan 128/240 H-1 Block, Kidwai Nagar, Kanpur (U.P.)",
        mobile: language === "hi" ? "मोबा. 9415591278" : "Mob. 9415591278",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "प्रंब." : "Vice President",
        name: language === "hi" ? "श्री ओमप्रकाश सेठ (दाऊ)" : "Shri Om Prakash Seth (Deputy)",
        address: language === "hi" ? "चित्रकूट भवनतेजेन्द्रनाथ की गली, दाल बाजार, ग्वालियर (म.प्र.)" : "Chitrakoot Building, Tejendra Nath Road, Dal Bazar, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425116791" : "Mob. 9425116791",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "कार्यकारी अध्यक्ष" : "Executive Chairman",
        name: language === "hi" ? "श्री भोगीलाल बिलैया" : "Shri Bhogilal Biharia",
        address: language === "hi" ? "न्यू कॉलोनी, करैरा जिला-शिवपुरी (म.प्र.)" : "New Colony, Karara, District-Shivpuri (M.P.)",
        mobile: language === "hi" ? "मोबा. 9406589899" : "Mob. 9406589899",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "केन्द्रीय का. मंत्री" : "Central Minister",
        name: language === "hi" ? "श्री भरत सेठ" : "Shri Bharat Seth",
        address: language === "hi" ? "सनराइज़ होटल ए 2072 . सिविल लाइन ए झाँसी (उ. प्र.)" : "Sanraj Hotel, 2072. Civil Line, Jhansi (U.P.)",
        mobile: language === "hi" ? "मोबा.9415123515" : "Mob. 9415123515",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : "Joint Minister",
        name: language === "hi" ? "श्री कमल तपा" : "Shri Kamal Tap",
        address: language === "hi" ? "आई-25 हरीषंकरपुरम ग्वालियर (म.प्र.)" : "I-25 Harishankarpuram, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 7697219900" : "Mob. 7697219900",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : "Joint Minister",
        name: language === "hi" ? "श्री राकेश रावत" : "Shri Rakesh Rawat",
        address: language === "hi" ? "2 / 403 विवेक खंड ए गोमती नगर ए" : "2 / 403 Vivek Khand, Gomti Nagar, Lucknow (U.P.)",
        mobile: language === "hi" ? "मोबा. 9415312458" : "Mob. 9415312458",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : "Joint Minister",
        name: language === "hi" ? "श्री शिवशंकर सेठ" : "Shri Shivshankar Seth",
        address: language === "hi" ? "सेठ भवन\" सिद्धेश्वर मंदिर के सामने ए सिद्धेश्वर कॉलोनी ए शिवपुरी (म.प्र.)" : "Sheth Building, Shivshankar Mandir, Shivpuri (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425136790" : "Mob. 9425136790",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : "Joint Minister",
        name: language === "hi" ? "श्री राकेश कनकने" : "Shri Rakesh Kanake",
        address: language === "hi" ? "कालेज चौराहा, पिछोर, जिला-शिवपुरी (म.प्र.)" : "Kalec Chouraha, Pichhora, District-Shivpuri (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425490357" : "Mob. 9425490357",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री अशोक सोनी" : "Shri Ashok Soni",
        address: language === "hi" ? "19 राजदेव कॉलोनी, नया कबाड़खाना भोपाल (म.प्र.)" : "19 Rajdev Kholoni, New Kabrakhana, Bhopal (M.P.)",
        mobile: language === "hi" ? "मोबा.9893052500" : "Mob. 9893052500",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री सुदामाप्रसाद सिजरिया" : "Shri Sudamaprasad Sijaria",
        address: language === "hi" ? "मिहोना, जिला-भिण्ड (म.प्र.)" : "Mihan, District-Bhind (M.P.)",
        mobile: language === "hi" ? "मोबा. 9926661905" : "Mob. 9926661905",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री राजकुमार लोहिया" : "Shri Rajkumar Loheia",
        address: language === "hi" ? "पूजा ज्वेलर्स ए सराफा बाजार ए इतवारीए नागपुर (महा.)" : "Puja Jewellers, Sarafa Bazar, Itwara, Nagpur (M.H.)",
        mobile: language === "hi" ? "मोबा. 9422146164" : "Mob. 9422146164",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री सतीष सुहाने" : "Shri Satish Suhane",
        address: language === "hi" ? "44 गुरू घासीदास वार्ड, कुसुमबिला के सामने, रिंग रोड, रायपुर (छ.ग.)" : "44 Gurudas Ward, Kusumbila, Ring Road, Raipur (M.H.)",
        mobile: language === "hi" ? "मोबा. 982616502" : "Mob. 982616502",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : "Organisation Minister",
        name: language === "hi" ? "श्री प्रमोद गेड़ा" : "Shri Pramod Gadha",
        address: language === "hi" ? "एफ-91, हरीशंकरपुरम, प्रमिला पैलेस के सामने, ग्वालियर (म.प्र.)" : "F-91, Harishankarpuram, Pramila Palace, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9301121008" : "Mob. 9301121008",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : "Organisation Minister",
        name: language === "hi" ? "श्री प्रेमनारायण लहारिया" : "Shri Premnarayan Lahariya",
        address: language === "hi" ? "432 / 9 बीए साकेत नगर ए भोपाल(म. प्र.)" : "432 / 9 B-E Saket Nagar, Bhopal (M.P.)",
        mobile: language === "hi" ? "मोबा. 9893026732" : "Mob. 9893026732",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : "Organisation Minister",
        name: language === "hi" ? "श्री सुरेश बंधु" : "Shri Suraj Bundh",
        address: language === "hi" ? "बीज भण्डार रोड, करैरा, जिला-शिवपुरी (म.प्र.)" : "Bij Bhandar Road, Karara, District-Shivpuri (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425765588" : "Mob. 9425765588",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : "Organisation Minister",
        name: language === "hi" ? "श्री नितिन सरावगी" : "Shri Nitin Sarawagi",
        address: language === "hi" ? "झांसी (उ.प्र.)" : "Jhansi (U.P.)",
        mobile: language === "hi" ? "मोबा. 9415031136" : "Mob. 9415031136",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : "Organisation Minister",
        name: language === "hi" ? "श्री सतीश सेठ" : "Shri Satish Seth",
        address: language === "hi" ? "बी -89 ए एकता नगर ए एम. आर. 4रोड ए जबलपुर (म.प्र.)" : "B-89 Ekatna Nagar, M.R. 4 Road, Jabalpur (M.P.)",
        mobile: language === "hi" ? "मोबा. 9407252501" : "Mob. 9407252501",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री नरेन्द्र खरया" : "Shri Narendra Kharya",
        address: language === "hi" ? "एचआईजी-1,-443 हाउसिंग बोर्ड, दुर्ग (छ.ग.)" : "HIG-1,-443 Housing Board, Durg (M.H.)",
        mobile: language === "hi" ? "मोबा. 9425234740" : "Mob. 9425234740",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री राजेश नीखरा" : "Shri Rajesh Nihar",
        address: language === "hi" ? "इन्दरगढ़, जिला-दतिया (म.प्र.)" : "Indargarh, District-Dattia (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425234740" : "Mob. 9425234740",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री राकेश कनकने" : "Shri Rakesh Kanake",
        address: language === "hi" ? "ई-10, एस/आर. हरी शंकरपुरम, ग्वालियर (म.प्र.)" : "E-10, S/R. Harishankarpuram, Gwalior (M.P.)",
        mobile: language === "hi" ? "मोबा. 9893051569" : "Mob. 9893051569",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री विनोद नीखरा" : "Shri Vinod Nihar",
        address: language === "hi" ? "द्वारा- जमुना प्रसाद नीखराए डी-185ए अम्बिका नगरए वेलापार्कए ओढवए अहमदाबाद (गुजरात)" : "Dwara- Jumuna Prasad Nihar, D-185, Ambika Nagar, Velapark, Odhav, Ahmedabad (Gujarat)",
        mobile: language === "hi" ? "मोबा. 9998071666" : "Mob. 9998071666",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री रामकुमार नीखरा" : "Shri Ramkumar Nihar",
        address: language === "hi" ? "ईडबल्यूएफ 635 सरस्वती नगर, जवाहर चौक, भोपाल (म.प्र.)" : "Eidbalu, 635 Saraswati Nagar, Jawahar Chowk, Bhopal (M.P.)",
        mobile: language === "hi" ? "मोबा. 9826019279" : "Mob. 9826019279",
        image: "/executive/img-8.webp"
      }
    ],
    projectOfficials: []
  };

  const Assembly2019Data = {
    officials: [
      {
        position: language === "hi" ? "अध्यक्ष" : "President",
        name: language === "hi" ? "श्री कृष्ण कुमार कठिल (के के कठिल)" : "Shri Krishna Kumar Kathil (K K Kathil)",
        address: "",
        mobile: "",
        image: "/executive/16.webp"
      },
      {
        position: language === "hi" ? "महामंत्री" : "General Secretary",
        name: language === "hi" ? "श्री आलोक टिकरिया" : "Shri Alok Tikriya",
        address: "",
        mobile: "",
        image: "/executive/17.webp"
      },
      {
        position: language === "hi" ? "कोषाध्यक्ष" : "Treasurer",
        name: language === "hi" ? "श्री मोहन कनकने" : "Shri Mohan Kankane",
        address: "",
        mobile: "",
        image: "/executive/18.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री रमेश सेठ" : "Shri Ramesh Seth",
        address: "",
        mobile: "",
        image: "/executive/19.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री अशोक नगरिया" : "Shri Ashok Nagariya",
        address: "",
        mobile: "",
        image: "/executive/20.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री अशोक सेठ" : "Shri Ashok Seth",
        address: "",
        mobile: "",
        image: "/executive/21.webp"
      },

      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री नरेश कुचिया" : "Shri Naresh Kuchia",
        address: "",
        mobile: "",
        image: "/executive/22.webp"
      },

      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री केशव नीखरा" : "Shri Kesav Neekhra",
        address: "",
        mobile: "",
        image: "/executive/23.webp"
      },

      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री संतोष कुचिया" : "Shri Santosh Kuchia",
        address: "",
        mobile: "",
        image: "/executive/24.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री प्रमोद गेड़ा" : "Shri Pramod Geda",
        address: "",
        mobile: "",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री राधेश्याम सेठ" : "Shri Radheshyam Seth",
        address: "",
        mobile: "",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री मनोज चौधरी" : "Shri Manoj Chaudhary",
        address: "",
        mobile: "",
        image: "/executive/25.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री मैथिली शरण सेठ" : "Shri Maithili Sharan Seth",
        address: "",
        mobile: "",
        image: "/executive/26.webp"
      }
    ],
    nominatedOfficials: [],
    projectOfficials: []
  };

  const ExecutiveCentralData = {
    officials: [
      {
        position: language === "hi" ? "राष्ट्रीय अध्यक्ष" : "National President",
        name: language === "hi" ? "श्री राधेश्याम कुमिया" : "Shri Radheshyam Kumiya",
        address: language === "hi" ? "J-46 गांधी नगर, ग्वालियर" : "J-46 Gandhi Nagar, Gwalior",
        mobile: language === "hi" ? "मोबा. 09425114006" : "Mob. 09425114006",
        image: "/executive/img-1.webp"
      },
      {
        position: language === "hi" ? "महामंत्री" : "General Secretary",
        name: language === "hi" ? "श्री राजीव साहवे" : "Shri Rajiv Sahwe",
        address: language === "hi" ? "29 भोपाल विखारा वार्ड होशी" : "29 Bhopal Vikhara Ward Hoshi",
        mobile: language === "hi" ? "मोबा. 09415073295" : "Mob. 09415073295",
        image: "/executive/img-2.webp"
      },
      {
        position: language === "hi" ? "वरिष्टउपाध्यक्ष" : "Senior Vice President",
        name: language === "hi" ? "श्री भोगीलाल बिलैया" : "Shri Bhogilal Bilaiya",
        address: language === "hi" ? "न्यू कालोनी, करेरा जिला- शिवपुरी" : "New Colony, Karera District- Shivpuri",
        mobile: language === "hi" ? "मोबा. 09406589899" : "Mob. 09406589899",
        image: "/executive/img-3.webp"
      },
      {
        position: language === "hi" ? "प्रचार मंत्री" : "Publicity Minister",
        name: language === "hi" ? "श्री रमेश चन्द्र सरावगी" : "Shri Ramesh Chandra Sarawgi",
        address: language === "hi" ? "पुराने थाने के सामने ,गोहद जिला -भिंड मोबा" : "Opposite old police station, Gohad District-Bhind",
        mobile: language === "hi" ? "मोबा. 9893140676" : "Mob. 9893140676",
        image: "/executive/img-4.webp"
      },
      {
        position: language === "hi" ? "प्रबंधक राजाबेटी" : "Manager Rajabeti",
        name: language === "hi" ? "श्री परमानन्द कटारे" : "Shri Parmanand Katare",
        address: language === "hi" ? "74 M.I.G, Wब्लाक केसव नगर जूही, कानपुर मोबा." : "74 M.I.G, W Block Keshav Nagar Juhi, Kanpur",
        mobile: language === "hi" ? "मोबा. 09415044099" : "Mob. 09415044099",
        image: "/executive/img-5.webp"
      },
      {
        position: language === "hi" ? "प्रबंधक गहोई भवन चित्रकूट" : "Manager Gahoi Bhawan Chitrakoot",
        name: language === "hi" ? "श्री हरीबाबू सेठ" : "Shri Haribabu Seth",
        address: language === "hi" ? "जवाहर गंज ,गल्ला मंडी के सामने ,डबरा जिला -ग्वालियर" : "Jawahar Ganj, Opposite Galla Mandi, Dabra District-Gwalior",
        mobile: language === "hi" ? "मोबा. 09300102240" : "Mob. 09300102240",
        image: "/executive/img-6.webp"
      },
      {
        position: language === "hi" ? "कोषाध्यक्ष" : "Treasurer",
        name: language === "hi" ? "उमाशंकर कुचिया" : "Umashankar Kuchia",
        address: language === "hi" ? "15 / 21 ए , सहयोग सदन ,सिविल लाइन, कानपुर (उ. प्र.)" : "15/21 A, Sahyog Sadan, Civil Line, Kanpur (U.P.)",
        mobile: language === "hi" ? "मोबा. 09839240116" : "Mob. 09839240116",
        image: "/executive/img-7.webp"
      },
      {
        position: language === "hi" ? "लेखा परीक्षक" : "Auditor",
        name: language === "hi" ? "श्री प्रदीप नीखरा" : "Shri Pradeep Neekhra",
        address: language === "hi" ? "भोपाल" : "Bhopal",
        mobile: "",
        image: "/executive/img-8.webp"
      }



    ],
    nominatedOfficials: [
      {
        position: language === "hi" ? "कार्यकारी अध्यक्ष" : "Executive President",
        name: language === "hi" ? "श्री उमाशंकर लहारिया" : "Shri Umashankar Lahariya",
        address: language === "hi" ? "MZ-5, गुल मोहर, ग्रीन गार्डन, सिटी सेंटर, ग्वालियर" : "MZ-5, Gul Mohar, Green Garden, City Center, Gwalior",
        mobile: language === "hi" ? "मोबा. 09425150272" : "Mob. 09425150272",
        image: "/executive/member-1.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्रीराम गोपाल छिरोल्या (डल्लू भैया )" : "Shri Ram Gopal Chhirolia (Dallu Bhaiya)",
        address: language === "hi" ? "13 ,दाता कालोनी ,एअरपोर्ट रोड ,भोपाल" : "13, Data Colony, Airport Road, Bhopal",
        mobile: "9993953844",
        image: "/executive/member-2.webp"

      },
      {
        position: language === "hi" ? "उपाद्यक्ष" : "Vice President",
        name: language === "hi" ? "श्रीमती पुष्पा ददरया" : "Smt. Pushpa Dadharya",
        address: language === "hi" ? "1664, मनमोहन नगर, कृषि उपज मंडी के पास जबलपुर" : "1664, Manmohan Nagar, near Agricultural Produce Market, Jabalpur",
        mobile: language === "hi" ? "मोबा. 9479495800" : "Mobile. 9479495800",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री बाबू लाल डेंगरे" : "Shri Babu Lal Dengre",
        address: language === "hi" ? "117, जावरा कम्पाउन्ड ,इंदौर" : "117, Jawra Compound, Indore",
        mobile: language === "hi" ? "फोन 0731 -2705182" : "Phone 0731 -2705182",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपाद्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री सतीश सुहाने" : "Shri Satish Suhane",
        address: language === "hi" ? "305 ,तानसेन अपार्टमेन्ट ,तानसेन रोड ग्वालियर" : "305, Tansen Apartment, Tansen Road, Gwalior",
        mobile: language === "hi" ? "मोबा. 9425482181" : "Mobile. 9425482181",
        image: "/executive/member-3.webp"
      },
      {
        position: language === "hi" ? "उपाध्यक्ष" : "Vice President",
        name: language === "hi" ? "श्री प्रकाश नौगरैया" : "Shri Prakash Naugariya",
        address: language === "hi" ? "जैन नर्सिंग होम के पास ,सिविल लाइन , झाँसी" : "Near Jain Nursing Home, Civil Line, Jhansi",
        mobile: language === "hi" ? "मोबा. 9415030373" : "Mobile. 9415030373",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री शशिकांत निगोतिया" : "Shri Shashikant Nigotiya",
        address: language === "hi" ? "160 ,गोपाल गंज ,उरई जिला -जालोन (उ.प्र.)" : "160, Gopal Ganj, Urai District - Jalon (U.P.)",
        mobile: language === "hi" ? "मोबा. 9336031818" : "Mobile. 9336031818",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "डॉ . करुणेश गुप्ता (चपरा )" : "Dr. Karunesh Gupta (Chapra)",
        address: language === "hi" ? "1 / 10074 ,बी गली न. 35 ,द्धितीय तल, वेस्ट गोरख पार्क ,दिल्ली" : "1 / 10074, B Lane No. 35, Second Floor, West Gorakh Park, Delhi",
        mobile: language === "hi" ? "मोबा. 9891317151" : "Mobile. 9891317151",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री भगवानदास बिलैया" : "Shri Bhagwandas Biliya",
        address: language === "hi" ? "242 ,न्यू मिनरल जेससीम बंगला ,भोपाल" : "242, New Mineral Jessim Bungalow, Bhopal",
        mobile: language === "hi" ? "मोबा. 9827049690" : "Mobile. 9827049690",
        image: "/executive/member-4.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री अरुण नीखरा" : "Shri Arun Nikhra",
        address: language === "hi" ? "बलदेव बाग, जबलपुर" : "Baldev Bagh, Jabalpur",
        mobile: language === "hi" ? "मोबा. 9425163183" : "Mobile. 9425163183",
        image: "/executive/member-5.webp"
      },
     
      {
        position: language === "hi" ? "उपकोषाध्यक्ष" : "Assistant Treasurer",
        name: language === "hi" ? "श्री राकेश लहारिया" : "Shri Rakesh Lahariya",            
        address: language === "hi" ? "लोहिया बाज़ार ,ग्वालियर" : "Lohiya Bazar, Gwalior",
        mobile: language === "hi" ? "मोबा. 09425109949" : "Mobile. 09425109949",
        image: "/executive/member-6.webp"
      },
      {
        position: language === "hi" ? "केंद्रीय कार्यमंत्री" : " Central Minister",
        name: language === "hi" ? "श्री राजेंद्र गेंडा" : " Shri Rajendra Genda",
        address: language === "hi" ? "मो.परवारण, खोवा मंडी ,गाँधी रोड ,झाँसी" : " Mo. Parwaran, Khova Mandi, Gandhi Road, Jhansi",
        mobile: language === "hi" ? "मोबा. 9415057005 " : "Mobile. 9415057005 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : " Joint Minister",
        name: language === "hi" ? "श्री अनिल खरय़ा" : " Shri Anil Kharya",
        address: language === "hi" ? "ए-3,संजय उपवन कालोनी, सी.एच.सी. अपोलो हास्पीटल के पीछे,ऍम .आइ.जी .के पास, इंदौर" : " A-3, Sanjay Upvan Colony, C.H.C. Behind Apollo Hospital, M.I.G. Near Indore",
        mobile: language === "hi" ? "मोबा. 9981128886 " : "Mobile. 9981128886 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : " Joint Minister",
        name: language === "hi" ? "श्री नितिन सरावगी" : " Shri Nitin Sarawagi",
        address: language === "hi" ? "169, वासुदेव ,बड़ा बाज़ार ,झाँसी" : "169, Vasudev, Bada Bazar, Jhansi",
        mobile: language === "hi" ? "मोबा. 9415031136 " : "Mobile. 9415031136 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : " Joint Minister",
        name: language === "hi" ? "श्री मैथिलीशरण सेठ" : " Shri Maithili Sharan Seth",
        address: language === "hi" ? "642, खाती बाबा, कमलसिंग कालोनी,झाँसी" : "642, Khati Baba, Kamalsingh Colony, Jhansi",
        mobile: language === "hi" ? "मोबा. 9415401600 " : "Mobile. 9415401600 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संयुक्त मंत्री" : " Joint Minister",
        name: language === "hi" ? "श्री बसंत तपा" : " Shri Basant Tapa",
        address: language === "hi" ? "राधा बल्लभ वार्ड ,गाडरवारा जिला -नरसिंगपुर" : "Radha Ballabh Ward, Gadarwara District - Narsinghpur",
        mobile: language === "hi" ? "मोबा. 9826829228 " : "Mobile. 9826829228 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री मनोज चौधरी" : " Shri Manoj Chaudhary",
        address: language === "hi" ? "बड़ा बाज़ार ,पिछोर जिला -शिवपुरी" : " Bada Bazar, Pichhor District - Shivpuri",
        mobile: language === "hi" ? "मोबा. 9425763324 " : "Mobile. 9425763324 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री पुरषोत्तम पोद्धार" : "Shri Purushottam Poddar",
        address: language === "hi" ? "पोद्धार ज्वेलर्स , इन्द्रगड़ जिला -दतिया" : "Poddhar Jewelers, Indragad District - Datia",
        mobile: language === "hi" ? "मोबा. 9893877819 " : "Mobile. 9893877819 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री मोहन मिसुरिया" : "Shri Mohan Misuriya",
        address: language === "hi" ? "5 /122 पुराना गाड़ीअड्डा रोड , डबरा" : " 5/122 Old Gadi Adda Road, Dabra",
        mobile: language === "hi" ? "मोबा. 9425481665 " : "Mobile. 9425481665 ",
        image: "/executive/member-7.webp"
      },
      {
        position: language === "hi" ? "विकास मंत्री" : "Development Minister",
        name: language === "hi" ? "श्री राजकुमार लोहिया" : "Shri Rajkumar Lohiya",
        address: language === "hi" ? "पूजा ज्वेलर्स ,सराफा बाज़ार ,इतवारी ,नागपुर" : "Puja Jewelers, Sarafa Bazar, Itwari, Nagpur",
        mobile: language === "hi" ? "फोन 0712 - 221813 " : "Phone 0712 - 221813 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : " Organization Minister",
        name: language === "hi" ? "श्री धनिराम कनकने" : " Shri Dhaniram Kankane",
        address: language === "hi" ? "ठाकुर कालोनी ,मोहन नगर , दुर्ग" : "Thakur Colony, Mohan Nagar, Durg",
        mobile: language === "hi" ? "मोबा. 09827180913 " : "Mobile. 09827180913 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : " Organization Minister",
        name: language === "hi" ? "श्री रमेश मलैया" : " Shri Ramesh Malaiya",
        address: language === "hi" ? "सी. 5556, राज श्री पुरम, लखनऊ " : "C. 5556, Raj Shri Puram, Lucknow",
        mobile: language === "hi" ? "मोबा. 9415114356 " : "Mobile. 9415114356 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "संगठन मंत्री" : " Organization Minister",
        name: language === "hi" ? "श्री अशोक नौगरैया" : " Shri Ashok Naugariya",
        address: language === "hi" ? "163 ,सेंट्रल फोसीलिटी बिलिडिंग सेक्टर ,19 वासी (न्यू बोम्बे)" : " 163, Central Facility Building Sector, 19 Vasi (New Bombay)",
        mobile: language === "hi" ? "मोबा. 09820341782 " : "Mobile. 09820341782 ",
        image: "/executive/member-8.webp"
      },

      {
        position: language === "hi" ? "संगठन मंत्री" : " Organization Minister",
        name: language === "hi" ? "श्री जगदम्बा प्रसाद सुहाने" : " Shri Jagdamba Prasad Suhane",
        address: language === "hi" ? "74 /99 धन कुट्टी ,कानपूर" : "74/99 Dhan Kuti, Kanpur",
        mobile: language === "hi" ? "मोबा. 9795115747   " : "Mobile. 9795115747",
        image: "/executive/member-9.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री पुरषोत्तम बरसैया" : "Shri Purushottam Barsaiya",
        address: language === "hi" ? "द्वारा -महेश बलेचा का मकान,स्वर्णकार कालोनी ,विदिशा " : "Dvara - Mahesh Balesha's House, Swarnkar Colony, Vidisha",
        mobile: language === "hi" ? "मोबा. 9425431588 " : "Mobile. 9425431588 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री पुरषोत्तम बरसैया" : "Shri Purushottam Barsaiya",
        address: language === "hi" ? "द्वारा -महेश बलेचा का मकान,स्वर्णकार कालोनी ,विदिशा " : "Dvara - Mahesh Balesha's House, Swarnkar Colony, Vidisha",
        mobile: language === "hi" ? "मोबा. 9425431588 " : "Mobile. 9425431588 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री रमेश लोहिया" : "Shri Ramesh Lohia",
        address: language === "hi" ? "भोपाल " : "Bhopal",
        mobile: language === "hi" ? "" : "",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री कालीचरण मोदी" : "Shri Kalicharan Modi",
        address: language === "hi" ? "मोदी सदन ,ठाकुर बाबा रोड ,डबरा" : "Modi Sadan, Thakur Baba Road, Dabra",
        mobile: language === "hi" ? "मोबा. 9685233127 " : "Mobile. 9685233127 ",
        image: "/executive/member-10.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री संतोष कुरेले" : "Shri Santosh Kurele",
        address: language === "hi" ? "आनंद टाकीज के पास ,दतिया " : "Anand Talkies, Datia",
        mobile: language === "hi" ? "मोबा. 9425113401 " : "Mobile. 9425113401 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री संतोष कुरेले" : "Shri Santosh Kurele",
        address: language === "hi" ? "आनंद टाकीज के पास ,दतिया " : "Near Anand Talkies, Datia",
        mobile: language === "hi" ? "मोबा. 9425113401 " : "Mobile. 9425113401 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "उपमंत्री" : "Assistant Minister",
        name: language === "hi" ? "श्री दिलीप लोहिया" : "Shri Dileep Lohiya",
        address: language === "hi" ? "फ्लेट न. 805 ,सत्यम रेसीडेंसी ,सत्यदेव नगर , गाँधी रोड, ग्वालियर " : "Flat No. 805, Satyam Residency, Satyadev Nagar, Gandhi Road, Gwalior",
        mobile: language === "hi" ? "मोबा. 9827221215 " : "Mobile. 9827221215 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री कैलाशनारायण सावला" : "Shri Kailash Narayan Sawla",
        address: language === "hi" ? "5/45 कृष्णपुरा, डबरा जिला- ग्वालियर" : "5/45 Krishnapura, Dabra District- Gwalior",
        mobile: language === "hi" ? "मोबा. 09425481606 " : "Mobile. 09425481606 ",
        image: "/executive/member-11.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री हरिनारायण बडेरिया" : "Shri Harinarayan Baderiya",
        address: language === "hi" ? "बी-144 , ग्रीन पार्क कालोनी ,बेरसिया रोड भोपाल" : "B-144, Green Park Colony, Berasia Road Bhopal",
        mobile: language === "hi" ? "मोबा. 9425301237 " : "Mobile. 9425301237 ",
        image: "/executive/member-12.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री द्वारिका प्रसाद सुहाने" : "Shri Dwarika Prasad Suhane",
        address: language === "hi" ? "418 -गोपाल गंज ,मोनीबाबा मंदिर के पीछे उरई जिला - जालोन" : "418 -Gopal Ganj, Behind Moni Baba Temple, Urai District - Jalon",
        mobile: language === "hi" ? "मोबा. 09451317617 " : "Mobile. 09451317617 ",
        image: "/executive/member-13.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्रीमति शोभाखरैया" : "Smt. Shobha Khariya",
        address: language === "hi" ? "40 ,खेरा नर्सिंग होम ,बड़ा बाज़ार, पन्ना  " : "40, Khera Nursing Home, Bada Bazar, Panna",
        mobile: language === "hi" ? "" : "",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री दिनेश गेंडा" : "Shri Dinesh Genda",
        address: language === "hi" ? "खोड (शिवपुरी)" : "Khod (Shivpuri)",
        mobile: language === "hi" ? "" : "",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री भारत नीखरा" : "Shri Bharat Nikhra",
        address: language === "hi" ? "जेपीका हॉउस ,म.न. 3 ,व्हाइट चर्च कालोनी इंदौर" : "JPK House, M.N. 3, White Church Colony Indore",
        mobile: language === "hi" ? "मोबा. 9425057286 " : "Mobile. 9425057286 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "विशि. का. सदस्य" : "Member of the Committee",
        name: language === "hi" ? "श्री रमेश सुहाने" : "Shri Ramesh Suhane",
        address: language === "hi" ? "विनोद ट्रेडिंग कंपनी ,ए.बी. रोड ,शिवपुरी" : "Vinod Trading Company, A.B. Road, Shivpuri",
        mobile: language === "hi" ? "मोबा. 9425136173 " : "Mobile. 9425136173 ",
        image: "/executive/img-8.webp"
      },
 ],
    projectOfficials: [
      {
        position: language === "hi" ? "अध्यक्ष न्यायाधिकरण" : "Chairman Tribunal",
        name: language === "hi" ? "श्री सुन्दरलाल नौगरैया (पूर्ब न्याय़धीश )" : "Shri Sundarlal Naugariya (Former Judge)",
        address: language === "hi" ? " ऍम.आइ.जी .173 ,माधव नगर ,ग्वालियर" : "M.I.G. 173, Madhav Nagar, Gwalior",
        mobile: language === "hi" ? "मोबा. 09425112036 " : "Mobile. 09425112036 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री न्यायाधिकरण" : "Minister Tribunal",
        name: language === "hi" ? "श्री ब्रिजेश कुमार गुप्ता (मतेले) एडवो." : "Shri Brijesh Kumar Gupta (Matele) Adv.",
        address: language === "hi" ? "मुख्य डाकखाने के पास ,भिंड" : "Near Main Post Office, Bhind",
        mobile: language === "hi" ? "मोबा. 9425129575 " : "Mobile. 9425129575 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष अक्षय निधि" : "Chairman Akshay Nidhi",
        name: language === "hi" ? "श्री सुभास कुचिया (पूर्ब आयकर अधिकारी)" : "Shri Subhas Kuchiya (Former Income Tax Officer)",
        address: language === "hi" ? "वार्ड न. 27 ,गुप्ता काम्पलेक्स ,प्रेम नगर बालाघाट" : "Ward No. 27, Gupta Complex, Prem Nagar Balaghat",
        mobile: language === "hi" ? "मोबा. 09425146302 " : "Mobile. 09425146302 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष गहोई ग्लो. चे.ऑ. कॉमर्स" : "Chairman Gahoi Global Che. Com. Commerce",
        name: language === "hi" ? "श्री योगेश नौगरैया" : "Shri Yogesh Naugariya",
        address: language === "hi" ? "ई 1 /121 ,अरेरा कालोनी ,भोपाल" : "E 1/121, Aarey Colony, Bhopal",
        mobile: language === "hi" ? "मोबा. 09827052676 " : "Mobile. 09827052676 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री गहोई ग्लो. चे.ऑ. कॉमर्स" : "Minister Gahoi Global Che. Com. Commerce",
        name: language === "hi" ? "श्री सुभाष खर्द" : "Shri Subhash Khard",
        address: language === "hi" ? "91 /92 ,सिविल लाइन , झाँसी" : "91/92, Civil Line, Jhansi",
        mobile: language === "hi" ? "मोबा. 09415031397 " : "Mobile. 09415031397 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष - शास . कर्मचारी" : "Chairman - Shas. Employee",
        name: language === "hi" ? "श्री रामगोपाल नीखरा" : "Shri Ramgopal Nikhra",
        address: language === "hi" ? "मोटे गणेश जी मंदिर के पास, खासगी बाज़ार ग्वालियर " : "Near Mote Ganesh Ji Temple,  Khajgi Bazar Gwalior",
        mobile: language === "hi" ? "मोबा. 09425243435 " : "Mobile. 09425243435 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री - शास . कर्मचारी" : "Minister - Shas. Employee",
        name: language === "hi" ? "श्री विनोद सिपौलिया" : "Shri Vinod Sipoliya",
        address: language === "hi" ? "नेताजी चोक ,दुर्गा मंदिर के पास, न्यू शांति नगर ,रायपुर " : "Netaji Chok, Near Durga Temple, New Shanti Nagar, Raipur",
        mobile: language === "hi" ? "मोबा. 9424218451 " : "Mobile. 9424218451 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष राजनीतिज्ञ" : "Chairman Politician",
        name: language === "hi" ? "श्री जुगलकिशोर इटोरिया" : "Shri Jugalkishore Itoriya",
        address: language === "hi" ? "ई -6 , 42 अरोरा कालोनी ,भोपाल " : "E -6, 42 Arora Colony, Bhopal",
        mobile: language === "hi" ? "मोबा. 09826025346 " : "Mobile. 09826025346 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष राजनीतिज्ञ" : "Chairman Politician",
        name: language === "hi" ? "श्री जुगलकिशोर इटोरिया" : "Shri Jugalkishore Itoriya",
        address: language === "hi" ? "ई -6 , 42 अरोरा कालोनी ,भोपाल " : "E -6, 42 Arora Colony, Bhopal",
        mobile: language === "hi" ? "मोबा. 09826025346 " : "Mobile. 09826025346 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री राजनीतिज्ञ" : "Minister Politician",
        name: language === "hi" ? "श्री राजकुमार नीखरा" : "Shri Rajkumar Nikhra",
        address: language === "hi" ? "सागर कंसयानी प्रा.लिम. कासिम खां का बड़ा ,दाल बाज़ार,ग्वालियर " : "Sagar Kansyani Pra. Lim. Kasim Khan Ka Bada, Dal Bazar, Gwalior",
        mobile: language === "hi" ? "मोबा. 09826344311 " : "Mobile. 09826344311 ",
        image: "/executive/member-14.webp"
      },
      {
        position: language === "hi" ? "गहोई कल्याण कोष" : " Gahoi Welfare Fund",
        name: language === "hi" ? "श्री कैलाश नारायण सुहाने" : " Shri Kailash Narayan Suhane",
        address: language === "hi" ? "ई -२5,अरेरा कालोनी ,भोपाल" : " E -25, Areea Colony, Bhopal",
        mobile: language === "hi" ? "मोबा. 09452012411 " : "Mobile. 09452012411 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मंत्री" : "Minister",
        name: language === "hi" ? "श्री अलोक टिकरिया" : " Shri Alok Tikaria",
        address: language === "hi" ? "383 ,टिकरया मार्ग ,छतरपुर" : " 383, Tikaria Marg, Chhatarpur",
        mobile: language === "hi" ? "मोबा. 9425304544 " : "Mobile. 9425304544 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष, अखिल भारतीय गहोई वैश्य महिला सभा" : "President, All India Gahoi Vaishya Women's Association",
        name: language === "hi" ? "श्रीमती संध्या नगरिया" : "Smt. Sandhya Nagariya",
        address: language === "hi" ? "कोठी न. 8 प्रियंका नगर, कोलार रोड,भोपाल मोबा" : "Kothi No. 8 Priyanka Nagar, Kolar Road, Bhopal Mob",
        mobile: language === "hi" ? "मोबा. 09893041693 " : "Mobile. 09893041693 ",
        image: "/executive/img-8.webp"
      },

      {
        position: language === "hi" ? "मंत्री, अखिल भारतीय गहोई वैश्य महिला सभा" : "Minister, All India Gahoi Vaishya Women's Association",
        name: language === "hi" ? "श्रीमती रजनी रावत" : "Smt. Rajni Rawat",
        address: language === "hi" ? "ग्वाल मंगरा तालाब के पास, छतरपुर" : "Gwal Mangra Talab Ke Paas, Chhatarpur",
        mobile: language === "hi" ? "मोबा. 09425146234 " : "Mobile. 09425146234 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष अखिल भारतीय गहोई वैश्य" : "President All India Gahoi Vaishya",
        name: language === "hi" ? "श्री प्रोमोद सेठ (भारती )" : "Shri Promod Seth (Bharati)",
        address: language === "hi" ? "करेरा, जिला शिवपुरी" : "Kareera, District Shivpuri",
        mobile: language === "hi" ? "मोबा. 09425489922 " : "Mobile. 09425489922 ",
        image: "/executive/member-15.webp"
      },
      {
        position: language === "hi" ? "मंत्री, अखिल भारतीय गहोई वैश्य युवक मण्डल" : "Minister, All India Gahoi Vaishya Youth Council",
        name: language === "hi" ? "श्री राहुल नगरिया" : "Shri Rahul Nagariya",
        address: language === "hi" ? "घंटा घर चौराहा, मेन रोड, उरई" : "Kareera, District Shivpuri",
        mobile: language === "hi" ? "मोबा. 09415153212 " : "Mobile. 09415153212 ",
        image: "/executive/member-16.webp"
      },
      {
        position: language === "hi" ? "अध्यक्ष, अखिल भारतीय गहोई वैश्य वरिष्ठ संघ" : "President, All India Gahoi Vaishya Senior Association",
        name: language === "hi" ? "श्री गनपत राम निखरा" : "Shri Ganpat Ram Nikhra",
        address: language === "hi" ? "विवेकानंद कालोनी, फलका बाज़ार, ग्वालियर मोबा" : "Vivekanand Colony, Falka Bazar, Gwalior Mob",
        mobile: language === "hi" ? "मोबा. 09425113476 " : "Mobile. 09425113476 ",
        image: "/executive/member-19.webp"
      },
      {
        position: language === "hi" ? "मंत्री, अखिल भारतीय गहोई वैश्य वरिष्ठ संघ" : "Minister, All India Gahoi Vaishya Senior Association",
        name: language === "hi" ? "श्री एम. सी. सुहाने" : "Shri M. C. Suhane",
        address: language === "hi" ? "2 बी/540 वसुन्धरा, गाज़ियाबाद" : "2 B/540 Vasundhara, Ghaziabad",
        mobile: language === "hi" ? "मोबा. 09873666369 " : "Mobile. 09873666369 ",
        image: "/executive/img-8.webp"
      },
      {
        position: language === "hi" ? "मुख्या चुनाव आयुक्त" : "Chief Election Commissioner",
        name: language === "hi" ? "श्री आर. एन. गुप्ता" : "Shri R. N. Gupta",
        address: language === "hi" ? "ग्वालियर" : "Gwalior",
        mobile: language === "hi" ? "मोबा. 09425111349 " : "Mobile. 09425111349 ",
        image: "/executive/member-17.webp"
      },
      {
        position: language === "hi" ? "संयोजक जनगणना" : "Coordinator Census",
        name: language === "hi" ? "श्री कुबेर चन्द्र रेजा" : "Shri Kuber Chandra Reja",
        address: language === "hi" ? "भोपाल" : "Bhopal",
        mobile: language === "hi" ? "मोबा. 09303135377 " : "Mobile. 09303135377 ",
        image: "/executive/member-18.webp"
      },

    ],
    GahoiBandhuEditorialBoard: [
      {
        position: language === "hi" ? "राष्ट्रीय अध्यक्ष" : "National President",
        name: language === "hi" ? "राधेश्याम कुचिया" : "Radheshyam Kuchiya",
        address: language === "hi" ? "" : "",
        mobile: language === "hi" ? "मोबा. 09425114006" : "Mob. 09425114006",
        image: "/executive/member-21.webp"
      },
      {
        position: language === "hi" ? "कार्यकारी अध्यक्ष" : "Executive President",
        name: language === "hi" ? "उमा शंकर लहारिया (प्रबंध संपादक )" : "Uma Shankar Lahariya (Managing Editor)",
        address: language === "hi" ? "जबलपुर" : "Jabalpur",
        mobile: language === "hi" ? "मोबा. 09425150272" : "Mob. 09425150272",
      image: "/executive/member-20.webp"
      },
     
    ]
  };

  const OfficialCard = ({ official }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-red-200/50 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent z-10"></div>
        <img
          src={official.image}
          alt={official.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "/resources/default-profile.webp";
          }}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 z-20 flex justify-center">
          <div className="bg-red-800/90 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 inline-block">
            <h3 className={`text-white font-medium text-xs sm:text-sm md:text-base text-center whitespace-normal leading-tight ${languageFontClass}`}>
              {official.position}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-1.5 sm:p-2 md:p-3 text-center">
        <h2 className={`text-sm sm:text-base md:text-lg font-bold text-red-800 mb-0.5 sm:mb-1 ${languageFontClass}`}>
          {official.name}
        </h2>
        <div className={`space-y-0.5 text-gray-700 text-xs sm:text-sm ${languageFontClass}`}>
          <p className="leading-tight">{official.address}</p>
          <p className="font-medium">{official.mobile}</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    let data;
    let title;
    
    switch(activeTab) {
      case "2015":
        data = Assembly2015Data;
        title = translations.executiveList2015[language];
        break;
      case "2019":
        data = Assembly2019Data;
        title = translations.executiveList2019[language];
        break;
      default:
        data = ExecutiveCentralData;
        title = translations.executiveList[language];
    }

    return (
      <>
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <div className="inline-block bg-red-800 rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 shadow-lg">
              <p className={`text-base sm:text-lg md:text-xl font-medium text-white ${languageFontClass}`}>
                {title}
              </p>
            </div>
          </div>
        </div>

        {/* Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
            {title}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.officials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Nominated Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
            {activeTab === "2015" ? translations.nominatedOfficials2015[language] : translations.nominatedOfficialsCentral[language]}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.nominatedOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Project Officials Section */}
        {data.projectOfficials && data.projectOfficials.length > 0 && (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
              {translations.projectOfficials[language]}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.projectOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>
        )}

        {/* Gahoi Bandhu Editorial Board Section */}
        {data.GahoiBandhuEditorialBoard && data.GahoiBandhuEditorialBoard.length > 0 && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
              {language === "hi" ? "गहोई बंधु संपादक मंडल" : "Gahoi Bandhu Editorial Board"}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
              {data.GahoiBandhuEditorialBoard.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          {language === "hi"
            ? "सभी महासभाएँ - गहोई समाज"
            : "All Assemblies - Gahoi Samaj"}
        </title>
        <meta
          name="description"
          content={
            language === "hi"
              ? "गहोई समाज की सभी महासभाओं का विवरण और कार्यकारिणी सूची।"
              : "Details of all assemblies and executive committees of Gahoi Samaj."
          }
        />
      </Helmet>

      {/* Hero Banner with Background Image */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/all-assembly-hero.webp"
          alt="All Assembly Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="p-3 md:p-5 bg-white/10 rounded-full w-20 h-20 mx-auto mb-6 backdrop-blur-sm">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${languageFontClass}`}>
              {translations.pageTitle[language]}
            </h1>
            <p className={`text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto ${languageFontClass}`}>
              {translations.pageSubtitle[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-8">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-red-100 p-2">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab("2019")}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${languageFontClass} ${
                activeTab === "2019"
                  ? "bg-red-800 text-white"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              }`}
            >
              {translations.tab2019[language]}
            </button>
            <button
              onClick={() => setActiveTab("2015")}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${languageFontClass} ${
                activeTab === "2015"
                  ? "bg-red-800 text-white"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              }`}
            >
              {translations.tab2015[language]}
            </button>
            <button
              onClick={() => setActiveTab("central")}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${languageFontClass} ${
                activeTab === "central"
                  ? "bg-red-800 text-white"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              }`}
            >
              {translations.tabCentral[language]}
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default AllAssembly; 