
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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageAge(student: Student): number {
  return student.grades.reduce((prev, curr) => prev + curr, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const numberOrder: number = order === 'asc' ? 1 : -1;

  return [...students].sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return numberOrder
          * firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return numberOrder * (+firstStudent[sortBy] - +secondStudent[sortBy]);
      case SortType.AverageGrade:
        return numberOrder
          * (getAverageAge(firstStudent) - getAverageAge(secondStudent));
      default:
        return 0;
    }
  });
}
