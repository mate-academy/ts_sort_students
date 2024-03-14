
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  copiedStudents.sort((a, b) => {
    const averageA = a.grades.reduce((acc, curr) => acc + curr, 0)
    / a.grades.length;
    const averageB = b.grades.reduce((acc, curr) => acc + curr, 0)
    / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return (a.married ? 1 : -1) - (b.married ? 1 : -1);
        }

        return (b.married ? 1 : -1) - (a.married ? 1 : -1);

      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      default:
    }

    return 0;
  });

  return copiedStudents;
}
