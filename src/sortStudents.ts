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
  const copyStudents = [...students];

  function findAverageGrade(grades: number[]): number {
    return grades.reduce((sum, curr) => sum + curr) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a.name.localeCompare(b.name))
        : copyStudents.sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a.age - +b.age)
        : copyStudents.sort((a, b) => +b.age - +a.age);
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a.married - +b.married)
        : copyStudents.sort((a, b) => +b.married - +a.married);
    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort(
          (a, b) => findAverageGrade(a.grades) - findAverageGrade(b.grades),
        )
        : copyStudents.sort(
          (a, b) => findAverageGrade(b.grades) - findAverageGrade(a.grades),
        );

    default:
      return copyStudents;
  }
}
