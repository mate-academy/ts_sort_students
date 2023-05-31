
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

function averageGrade(grades: number[]): number {
  return grades.reduce((acc, value) => acc + value) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    return studentsCopy.sort((
      firstStudent: Student,
      secondStudent: Student,
    ) => (
      order === 'asc'
        ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
        : secondStudent[sortBy].localeCompare(secondStudent[sortBy])
    ));
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    return studentsCopy.sort((
      firstStudent: Student,
      secondStudent: Student,
    ) => (
      order === 'asc'
        ? +firstStudent[sortBy] - +secondStudent[sortBy]
        : +secondStudent[sortBy] - +firstStudent[sortBy]
    ));
  }

  if (sortBy === SortType.AverageGrade) {
    return studentsCopy.sort((
      firstStudent: Student,
      secondStudent: Student,
    ) => (
      order === 'asc'
        ? averageGrade(firstStudent.grades) - averageGrade(secondStudent.grades)
        : averageGrade(secondStudent.grades) - averageGrade(firstStudent.grades)
    ));
  }

  return students;
}
