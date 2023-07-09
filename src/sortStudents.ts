
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';


export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | number {
  const allStudents = [...students];

  function findAverageGrade(grades: number[]): number {
    return grades.reduce((sum, curr) => sum + curr) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? allStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : allStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? allStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : allStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      return order === 'asc'
        ? allStudents.sort((a, b) => (
          findAverageGrade(a[sortBy])
          - findAverageGrade(b[sortBy])
        ))
        : allStudents.sort((a, b) => (
          findAverageGrade(b[sortBy])
          - findAverageGrade(a[sortBy])
        ));
    default:
      return 0;
  }
}
