
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType{
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function getAverageGrade(grades: number[]):number {
  const sum:number = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) :Student[] {
  const copyStudents:Student[] = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      return copyStudents.sort((a:Student,
        b:Student) => a[sortBy].localeCompare(b[sortBy]));
    }

    return copyStudents.sort((a:Student,
      b:Student) => b[sortBy].localeCompare(a[sortBy]));
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    if (order === 'asc') {
      return copyStudents.sort((a:Student,
        b:Student) => +a[sortBy] - +b[sortBy]);
    }

    return copyStudents.sort((a:Student, b:Student) => +b[sortBy] - +a[sortBy]);
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return copyStudents.sort((a:Student,
        b:Student) => getAverageGrade(a.grades) - getAverageGrade(b.grades));
    }

    return copyStudents.sort((a:Student,
      b:Student) => getAverageGrade(b.grades) - getAverageGrade(a.grades));
  }

  return copyStudents;
}
