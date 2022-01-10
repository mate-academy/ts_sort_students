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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  function getAverageGrade(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  const sortedStudents: Student[] = [...students];

  if (order === 'asc') {
    sortedStudents.sort((a, b) => {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);

        case SortType.Surname:
          return a.surname.localeCompare(b.surname);

        case SortType.Age:
          return a.age - b.age;

        case SortType.AverageGrade:
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);

        default:
          return 0;
      }
    });
  } else {
    sortedStudents.sort((a, b) => {
      switch (sortBy) {
        case SortType.Name:
          return b.name.localeCompare(a.name);

        case SortType.Surname:
          return b.surname.localeCompare(a.surname);

        case SortType.Age:
          return b.age - a.age;

        case SortType.Married:
          return Number(b.married) - Number(a.married);

        case SortType.AverageGrade:
          return getAverageGrade(b.grades) - getAverageGrade(a.grades);

        default:
          return 0;
      }
    });
  }

  return sortedStudents;
}
