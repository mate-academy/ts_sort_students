
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function getAverageNum(array: number[]): number {
    return array.reduce((sum: number, num: number) => sum + num, 0)
      / array.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (firstStudent: Student, secondStudent: Student) => {
          return order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (firstStudent: Student, secondStudent: Student) => {
          return order === 'asc'
            ? +firstStudent[sortBy] - +secondStudent[sortBy]
            : +secondStudent[sortBy] - +firstStudent[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (firstStudent: Student, secondStudent: Student) => {
          return order === 'asc'
            ? getAverageNum(firstStudent[sortBy])
            - getAverageNum(secondStudent[sortBy])
            : getAverageNum(secondStudent[sortBy])
            - getAverageNum(firstStudent[sortBy]);
        },
      );

    default:
      throw new Error('Invalid sort type');
  }
}
