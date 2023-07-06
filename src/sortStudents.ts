export interface Student {
  name: string;
  surname: string;
  age: number
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studArr = [...students];

  function calculateAverage(grades: number[]): number {
    return grades
      .reduce((sum, val) => sum + val, 0) / grades.length;
  }

  function localeCompare(a: string, b: string): number {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }

  function numberOrderHelper(a: number, b: number): number {
    return order === 'asc' ? a - b : b - a;
  }

  studArr.sort((a: Student, b: Student) => {
    switch (sortBy) {
      default:
        return 0;
      case SortType.Name:
        return localeCompare(a.name, b.name);
      case SortType.Surname:
        return localeCompare(a.surname, b.surname);
      case SortType.Age:
        return numberOrderHelper(a.age, b.age);
      case SortType.Married:
        return numberOrderHelper(Number(a.married), Number(b.married));
      case SortType.AverageGrade:
        return numberOrderHelper(
          calculateAverage(a.grades), calculateAverage(b.grades),
        );
    }
  });

  return studArr;
}
