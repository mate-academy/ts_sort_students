
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

export function averageGrades(grades: number[]): number {
  return grades.reduce((a: number, b: number) => (a + b), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, secondStudent: Student) => {
    let first = firstStudent;
    let second = secondStudent;

    if (order === 'desc') {
      first = secondStudent;
      second = firstStudent;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return first[sortBy].localeCompare(second[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return Number(first[sortBy]) - Number(second[sortBy]);

      case SortType.AverageGrade:
        return averageGrades(first[sortBy]) - averageGrades(second[sortBy]);
      default: throw new Error('invalid values');
    }
  });
}
