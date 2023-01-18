
export interface Student {
  // describe Student interface
  name: string;
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((current, next) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? current[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(current[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +current[sortBy] - +next[sortBy]
          : +next[sortBy] - +current[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? current.grades.reduce((a, b) => a + b) / current.grades.length
            - next.grades.reduce((a, b) => a + b) / next.grades.length
          : next.grades.reduce((a, b) => a + b) / next.grades.length
            - current.grades.reduce((a, b) => a + b) / current.grades.length;

      default:
        throw new Error('verify parametrs');
    }
  });
}
