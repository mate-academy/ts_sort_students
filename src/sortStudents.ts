
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy: Student[] = [...students];

  function getAverage(array: number[]): number {
    return array.reduce((sum: number, num: number) => sum + num, 0)
      / array.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studCopy.sort(
        (firstStud: Student, secondStud: Student) => {
          return order === 'asc'
            ? firstStud[sortBy].localeCompare(secondStud[sortBy])
            : secondStud[sortBy].localeCompare(firstStud[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studCopy.sort(
        (firstStud: Student, secondStud: Student) => {
          return order === 'asc'
            ? +firstStud[sortBy] - +secondStud[sortBy]
            : +secondStud[sortBy] - +firstStud[sortBy];
        },
      );

    case SortType.AverageGrade:
      return studCopy.sort(
        (firstStud: Student, secondStud: Student) => {
          return order === 'asc'
            ? getAverage(firstStud[sortBy]) - getAverage(secondStud[sortBy])
            : getAverage(secondStud[sortBy]) - getAverage(firstStud[sortBy]);
        },
      );

    default:
      throw new Error('Sorting failed');
  }
}
