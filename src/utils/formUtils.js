import { REQUIRED_FIELDS, FORM_STEPS } from '../config/formConfig';
import { STATE_TO_ASSEMBLIES } from '../constants/formConstants';
import {
  validateField,
  validateMobileNumber,
  validateEmail,
  validateDate,
  validateMarriageDate,
  validateGotra,
  validateChildren,
  validateSiblings,
  validateFamilyMember,
  validateNationality
} from './validationUtils';

// Helper functions for registration code generation
const generateGenderCode = (gender) => gender === 'Male' ? 'M' : gender === 'Female' ? 'F' : 'X';
const generateNationalityCode = (nationality) => nationality === 'Indian' ? '1' : nationality === 'Non-Indian' ? '0' : 'X';

// Fixed code mappings for all values
const FIXED_CODES = {
  // Regional Assembly codes (all possible assemblies)
  regionalAssembly: {
    "Chambal Regional Assembly": "01",
    "Central Malwa Regional Assembly": "02",
    "Mahakaushal Regional Assembly": "03",
    "Vindhya Regional Assembly": "04",
    "Bundelkhand Regional Assembly": "05",
    "Chaurasi Regional Assembly": "06",
    "Ganga Jamuna Regional Assembly": "07",
    "Northern Regional Assembly": "08",
    "Southern Regional Assembly": "09",
    "Chhattisgarh Regional Assembly": "10"
  },
  // Local Panchayat codes (all possible panchayats)
  localPanchayat: {
    // Chambal Regional Assembly panchayats
    "Gwalior": "01",
    "Bhind": "02",
    "Morena": "03",
    "Datia": "04",
    "Jaipur": "05",
    // Central Malwa Regional Assembly panchayats
    "Indore": "06",
    "Ujjain": "07",
    "Bhopal": "08",
    "Vidisha": "09",
    "Raisen": "10",
    // Mahakaushal Regional Assembly panchayats
    "Narsinghpur": "11",
    "Jabalpur": "12",
    "Sagar": "13",
    "Seoni": "14",
    "Chhindwara": "15",
    "Panna": "16",
    "Hoshangabad": "17",
    "Mandla": "18",
    "Dindori": "19",
    "Guna": "20",
    "Sultanpur": "21",
    "Umariya": "22",
    "Hata": "23",
    "Shahdol": "24",
    "Katni": "25",
    // Vindhya Regional Assembly panchayats
    "Chhatarpur": "26",
    "Satna": "27",
    "Rewa": "28",
    "Mahoba": "29",
    "Patna City": "30",
    // Southern Regional Assembly panchayats
    "Nagpur": "31",
    "Pune": "32",
    "Amravati": "33",
    "Mumbai": "34",
    "Chalisgaon": "35",
    "Dhuliya": "36",
    // Chhattisgarh Regional Assembly panchayats
    "Durg": "37",
    "Rajnandgaon": "38",
    "Dhamtari": "39",
    "Raipur": "40",
    "Bilaspur": "41",
    "Jagdalpur": "42",
    "Baikunthpur": "43",
    // Northern Regional Assembly panchayats
    "Mathura": "44",
    "Delhi": "45",
    // Ganga Jamuna Regional Assembly panchayats
    "Jalaun": "46",
    "Kanpur": "47",
    "Auraiya": "48",
    "Lucknow": "49",
    "Karvi": "50",
    "Banda": "51",
    // Bundelkhand Regional Assembly panchayats
    "Jhansi": "52",
    "Lalitpur": "53",
    "Tikamgarh": "54",
    "Ghasan": "55"
  },
  // Sub Local Panchayat codes (all possible sub-panchayats)
  subLocalPanchayat: {
    // Gwalior sub-panchayats
    "Madhavganj": "01",
    "Khasgi Bazaar": "02",
    "Daulatganj": "03",
    "Kampoo": "04",
    "Lohia Bazaar": "05",
    "Phalka Bazaar": "06",
    "Lohamandi": "07",
    "Bahodapur": "08",
    "Naka Chandravadni": "09",
    "Harishankarpuram": "10",
    "Thatipur": "11",
    "Morar": "12",
    "Dabra": "13",
    "Pichhore Dabra": "14",
    "Behat": "15",
    // Bhind sub-panchayats
    "Alampur": "16",
    "Daboh": "17",
    "Tharet": "18",
    "Mihona": "19",
    "Aswar": "20",
    "Lahar": "21",
    "Gohad": "22",
    "Machhand": "23",
    "Raun": "24",
    // Chhatarpur sub-panchayats
    "Bameetha": "25",
    "Maharajpur": "26",
    "Naugaon": "27",
    "Bijawar": "28",
    "Chandra Nagar": "29",
    "Gulgaj": "30",
    "Bakswaha": "31",
    "Gadhi Malhara": "32",
    "Lavkush Nagar": "33",
    "Alipur": "34",
    "Tatam": "35",
    "Harpalpur": "36",
    "Ishanagar": "37",
    "Bada Malhara": "38",
    // Panna sub-panchayats
    "Amanaganj": "39",
    "Ajaigarh": "40",
    "Gunnor": "41",
    "Mohendra": "42",
    "Simariya": "43",
    "Sunwani Kala": "44",
    "Kishangarh": "45",
    // Shivpuri sub-panchayats
    "Malhawani": "46",
    "Pipara": "47",
    "Semri": "48",
    "Bamore Damaroun": "49",
    "Manpura": "50",
    "Pichhore": "51",
    "Karera": "52",
    "Bhonti": "53",
    // Other cities
    "Nagpur": "54",
    "Pune": "55",
    "Amravati": "56",
    "Mumbai": "57",
    "Chalisgaon": "58",
    "Dhuliya": "59",
    "Durg": "60",
    "Rajnandgaon": "61",
    "Dhamtari": "62",
    "Raipur": "63",
    "Bilaspur": "64",
    "Jagdalpur": "65",
    "Baikunthpur": "66",
    "Mathura": "67",
    "Delhi": "68",
    "Other": "99"
  },
  // Gotra codes 
  gotra: {
    "Vasar/Vastil/Vasal": "01",
    "Gahoi": "02",
    "Agarwal": "03",
    "Maheshwari": "04",
    "Khandelwal": "05",
    "Other": "99"
  },
  // Aakna codes 
  aakna: {
    "Rusiya": "01",
    "Arusiya": "02",
    "Behre": "03",
    "Bahre": "04",
    "Pahariya": "05",
    "Reja": "06",
    "Mar": "07",
    "Amar": "08",
    "Mor": "09",
    "Sethiya": "10",
    "Damele": "11",
    "Kathal": "12",
    "Kathil": "13",
    "Marele": "14",
    "Nahar": "15",
    "Other": "99"
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return null;
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch {
    return null;
  }
};

export const validateStep = (step, formData) => {
  const errors = {};
  
  // Get fields for current step
  const currentStepFields = FORM_STEPS[step].fields;
  
  // Validate required fields for current step
  currentStepFields.forEach(field => {
    if (REQUIRED_FIELDS.includes(field)) {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
      }
    }
  });

  // Special validations for current step
  if (currentStepFields.includes('mobileNumber')) {
    const mobileError = validateMobileNumber(formData.mobileNumber);
    if (mobileError) errors.mobileNumber = mobileError;
  }

  if (currentStepFields.includes('email')) {
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
  }

  if (currentStepFields.includes('nationality')) {
    const nationalityError = validateNationality(formData.nationality);
    if (nationalityError) errors.nationality = nationalityError;
  }

  if (currentStepFields.includes('birthDate')) {
    const birthDateError = validateDate(formData.birthDate, 'Birth date');
    if (birthDateError) errors.birthDate = birthDateError;
  }

  if (currentStepFields.includes('marriageDate') && formData.isMarried === 'Married') {
    const marriageDateError = validateMarriageDate(formData.marriageDate, formData.isMarried);
    if (marriageDateError) errors.marriageDate = marriageDateError;
  }

  if (currentStepFields.includes('gotra') && formData.marriageToAnotherCaste !== 'Other Caste Marriage') {
    const gotraError = validateGotra(formData.gotra, formData.marriageToAnotherCaste);
    if (gotraError) errors.gotra = gotraError;
  }

  // Validate family members
  if (currentStepFields.includes('familyDetails')) {
    const children = formData.familyDetails.filter(member => member.relation === 'Child');
    const siblings = formData.familyDetails.filter(member => member.relation === 'Sibling');

    const childrenError = validateChildren(children, 4);
    if (childrenError) errors.children = childrenError;

    const siblingsError = validateSiblings(siblings, 5);
    if (siblingsError) errors.siblings = siblingsError;

    formData.familyDetails.forEach((member, index) => {
      const memberErrors = validateFamilyMember(member, index);
      Object.assign(errors, memberErrors);
    });
  }

  return errors;
};

