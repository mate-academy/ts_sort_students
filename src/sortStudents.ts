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
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    return copyStudents.sort((student1, student2) => (
      order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])
    ));
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    return copyStudents.sort((student1, student2) => (
      order === 'asc'
        ? Number(student1[sortBy]) - Number(student2[sortBy])
        : Number(student2[sortBy]) - Number(student1[sortBy])
    ));
  }

  function AverageGrade(grades: number[]): number {
    const gradesSum = grades.reduce((amount, grade) => amount + grade, 0);

    return gradesSum / grades.length;
  }

  if (sortBy === SortType.AverageGrade) {
    return copyStudents.sort((student1, student2) => (
      order === 'asc'
        ? AverageGrade(student1.grades) - AverageGrade(student2.grades)
        : AverageGrade(student2.grades) - AverageGrade(student1.grades)
    ));
  }

  return students;
}
