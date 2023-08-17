export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

const averageGrades = (arrOfGrades: number[]): number => {
  if (arrOfGrades.length === 0) {
    return 0;
  }

  return arrOfGrades.reduce((sum: number,
    grade: number) => sum + grade, 0) / arrOfGrades.length;
};

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

const getValueForSort = (student: Student,
  sortBy: SortType, comparedStudent: Student): number => {
  switch (sortBy) {
    case SortType.Name:
      return student.name.localeCompare(comparedStudent.name);
    case SortType.Surname:
      return student.surname.localeCompare(comparedStudent.surname);
    case SortType.Age:
      return student.age;
    case SortType.AverageGrade:
      return averageGrades(student.grades);
    case SortType.Married:
      return Number(student.married);
    default:
      return 0;
  }
};

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyOfStudent = [...students];
  const multiplier = order === 'asc' ? 1 : -1;

  return copyOfStudent.sort((a, b) => {
    const comparisonValue = getValueForSort(a, sortBy, b);

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return multiplier * comparisonValue;
    }

    return multiplier * (comparisonValue - getValueForSort(b, sortBy, a));
  });
}
