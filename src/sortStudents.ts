
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultStudents: Student[] = [...students];
  let averageA;
  let averageB;

  resultStudents.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.AverageGrade:
        averageA = a.grades.reduce((sum: number, x: number) => sum + x)
          / a.grades.length;

        averageB = b.grades.reduce((sum: number, x: number) => sum + x)
          / b.grades.length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        if (order === 'desc') {
          return averageB - averageA;
        }
        break;

      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }
        break;

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }
        break;

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        if (order === 'desc') {
          return b.age - a.age;
        }
        break;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        if (order === 'desc') {
          return Number(b.married) - Number(a.married);
        }
        break;

      default:
        return 0;
    }

    return 1;
  });

  return resultStudents;
}
