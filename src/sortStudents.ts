export function average(arr: number[]): number {
  return arr.reduce((prev, current) => prev + current, 0) / arr.length;
}
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order : SortOrder,
): Student[] | number {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((student1, student2) => (
          student1[sortBy].localeCompare(student2[sortBy])))
        : copy.sort((student1, student2) => (
          student2[sortBy].localeCompare(student1[sortBy])));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((student1, student2) => +student1[sortBy]
        - +student2[sortBy])
        : copy.sort((student1, student2) => (
          +student2[sortBy] - +student1[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((student1, student2) => (
          average(student1[sortBy]) - average(student2[sortBy])))
        : copy.sort((student1, student2) => (
          average(student2[sortBy]) - average(student1[sortBy])));
    default: return 0;
  }
}
