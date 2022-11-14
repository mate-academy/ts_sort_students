
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

function averageCalculate(grades: number[]): number {
  return grades.reduce((sum: number, item: number) => sum + item, 0)
    / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order :SortOrder): Student[] {
  const newStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return newStudents.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return newStudents.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return newStudents.sort((a: Student, b: Student) => {
        return (order === 'asc')
          ? averageCalculate(a[sortBy]) - averageCalculate(b[sortBy])
          : averageCalculate(b[sortBy]) - averageCalculate(a[sortBy]);
      });

    default:
      return newStudents;
  }
}
