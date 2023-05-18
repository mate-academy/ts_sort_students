
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, value) => (
    acc + value), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    return studentsCopy.sort((student1, student2) => (
      order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])
    ));
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    return studentsCopy.sort((student1, student2) => (
      order === 'asc'
        ? Number(student1[sortBy]) - Number(student2[sortBy])
        : Number(student2[sortBy]) - Number(student1[sortBy])
    ));
  }

  if (sortBy === SortType.AverageGrade) {
    return studentsCopy.sort((student1, student2) => (
      order === 'asc'
        ? getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
        : getAverageGrade(student2.grades) - getAverageGrade(student1.grades)
    ));
  }

  return students;
}
