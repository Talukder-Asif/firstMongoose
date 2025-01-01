import { z } from 'zod';

const studentNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name should be at least 2 characters long.')
    .max(50, 'First name should not exceed 50 characters.')
    .regex(/^[A-Z][a-z]*$/, {
      message:
        'First name should start with an uppercase letter followed by lowercase letters.',
    }),
  middleName: z
    .string()
    .max(50, 'Middle name should not exceed 50 characters.')
    .optional(),
  lastName: z
    .string()
    .min(2, 'Last name should be at least 2 characters long.')
    .max(50, 'Last name should not exceed 50 characters.')
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name should contain only alphabets.',
    }),
});

const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .max(100, "Father's name should not exceed 100 characters."),
  fatherOccupation: z
    .string()
    .max(100, "Father's occupation should not exceed 100 characters."),
  fatherContactNo: z
    .string()
    .max(15, "Father's contact number should not exceed 15 characters."),
  motherName: z
    .string()
    .max(100, "Mother's name should not exceed 100 characters."),
  motherOccupation: z
    .string()
    .max(100, "Mother's occupation should not exceed 100 characters."),
  motherContactNo: z
    .string()
    .max(15, "Mother's contact number should not exceed 15 characters."),
});

const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .max(100, "Local guardian's name should not exceed 100 characters."),
  occupation: z
    .string()
    .max(100, "Local guardian's occupation should not exceed 100 characters."),
  contactNo: z
    .string()
    .max(
      15,
      "Local guardian's contact number should not exceed 15 characters.",
    ),
  address: z
    .string()
    .max(255, "Local guardian's address should not exceed 255 characters."),
});

const studentValidationSchema = z.object({
  id: z
    .string()
    .min(5, 'Student ID should be at least 5 characters long.')
    .max(20, 'Student ID should not exceed 20 characters.'),
  name: studentNameValidationSchema,
  gender: z.enum(['male', 'female'], { invalid_type_error: 'Invalid gender.' }),
  dateOfBirth: z.string().nonempty('Date of birth is required.'),
  email: z
    .string()
    .email('Invalid email address.')
    .max(100, 'Email should not exceed 100 characters.'),
  contactNumber: z
    .string()
    .max(15, 'Contact number should not exceed 15 characters.'),
  emergencyContactNo: z
    .string()
    .max(15, 'Emergency contact number should not exceed 15 characters.'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    invalid_type_error: 'Invalid blood group.',
  }),
  presentAddress: z
    .string()
    .max(255, 'Present address should not exceed 255 characters.'),
  permanentAddress: z
    .string()
    .max(255, 'Permanent address should not exceed 255 characters.'),
  guardian: guardianValidationSchema,
  localGuardians: localGuardianValidationSchema,
  profileImg: z
    .string()
    .max(255, 'Profile image URL should not exceed 255 characters.')
    .optional(),
  isActive: z.enum(['active', 'inactive'], {
    invalid_type_error: 'Invalid status.',
  }),
});

export default studentValidationSchema;
