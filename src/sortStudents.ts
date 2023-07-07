
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
  const avgGradeMethod = (e1: Student, e2: Student): number => {
    return e1.grades.reduce((sum, x): number => sum + x, 0)
           / e1.grades.length - e2.grades.reduce((sum, x): number => sum + x, 0)
           / e2.grades.length;
  };

  const CompareFn = (a: Student, b: Student): number => {
    switch (true) {
      case sortBy === SortType.Name && order === 'asc':
        return (a.name).localeCompare(b.name);

      case sortBy === SortType.Name && order === 'desc':
        return (b.name).localeCompare(a.name);

      case sortBy === SortType.Surname && order === 'asc':
        return (a.surname).localeCompare(b.surname);

      case sortBy === SortType.Surname && order === 'desc':
        return (b.surname).localeCompare(a.surname);

      case sortBy === SortType.Age && order === 'asc':
        return a.age - b.age;

      case sortBy === SortType.Age && order === 'desc':
        return b.age - a.age;

      case sortBy === SortType.Married && order === 'asc':
        return Number(a.married) - Number(b.married);

      case sortBy === SortType.Married && order === 'desc':
        return Number(b.married) - Number(a.married);

      case sortBy === SortType.AverageGrade && order === 'asc':
        return avgGradeMethod(a, b);

      case sortBy === SortType.AverageGrade && order === 'desc':
        return avgGradeMethod(b, a);

      default:
        return 0;
    }
  };

  return [...students].sort(CompareFn);
}
