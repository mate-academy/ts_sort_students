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

export type SortOrder = 'asc' | 'desc';

export function averageGrades(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortField: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  copyStudents.sort((student1, student2) => {
    let x = student1;
    let y = student2;

    if (order === 'desc') {
      x = student2;
      y = student1;
    }

    switch (sortField) {
      case SortType.Name:
      case SortType.Surname:
        return x[sortField].localeCompare(y[sortField]);

      case SortType.Age:
        return x[sortField] - y[sortField];

      case SortType.Married:
        return +x[sortField] - +y[sortField];

      case SortType.AverageGrade:
        return averageGrades(x[sortField]) - averageGrades(y[sortField]);

      default:
        return 0;
    }
  });

  return copyStudents;
}
