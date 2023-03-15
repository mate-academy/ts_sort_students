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

function getAverageGrade({ grades }: Student): number {
  return grades.reduce((total, amount) => total + amount) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  return copyStudents.sort((prevStudent, curStudent) => {
    const sortingOrder = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          prevStudent[sortBy].localeCompare(curStudent[sortBy]) * sortingOrder
        );

      case SortType.Age:
      case SortType.Married:
        return (+prevStudent[sortBy] - +curStudent[sortBy]) * sortingOrder;

      case SortType.AverageGrade:
        return (
          (getAverageGrade(prevStudent) - getAverageGrade(curStudent))
          * sortingOrder
        );

      default:
        return 0;
    }
  });
}
