
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

export type SortOrder = 'asc' | 'desc';

function calculateAverage(arr: number[]): number {
  return arr.reduce((sum, value) => sum + value, 0) / arr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;

    default:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? calculateAverage(a.grades) - calculateAverage(b.grades)
          : calculateAverage(b.grades) - calculateAverage(a.grades);
      });
      break;
  }

  return copyStudents;
}
