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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a = 1;

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,

): Student[] {
  const isAscending: boolean = order === 'asc';

  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return isAscending
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name);
      });
      break;

    case SortType.Surname:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return isAscending
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return isAscending
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return isAscending
          ? Number(firstStudent.married) - Number(secondStudent.married)
          : Number(secondStudent.married) - Number(firstStudent.married);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return isAscending
          ? getAverageGrade(firstStudent.grades)
          - getAverageGrade(secondStudent.grades)
          : getAverageGrade(secondStudent.grades)
          - getAverageGrade(firstStudent.grades);
      });
      break;

    default: break;
  }

  return studentsCopy;
}
