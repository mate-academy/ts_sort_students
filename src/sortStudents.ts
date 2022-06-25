
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  return [...students].sort((a, b) => {
    const aAverageGrade
      = a.grades.reduce((sum, grade) => (sum + grade)) / a.grades.length;
    const bAverageGrade
      = b.grades.reduce((sum, grade) => (sum + grade)) / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return (a.name).localeCompare(b.name);
        }

        return (b.name).localeCompare(a.name);

      case SortType.Surname:
        if (order === 'asc') {
          return (a.surname).localeCompare(b.surname);
        }

        return (b.surname).localeCompare(a.surname);

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        if (order === 'asc') {
          return +a.married - +b.married;
        }

        return +b.married - +a.married;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return aAverageGrade - bAverageGrade;
        }

        return bAverageGrade - aAverageGrade;

      default:
        return 0;
    }
  });
}
