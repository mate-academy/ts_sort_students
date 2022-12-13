
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
  return grades
    .reduce((a: number, b: number) => (a + b), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return (order === 'asc')
          ? averageGrades(firstStudent[sortBy])
          - averageGrades(secondStudent[sortBy])
          : averageGrades(secondStudent[sortBy])
          - averageGrades(firstStudent[sortBy]);
      default: throw new Error('invalid values');
    }
  });
}
