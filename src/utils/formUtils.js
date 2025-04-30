import { REQUIRED_FIELDS } from '../config/formConfig';
import {
  validateField,
  validateMobileNumber,
  validateEmail,
  validateDate,
  validateMarriageDate,
  validateGotra,
  validateChildren,
  validateSiblings,
  validateFamilyMember
} from './validationUtils';

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
  const stepFields = REQUIRED_FIELDS.filter(field => field.step === step);
  
  // Validate required fields
  stepFields.forEach(field => {
    const error = validateField(field.name, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });

  // Special validations
  if (stepFields.includes('mobileNumber')) {
    const mobileError = validateMobileNumber(formData.mobileNumber);
    if (mobileError) errors.mobileNumber = mobileError;
  }

  if (stepFields.includes('email')) {
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
  }

  if (stepFields.includes('birthDate')) {
    const birthDateError = validateDate(formData.birthDate, 'Birth date');
    if (birthDateError) errors.birthDate = birthDateError;
  }

  if (stepFields.includes('marriageDate')) {
    const marriageDateError = validateMarriageDate(formData.marriageDate, formData.isMarried);
    if (marriageDateError) errors.marriageDate = marriageDateError;
  }

  if (stepFields.includes('gotra')) {
    const gotraError = validateGotra(formData.gotra, formData.marriageToAnotherCaste);
    if (gotraError) errors.gotra = gotraError;
  }

  // Validate family members
  if (stepFields.includes('familyDetails')) {
    const children = formData.familyDetails.filter(member => member.relation === 'Child');
    const siblings = formData.familyDetails.filter(member => member.relation === 'Sibling');

    const childrenError = validateChildren(children, 4);
    if (childrenError) errors.children = childrenError;

    const siblingsError = validateSiblings(siblings, 5);
    if (siblingsError) errors.siblings = siblingsError;

    formData.familyDetails.forEach((member, index) => {
      const memberErrors = validateFamilyMember(member);
      if (Object.keys(memberErrors).length > 0) {
        errors[`familyMember${index}`] = memberErrors;
      }
    });
  }

  return errors;
};

export const formatFormData = (data, displayPictureId = null) => {
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