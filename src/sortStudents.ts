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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray = [...students];
  const average = (grades: number[]): number => grades
    .reduce((total: number, num: number) => total + num, 0) / grades.length;

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      return studentsArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    return studentsArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    if (order === 'asc') {
      return studentsArray.sort((a, b) => +a[sortBy] - +b[sortBy]);
    }

    return studentsArray.sort((a, b) => +b[sortBy] - +a[sortBy]);
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return studentsArray
        .sort((a, b) => average(a.grades) - average(b.grades));
    }

    return studentsArray.sort((a, b) => average(b.grades) - average(a.grades));
  }

  return studentsArray;
}
