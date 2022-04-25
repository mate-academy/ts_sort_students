
export interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function studentAverageGrade(array: number[]): number {
    return array.reduce((a, b) => a + b) / array.length;
  }

  const newArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newArray.sort((a, b) => +a[sortBy] - +b[sortBy])
        : newArray.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newArray.sort((a, b) => studentAverageGrade(a.grades)
        - studentAverageGrade(b.grades))
        : newArray.sort((a, b) => {
          return studentAverageGrade(b.grades) - studentAverageGrade(a.grades);
        });

    default:
      return newArray;
  }
}
