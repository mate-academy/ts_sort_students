
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

function CallbackFn(arrayGrades: number[]): number {
  return arrayGrades
    .reduce((a: number, b: number) => a + b) / arrayGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    const copySortedByName: Student[] = studentsCopy
      .sort((student1: Student, student2: Student) => {
        return student1[sortBy].localeCompare(student2[sortBy]);
      });

    return order === 'desc' ? copySortedByName.reverse() : copySortedByName;
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    const copySortedByAgeOrMarried: Student[] = studentsCopy
      .sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    return copySortedByAgeOrMarried;
  }

  if (sortBy === SortType.AverageGrade) {
    const copySortedByGrade: Student[] = studentsCopy
      .sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? CallbackFn(student1[sortBy]) - CallbackFn(student2[sortBy])
          : CallbackFn(student2[sortBy]) - CallbackFn(student1[sortBy]);
      });

    return copySortedByGrade;
  }

  return studentsCopy;
}
