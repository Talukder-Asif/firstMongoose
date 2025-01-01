import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  studentName,
} from './student.interface';

const studentNameSchema = new Schema<studentName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    minlength: [2, 'First name should be at least 2 characters long.'],
    maxlength: [50, 'First name should not exceed 50 characters.'],

    // Custom validation
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      message: '{VALUE} is not uppercase.',
    },
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [50, 'Middle name should not exceed 50 characters.'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
    minlength: [2, 'Last name should be at least 2 characters long.'],
    maxlength: [50, 'Last name should not exceed 50 characters.'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not a valid alphabet.',
    },
  },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
    trim: true,
    maxlength: [100, "Father's name should not exceed 100 characters."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
    trim: true,
    maxlength: [100, "Father's occupation should not exceed 100 characters."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
    trim: true,
    maxlength: [15, "Father's contact number should not exceed 15 characters."],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
    trim: true,
    maxlength: [100, "Mother's name should not exceed 100 characters."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
    trim: true,
    maxlength: [100, "Mother's occupation should not exceed 100 characters."],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
    trim: true,
    maxlength: [15, "Mother's contact number should not exceed 15 characters."],
  },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
    trim: true,
    maxlength: [100, "Local guardian's name should not exceed 100 characters."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
    trim: true,
    maxlength: [
      100,
      "Local guardian's occupation should not exceed 100 characters.",
    ],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
    trim: true,
    maxlength: [
      15,
      "Local guardian's contact number should not exceed 15 characters.",
    ],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
    trim: true,
    maxlength: [
      255,
      "Local guardian's address should not exceed 255 characters.",
    ],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    trim: true,
    unique: true,
    minlength: [5, 'Student ID should be at least 5 characters long.'],
    maxlength: [20, 'Student ID should not exceed 20 characters.'],
  },
  name: {
    type: studentNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender.',
    },
    required: [true, 'Gender is required.'],
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    maxlength: [100, 'Email should not exceed 100 characters.'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email.',
    },
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required.'],
    trim: true,
    maxlength: [15, 'Contact number should not exceed 15 characters.'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
    trim: true,
    maxlength: [
      15,
      'Emergency contact number should not exceed 15 characters.',
    ],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group.',
    },
    required: [true, 'Blood group is required.'],
    trim: true,
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
    trim: true,
    maxlength: [255, 'Present address should not exceed 255 characters.'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
    trim: true,
    maxlength: [255, 'Permanent address should not exceed 255 characters.'],
  },
  guardian: {
    type: GuardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardians: {
    type: LocalGuardianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImg: {
    type: String,
    trim: true,
    maxlength: [255, 'Profile image URL should not exceed 255 characters.'],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: '{VALUE} is not a valid status.',
    },
    required: [true, 'Status is required.'],
    trim: true,
  },
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
