
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

export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce(
    (sum: number, grade: number) => sum + grade,
  ) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (a: Student, b: Student) => {
          return (order === 'asc')
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (a: Student, b: Student) => {
          return (order === 'asc')
            ? getAvarageGrade(a[sortBy]) - getAvarageGrade(b[sortBy])
            : getAvarageGrade(b[sortBy]) - getAvarageGrade(a[sortBy]);
        },
      );

    default:
      return studentsCopy.sort(
        (a: Student, b: Student) => {
          return (order === 'asc')
            ? +a[sortBy] - (+b[sortBy])
            : +b[sortBy] - (+a[sortBy]);
        },
      );
  }
}