export const formatFormData = (data, displayPictureId = null) => {
  // Generate registration code
  const genderCode = generateGenderCode(data.gender);
  const nationalityCode = generateNationalityCode(data.nationality);
  const gotraCode = FIXED_CODES.gotra[data.gotra] || "00";
  const aaknaCode = FIXED_CODES.aakna[data.aakna] || "00";
  const regionalAssemblyCode = FIXED_CODES.regionalAssembly[data.regionalAssembly] || "00";
  const localPanchayatCode = FIXED_CODES.localPanchayat[data.localPanchayat] || "00";
  const subLocalPanchayatCode = FIXED_CODES.subLocalPanchayat[data.subLocalPanchayat] || "00";

  const registrationCode = `${genderCode}${nationalityCode}${aaknaCode}${regionalAssemblyCode}${localPanchayatCode}${subLocalPanchayatCode}-${gotraCode}`;

  return {
    family_details: {
      father_name: data.familyDetails[0]?.name ?? "",
      father_mobile: data.familyDetails[0]?.mobileNumber ?? "",
      mother_name: data.familyDetails[1]?.name ?? "",
      mother_mobile: data.familyDetails[1]?.mobileNumber ?? "",
      spouse_name: data.familyDetails[2]?.name ?? "",
      spouse_mobile: data.familyDetails[2]?.mobileNumber ?? "",
      siblingDetails: data.familyDetails
        .filter(member => member.relation === "Sibling")
        .map((sibling) => ({
          sibling_name: sibling.name ?? "",
          gender: sibling.gender || null,
          phone_number: sibling.mobileNumber ?? "",
          age: sibling.age ? parseInt(sibling.age, 10) : null,
          education: sibling.education || null,
          occupation: sibling.occupation || null,
          marital_status: sibling.maritalStatus || null,
          is_dependent: sibling.isDependent ?? false,
          sibling_relation: sibling.siblingRelation || null
        }))
    },
    child_name: data.familyDetails
      .filter(member => member.relation === "Child")
      .map((child) => ({ 
        child_name: child.name ?? "",
        gender: child.gender || null,
        phone_number: child.mobileNumber ?? ""
      })),
    biographical_details: {
      Gotra: data.marriageToAnotherCaste ? "Others" : (data.gotra ?? ""),
      Aakna: data.marriageToAnotherCaste ? "Others" : (data.aakna ?? ""),
      manglik_status: data.manglik ?? "",
      Grah: data.grah ?? "",
      Handicap: data.handicap ?? "",
      is_married: data.isMarried ? "Married" : "Unmarried",
      marriage_to_another_caste: data.marriageToAnotherCaste
        ? "Married to Another Caste"
        : "Same Caste Marriage",
    },
    personal_information: {
      full_name: data.name ?? "",
      village: data.village ?? "",
      mobile_number: data.mobileNumber ?? "",
      email_address: data.email ?? "",
      display_picture: displayPictureId,
      Gender: data.gender ?? "",
      nationality: data.nationality ?? "",
    },
    work_information: {
      occupation: data.occupation ?? "",
      company_name: data.companyName ?? "",
      work_area: data.workArea ?? "",
      industrySector: data.industrySector ?? "",
      businessSize: data.businessSize ?? "",
      workType: data.workType ?? "",
      employmentType: data.employmentType ?? "",
    },
    additional_details: {
      blood_group: data.bloodGroup ?? "",
      date_of_birth: formatDate(data.birthDate),
      date_of_marriage: formatDate(data.marriageDate),
      higher_education: data.education ?? "",
      current_address: data.currentAddress ?? "",
      regional_information: {
        RegionalAssembly: data.regionalAssembly ?? "",
        LocalPanchayatName: data.localPanchayatName ?? "",
        LocalPanchayat: data.localPanchayat ?? "",
        SubLocalPanchayat: data.subLocalPanchayat ?? "",
        State: data.state ?? "",
      },
    },
    your_suggestions: {
      suggestions: data.suggestions ?? "",
    },
    registration_code: registrationCode
  };
};

export const hasErrors = (errors) => {
  if (!errors) return false;
  return Object.keys(errors).length > 0;
};

// Helper function to check if a field should show error state
export const shouldShowError = (fieldName, errors, touched) => {
  return touched[fieldName] && errors[fieldName];
};

// Helper function to get error message for a field
export const getErrorMessage = (fieldName, errors, touched) => {
  if (shouldShowError(fieldName, errors, touched)) {
    return errors[fieldName];
  }
  return '';
}; 