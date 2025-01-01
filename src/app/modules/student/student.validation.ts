import Joi from 'joi';

const nameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.empty': 'First name is required.',
      'string.min': 'First name should be at least 2 characters long.',
      'string.max': 'First name should not exceed 50 characters.',
      'string.pattern.base':
        'First name should start with an uppercase letter followed by lowercase letters.',
    }),
  middleName: Joi.string().trim().max(50).allow(null, '').messages({
    'string.max': 'Middle name should not exceed 50 characters.',
  }),
  lastName: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.empty': 'Last name is required.',
      'string.min': 'Last name should be at least 2 characters long.',
      'string.max': 'Last name should not exceed 50 characters.',
      'string.pattern.base': 'Last name should contain only alphabets.',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().max(100).required().messages({
    'string.empty': "Father's name is required.",
    'string.max': "Father's name should not exceed 100 characters.",
  }),
  fatherOccupation: Joi.string().trim().max(100).required().messages({
    'string.empty': "Father's occupation is required.",
    'string.max': "Father's occupation should not exceed 100 characters.",
  }),
  fatherContactNo: Joi.string().trim().max(15).required().messages({
    'string.empty': "Father's contact number is required.",
    'string.max': "Father's contact number should not exceed 15 characters.",
  }),
  motherName: Joi.string().trim().max(100).required().messages({
    'string.empty': "Mother's name is required.",
    'string.max': "Mother's name should not exceed 100 characters.",
  }),
  motherOccupation: Joi.string().trim().max(100).required().messages({
    'string.empty': "Mother's occupation is required.",
    'string.max': "Mother's occupation should not exceed 100 characters.",
  }),
  motherContactNo: Joi.string().trim().max(15).required().messages({
    'string.empty': "Mother's contact number is required.",
    'string.max': "Mother's contact number should not exceed 15 characters.",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().max(100).required().messages({
    'string.empty': "Local guardian's name is required.",
    'string.max': "Local guardian's name should not exceed 100 characters.",
  }),
  occupation: Joi.string().trim().max(100).required().messages({
    'string.empty': "Local guardian's occupation is required.",
    'string.max':
      "Local guardian's occupation should not exceed 100 characters.",
  }),
  contactNo: Joi.string().trim().max(15).required().messages({
    'string.empty': "Local guardian's contact number is required.",
    'string.max':
      "Local guardian's contact number should not exceed 15 characters.",
  }),
  address: Joi.string().trim().max(255).required().messages({
    'string.empty': "Local guardian's address is required.",
    'string.max': "Local guardian's address should not exceed 255 characters.",
  }),
});

const studentJoiSchema = Joi.object({
  id: Joi.string().trim().min(5).max(20).required().messages({
    'string.empty': 'Student ID is required.',
    'string.min': 'Student ID should be at least 5 characters long.',
    'string.max': 'Student ID should not exceed 20 characters.',
  }),
  name: nameValidationSchema.required().messages({
    'object.base': 'Student name is required.',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': '{#value} is not a valid gender.',
    'string.empty': 'Gender is required.',
  }),
  dateOfBirth: Joi.string().trim().required().messages({
    'string.empty': 'Date of birth is required.',
  }),
  email: Joi.string().trim().max(100).email().required().messages({
    'string.empty': 'Email is required.',
    'string.email': '{#value} is not a valid email.',
    'string.max': 'Email should not exceed 100 characters.',
  }),
  contactNumber: Joi.string().trim().max(15).required().messages({
    'string.empty': 'Contact number is required.',
    'string.max': 'Contact number should not exceed 15 characters.',
  }),
  emergencyContactNo: Joi.string().trim().max(15).required().messages({
    'string.empty': 'Emergency contact number is required.',
    'string.max': 'Emergency contact number should not exceed 15 characters.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#value} is not a valid blood group.',
      'string.empty': 'Blood group is required.',
    }),
  presentAddress: Joi.string().trim().max(255).required().messages({
    'string.empty': 'Present address is required.',
    'string.max': 'Present address should not exceed 255 characters.',
  }),
  permanentAddress: Joi.string().trim().max(255).required().messages({
    'string.empty': 'Permanent address is required.',
    'string.max': 'Permanent address should not exceed 255 characters.',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian information is required.',
  }),
  localGuardians: localGuardianValidationSchema.required().messages({
    'object.base': 'Local guardian information is required.',
  }),
  profileImg: Joi.string().trim().max(255).messages({
    'string.max': 'Profile image URL should not exceed 255 characters.',
  }),
  isActive: Joi.string().valid('active', 'inactive').required().messages({
    'any.only': '{#value} is not a valid status.',
    'string.empty': 'Status is required.',
  }),
});

export default studentJoiSchema;
