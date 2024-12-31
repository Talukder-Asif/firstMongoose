import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  studentName,
} from './student.interface';

const studentNameSchema = new Schema<studentName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: studentNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender.',
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group.',
    },
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: GuardianSchema,
    required: true,
  },
  localGuardians: {
    type: LocalGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: '{VALUE} is not a valid status.',
    },
    required: true,
  },
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
