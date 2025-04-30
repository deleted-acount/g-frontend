import { REQUIRED_FIELDS } from '../config/formConfig';

// Validate a single field
export const validateField = (name, value) => {
  if (REQUIRED_FIELDS.includes(name) && !value) {
    return `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
  }
  return '';
};

// Validate mobile number
export const validateMobileNumber = (number) => {
  if (!number) return 'Mobile number is required';
  if (number.length !== 10) return 'Mobile number must be 10 digits';
  return '';
};

// Validate email
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
};

// Validate date
export const validateDate = (date, fieldName) => {
  if (!date) return `${fieldName} is required`;
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return `Invalid ${fieldName.toLowerCase()}`;
  return '';
};

// Validate marriage date based on marital status
export const validateMarriageDate = (date, isMarried) => {
  if (isMarried === 'Married' && !date) {
    return 'Marriage date is required for married individuals';
  }
  return '';
};

// Validate gotra based on marriage type
export const validateGotra = (gotra, marriageToAnotherCaste) => {
  if (!marriageToAnotherCaste && !gotra) {
    return 'Gotra is required for same caste marriages';
  }
  return '';
};

// Validate children
export const validateChildren = (children, maxChildren) => {
  if (!Array.isArray(children)) return 'Invalid children data';
  if (children.length > maxChildren) return `Maximum ${maxChildren} children allowed`;
  return '';
};

// Validate siblings
export const validateSiblings = (siblings, maxSiblings) => {
  if (!Array.isArray(siblings)) return 'Invalid siblings data';
  if (siblings.length > maxSiblings) return `Maximum ${maxSiblings} siblings allowed`;
  return '';
};

// Validate family member
export const validateFamilyMember = (member) => {
  const errors = {};
  
  if (!member.name) {
    errors.name = 'Name is required';
  }
  
  if (member.mobileNumber && member.mobileNumber.length !== 10) {
    errors.mobileNumber = 'Mobile number must be 10 digits';
  }
  
  if (member.relation === 'Child' && !member.gender) {
    errors.gender = 'Gender is required for children';
  }
  
  if (member.relation === 'Sibling') {
    if (!member.age) errors.age = 'Age is required for siblings';
    if (!member.education) errors.education = 'Education is required for siblings';
    if (!member.occupation) errors.occupation = 'Occupation is required for siblings';
    if (!member.maritalStatus) errors.maritalStatus = 'Marital status is required for siblings';
    if (!member.siblingRelation) errors.siblingRelation = 'Sibling relation is required';
  }
  
  return errors;
}; 