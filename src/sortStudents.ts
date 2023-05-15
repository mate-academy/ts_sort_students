
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
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

function getAverageGrade(array: number[]): number {
  const sum: number
    = array.reduce((accum: number, current: number) => accum + current, 0);

  return sum / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return copy.sort(
          (a: Student, b: Student) => a.name.localeCompare(b.name),
        );
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        return copy.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        );
      }
      break;
    case SortType.Age:
      if (order === 'desc') {
        return copy.sort(
          (a: Student, b: Student) => b.age - a.age,
        );
      }
      break;
    case SortType.Married:
      if (order === 'desc') {
        return copy.sort(
          (a: Student, b: Student) => Number(b.married) - Number(a.married),
        );
      }
      break;
    case SortType.AverageGrade:
      if (order === 'desc') {
        return copy.sort(
          (a: Student, b: Student) => getAverageGrade(b.grades)
            - getAverageGrade(a.grades),
        );
      }

      if (order === 'asc') {
        return copy.sort(
          (a: Student, b: Student) => getAverageGrade(a.grades)
            - getAverageGrade(b.grades),
        );
      }
      break;
    default:
      return copy;
  }

  return copy;
}
