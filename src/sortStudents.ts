
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade({ grades }: Student): number {
  const sum = grades.reduce((all, next) => all + next);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent, curStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(curStudent[sortBy])
          : curStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +prevStudent[sortBy] - +curStudent[sortBy]
          : +curStudent[sortBy] - +prevStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? (getAverageGrade(prevStudent) - getAverageGrade(curStudent))
          : (getAverageGrade(curStudent) - getAverageGrade(prevStudent));
      default:
        return 0;
    }
  });
}
