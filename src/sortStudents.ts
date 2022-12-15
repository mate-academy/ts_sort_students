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

export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? [...students].sort((a, b) => +a[sortBy] - +b[sortBy])
        : [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? [...students].sort((a, b) => (
          getAvarageGrade(a[sortBy]) - getAvarageGrade(b[sortBy])
        ))
        : [...students].sort((a, b) => (
          getAvarageGrade(b[sortBy]) - getAvarageGrade(a[sortBy])
        ));
    default:
      return [...students];
  }
}
