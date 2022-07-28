export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(student: Student): number {
  return student.grades.reduce(
    (gradeA, gradeB) => gradeA + gradeB,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((studentA, studentB) => {
    const firstStudent = order === 'asc'
      ? studentA
      : studentB;
    const secondStudent = order === 'asc'
      ? studentB
      : studentA;
    const firstStudentAverage = getAverageGrades(firstStudent);
    const secondStudentAverage = getAverageGrades(secondStudent);

    switch (sortBy) {
      case SortType.Name:
        return firstStudent.name.localeCompare(secondStudent.name);

      case SortType.Surname:
        return firstStudent.surname.localeCompare(secondStudent.surname);

      case SortType.Age:
        return firstStudent.age - secondStudent.age;

      case SortType.Married:
        return Number(firstStudent.married) - Number(secondStudent.married);

      default:
        return firstStudentAverage - secondStudentAverage;
    }
  });
}
