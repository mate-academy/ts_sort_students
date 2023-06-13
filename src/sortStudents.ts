
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

// function for average

function avGrad(grades: number[]): number {
  const av = grades.reduce((sum, element) => sum + element, 0) / grades.length;

  return av;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedArray = [...students];

  copiedArray.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc' ? 1 : -1) * a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc' ? 1 : -1) * (+a[sortBy] - +b[sortBy]);

      case SortType.AverageGrade:
        return (
          (order === 'asc' ? 1 : -1)
        * (avGrad(a.grades) - avGrad(b.grades))
        );

      default:
        throw new Error();
    }
  });

  return copiedArray;
}
