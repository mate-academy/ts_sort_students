
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
    const sortingOrder = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name: case SortType.Surname:
        return (prevStudent[sortBy].localeCompare(curStudent[sortBy])
          * sortingOrder);
      case SortType.Age: case SortType.Married:
        return (+prevStudent[sortBy] - +curStudent[sortBy]) * sortingOrder;
      case SortType.AverageGrade:
        return ((getAverageGrade(prevStudent) - getAverageGrade(curStudent))
          * sortingOrder);
      default: return 0;
    }
  });
}
