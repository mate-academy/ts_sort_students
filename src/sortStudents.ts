
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  // write your function
  const arrStudents = [...students];

  function sumAverage(value: number[]): number {
    return value.reduce((sum, current) => sum + current, 0) / value.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return order === 'asc'
        ? arrStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : arrStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? arrStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : arrStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrStudents.sort((a, b) => sumAverage(a[sortBy])
          - sumAverage(b[sortBy]))
        : arrStudents.sort((a, b) => sumAverage(b[sortBy])
          - sumAverage(a[sortBy]));

    default: return arrStudents;
  }
}
