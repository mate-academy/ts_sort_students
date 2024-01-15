
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  const sumOfGrades: number = grades.reduce((sum, grade) => grade + sum, 0);

  return sumOfGrades / grades.length;
}

function sortHandler(
  studentA: Student,
  studentB: Student,
  sortType: SortType,
  order: SortOrder,
): number {
  const getSortValue = (student: Student): number | string | boolean => {
    return sortType === SortType.AverageGrade
      ? averageGrade(student.grades)
      : student[sortType.toLocaleLowerCase()];
  };

  const studentAValue = getSortValue(studentA);
  const studentBValue = getSortValue(studentB);

  if (typeof studentAValue === 'string'
    && typeof studentBValue === 'string') {
    return order === 'asc'
      ? studentAValue.localeCompare(studentBValue)
      : studentBValue.localeCompare(studentAValue);
  }

  return order === 'asc'
    ? Number(studentAValue) - Number(studentBValue)
    : Number(studentBValue) - Number(studentAValue);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy: Student[] = [...students];

  return studentsCopy
    .sort((studentA, studentB) => sortHandler(
      studentA, studentB, sortBy, order,
    ));
}
