// describe Student type
// create and export SortType enum

// import { strict } from 'assert';

// create SortOrder type
interface Student {
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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
          : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      });

    default:
      return studentsCopy;
  }
}
