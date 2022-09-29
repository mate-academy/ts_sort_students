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

function calculateAverageNumber(array: number[]): number {
  return array.reduce((sum, x) => sum + x, 0) / array.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      });
      break;

    case SortType.Surname:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      });
      break;

    case SortType.Age:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? +studentA.age - +studentB.age
          : +studentB.age - +studentA.age;
      });
      break;

    case SortType.Married:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? calculateAverageNumber(studentA.grades)
          - calculateAverageNumber(studentB.grades)
          : calculateAverageNumber(studentB.grades)
          - calculateAverageNumber(studentA.grades);
      });
      break;

    default:
      return sortedStudents;
  }

  return sortedStudents;
}
