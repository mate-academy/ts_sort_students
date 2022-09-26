
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = [...students];

  function getAvgGrade(grades: number[]): number {
    return grades
      .reduce((sum: number, acc: number) => sum + acc, 0) / grades.length;
  }

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return newStudents.sort((student1, student2) => (
          student1[sortBy].localeCompare(student2[sortBy])));

      case SortType.Age:
      case SortType.Married:
        return newStudents.sort((student1, student2) => (
          +student1[sortBy] - (+student2[sortBy])));

      case SortType.AverageGrade:
        return newStudents
          .sort((student1, student2) => (
            getAvgGrade(student1.grades) - getAvgGrade(student2.grades)));

      default:
        return newStudents;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return newStudents.sort((student1, student2) => (
          student2[sortBy].localeCompare(student1[sortBy])));

      case SortType.Age:
      case SortType.Married:
        return newStudents.sort((student1, student2) => (
          +student2[sortBy] - (+student1[sortBy])));

      case SortType.AverageGrade:
        return newStudents
          .sort((student1, student2) => (
            getAvgGrade(student2.grades) - getAvgGrade(student1.grades)));

      default:
        return newStudents;
    }
  }

  return newStudents;
}
