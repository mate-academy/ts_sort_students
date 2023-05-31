
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const sortedStudents = copyStudents.sort((student, nextStudent) => {
    let studentData: string | number | boolean | number[] = student[sortBy];
    let nextStudentData
    : string
    | number
    | boolean
    | number[]
    = nextStudent[sortBy];

    if (sortBy === SortType.AverageGrade) {
      studentData = student[sortBy]
        .reduce((total, mark) => total + mark) / student[sortBy].length;

      nextStudentData = nextStudent[sortBy]
        .reduce((total, mark) => total + mark) / nextStudent[sortBy].length;

      return order === 'asc'
        ? studentData - nextStudentData
        : nextStudentData - studentData;
    }

    if (typeof studentData === 'number'
    && typeof nextStudentData === 'number') {
      return order === 'asc'
        ? studentData - nextStudentData
        : nextStudentData - studentData;
    }

    if (typeof studentData === 'string'
    && typeof nextStudentData === 'string') {
      return order === 'asc'
        ? studentData.localeCompare(nextStudentData)
        : nextStudentData.localeCompare(studentData);
    }

    const studentDataBooleanToNum = studentData ? 1 : 0;
    const nextStudentDataBooleanToNum = nextStudentData ? 1 : 0;

    return order === 'asc'
      ? studentDataBooleanToNum - nextStudentDataBooleanToNum
      : nextStudentDataBooleanToNum - studentDataBooleanToNum;
  });

  return sortedStudents;
}
