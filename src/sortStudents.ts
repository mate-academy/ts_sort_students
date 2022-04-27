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

export function getAverage(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA, studentB) => {
    let student1 = studentA;
    let student2 = studentB;

    if (order === 'desc') {
      [student1, student2] = [student2, student1];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return +student1[sortBy] - +student2[sortBy];

      case SortType.AverageGrade:
        return getAverage(student1[sortBy]) - getAverage(student2[sortBy]);

      default:
        throw new Error('Unknown type of search!');
    }
  });
}
