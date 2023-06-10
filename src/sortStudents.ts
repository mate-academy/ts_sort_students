
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
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]):number {
  const sum:number = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) :Student[] {
  const copyStudents:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a:Student,
        b:Student) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((a:Student,
        b:Student) => (order === 'asc'
        ? +b[sortBy] - +a[sortBy] : +b[sortBy] - +a[sortBy]));

    case SortType.AverageGrade:
      return copyStudents.sort((a:Student,
        b:Student) => (order === 'asc'
        ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
        : getAverageGrade(b.grades)
        - getAverageGrade(a.grades)));

    default:
      return copyStudents;
  }
}
