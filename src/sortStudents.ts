
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(array: number[]): number {
  const sum = array.reduce((a, b) => a + b, 0);

  return (sum / array.length) || 0;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const isAsc = order === 'asc';

  switch (sortBy) {
    case SortType.Age:
      return [...students].sort((studentA, studentB) => {
        return isAsc
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });
    case SortType.Married:
      return [...students].sort((studentA, studentB) => {
        return isAsc
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);
      });
    case SortType.Name:
      return [...students].sort((studentA, studentB) => {
        return isAsc
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      });
    case SortType.Surname:
      return [...students].sort((studentA, studentB) => {
        return isAsc
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      });
    case SortType.AverageGrade:
      return [...students].sort((studentA, studentB) => {
        return isAsc
          ? calculateAverage(studentA.grades)
          - calculateAverage(studentB.grades)
          : calculateAverage(studentB.grades)
          - calculateAverage(studentA.grades);
      });
    default:
      return students;
  }
}
