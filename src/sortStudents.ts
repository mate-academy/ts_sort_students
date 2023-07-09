
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
  const sortOrder: number = order === 'asc' ? 1 : -1;
  const copyStudents = [...students];

  function findAverageGrade(grades: number[]): number {
    return grades.reduce((sum, curr) => sum + curr) / grades.length;
  }

  copyStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return sortOrder * a.name.localeCompare(b.name);
      case SortType.Surname:
        return sortOrder * a.surname.localeCompare(b.surname);
      case SortType.Age:
        return sortOrder * (a.age - b.age);
      case SortType.Married:
        return sortOrder * (+a.married - +b.married);
      case SortType.AverageGrade:
        // eslint-disable-next-line max-len
        return sortOrder * (findAverageGrade(a.grades) - findAverageGrade(b.grades));
      default:
        throw new Error('Invalid SortType');
    }
  });

  return copyStudents;
}
