
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(array: number[]): number {
  return array
    .reduce((acc: number, val: number) => acc + val, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student) => {
          return order === 'asc'
            ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
            : nextStudent[sortBy].localeCompare(currentStudent[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student) => {
          return order === 'asc'
            ? +currentStudent[sortBy] - +nextStudent[sortBy]
            : +nextStudent[sortBy] - +currentStudent[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student) => {
          return order === 'asc'
            ? getAverageGrade(currentStudent[sortBy])
              - getAverageGrade(nextStudent[sortBy])
            : getAverageGrade(nextStudent[sortBy])
              - getAverageGrade(currentStudent[sortBy]);
        },
      );

    default:
      throw new Error('Something goes wrong - try other sort type');
  }
}
