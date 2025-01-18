import { TStudent } from './student.interface';
import Student from './student.schema';

const createStudentIntoDB = async (studentData: TStudent) => {
  const result = await Student.create(studentData); //Build in Static Method

  if (await Student.isUserExist(studentData.id)) {
    throw new Error('Student already exist');
  }

  // const student = new Student(studentData);
  // if (await student?.isUserExist(studentData.id)) {
  //   throw new Error('Student already exist');
  // }
  // const result = await student.save(); //Build in Instant Method

  return result;
};

const getStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
};
