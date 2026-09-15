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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

type SortValue = string | number;

function getAverageGrade(grades: number[]): number {
  const gradesSum = grades.reduce((sum, grade) => sum + grade, 0);

  return gradesSum / grades.length;
}

function getSortValue(student: Student, sortBy: SortType): SortValue {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
    case SortType.Age:
      return student[sortBy];

    case SortType.Married:
      return Number(student.married);

    case SortType.AverageGrade:
      return getAverageGrade(student.grades);

    default:
      return 0;
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  copiedStudents.sort((firstStudent, secondStudent) => {
    const firstValue = getSortValue(firstStudent, sortBy);
    const secondValue = getSortValue(secondStudent, sortBy);

    if (firstValue === secondValue) {
      return 0;
    }

    const comparison = firstValue > secondValue ? 1 : -1;

    return order === 'asc' ? comparison : -comparison;
  });

  return copiedStudents;
}
