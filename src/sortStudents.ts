export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];
  const getAverage = (student: Student): number => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);

    return total / student.grades.length;
  };

  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      result.sort((a, b) => a.surname.localeCompare(b.surname));
    } else {
      result.sort((a, b) => b.surname.localeCompare(a.surname));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      result.sort((a, b) => a.age - b.age);
    } else {
      result.sort((a, b) => b.age - a.age);
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      result.sort((a, b) => +a.married - +b.married);
    } else {
      result.sort((a, b) => +b.married - +a.married);
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      result.sort((a, b) => getAverage(a) - getAverage(b));
    } else {
      result.sort((a, b) => getAverage(b) - getAverage(a));
    }
  }

  return result;
}
