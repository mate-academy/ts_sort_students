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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
):Student[] {
  return [...students].sort((a: Student, b: Student) => {
    const aStudent = order === 'asc' ? a : b;
    const bStudent = order === 'asc' ? b : a;

    switch (sortBy) {
      case SortType.Name:
        return aStudent.name.localeCompare(bStudent.name);

      case SortType.Surname:
        return aStudent.surname.localeCompare(bStudent.surname);

      case SortType.Age:
        return aStudent.age - bStudent.age;

      case SortType.Married:
        return Number(aStudent.married) - Number(bStudent.married);

      case SortType.AverageGrade:
        return getAverage(aStudent.grades) - getAverage(bStudent.grades);

      default:
        return 0;
    }
  });
}
