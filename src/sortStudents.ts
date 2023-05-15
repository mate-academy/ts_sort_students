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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      copy.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });

      break;

    case SortType.Surname:
      copy.sort((a, b) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });

      break;

    case SortType.Age:
      copy.sort((a, b) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });

      break;
    case SortType.Married:
      copy.sort((a, b) => {
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);
      });

      break;
    default:
      copy.sort((a, b) => {
        const aAverage: number
          = a.grades.reduce((res: number, el) => res + el, 0) / a.grades.length;
        const bAverage: number
          = b.grades.reduce((res: number, el) => res + el, 0) / b.grades.length;

        if (order === 'asc') {
          return aAverage - bAverage;
        }

        return bAverage - aAverage;
      });

      break;
  }

  return copy;
}
