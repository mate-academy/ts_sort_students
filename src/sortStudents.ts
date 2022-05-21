export function average(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
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

// create SortOrder type
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
        ? copy.sort((student, student2) => +student[sortBy] - +student2[sortBy])
        : copy.sort((student, student2) => (
          +student2[sortBy] - +student[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((student, student2) => (
          average(student[sortBy]) - average(student2[sortBy])))
        : copy.sort((student, student2) => (
          average(student2[sortBy]) - average(student[sortBy])));
    default: return 0;
  }
}
