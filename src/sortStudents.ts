
export interface Student {
  name: string,
  surname: string,
  age:number,
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

export type SortOrder = 'asc' | 'desc';

function getAvereageGrade(arr: number[]): number {
  return arr.reduce((acc, el) => acc + el) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const filteredStudents = [...students];

  return filteredStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvereageGrade(a[sortBy]) - getAvereageGrade(b[sortBy])
          : getAvereageGrade(b[sortBy]) - getAvereageGrade(a[sortBy]);
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      default:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
    }
  });
}
