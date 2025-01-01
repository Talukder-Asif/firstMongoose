import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentZodValidationSchema from './student.zod.validition';

// import studentJoiSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    // Data validation using joi

    // const { value, error } = studentJoiSchema.validate(student);
    // console.log(value, error?.details);

    // Creating a schema validation using zod
    const zodParseData = studentZodValidationSchema.parse(student);

    const result = await StudentService.createStudentIntoDB(zodParseData);

    // Send Response
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Student created unsuccessfully',
      error: error,
    });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getSingleStudentFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
