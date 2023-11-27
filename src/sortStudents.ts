export interface Student {
  name: string
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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      case SortType.Age:
        return order === 'asc' ? a.age - b.age : b.age - a.age;

      case SortType.Married:
        if (order === 'asc' && a.married !== b.married) {
          return a.married ? 1 : -1;
        }

        if (order === 'desc' && a.married !== b.married) {
          return a.married ? -1 : 1;
        }

        return 0;
      case SortType.AverageGrade:
        // eslint-disable-next-line no-case-declarations
        const averageA = calculateAverage(a.grades);
        // eslint-disable-next-line no-case-declarations
        const averageB = calculateAverage(b.grades);

        return order === 'asc' ? averageA - averageB : averageB - averageA;
      default:
        return 0;
    }
  });

  return sortedStudents;
}
