
export interface Student {
  // describe Student interface
  name: string,
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function calculateAverageGrades(grades: number[]): number {
    return grades.reduce((a, b) => a + b) / grades.length;
  }

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
          ? calculateAverageGrades(current.grades)
            - calculateAverageGrades(next.grades)
          : calculateAverageGrades(next.grades)
            - calculateAverageGrades(current.grades);

      default:
        throw new Error('verify parametrs');
    }
  });
}
