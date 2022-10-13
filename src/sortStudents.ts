
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrades(grades: number[]): number {
  return grades.reduce((sum, el) => sum + el, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        return studentsCopy.sort((b, a) => a[sortBy].localeCompare(b[sortBy]));
      }
      break;
    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return studentsCopy
          .sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
      }

      if (order === 'desc') {
        return studentsCopy
          .sort((b, a) => Number(a[sortBy]) - Number(b[sortBy]));
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentsCopy
          .sort((a, b) => averageGrades(a.grades) - averageGrades(b.grades));
      }

      if (order === 'desc') {
        return studentsCopy
          .sort((b, a) => averageGrades(a.grades) - averageGrades(b.grades));
      }
      break;
    default:
  }

  return studentsCopy;
}
