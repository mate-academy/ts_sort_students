
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageValue(arr: number[]): number {
  return arr.reduce((calc: number, num: number): number => calc + num, 0)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((first: Student, second: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +first[sortBy] - +second[sortBy]
          : +second[sortBy] - +first[sortBy];

      default:
        return (order === 'asc')
          ? getAverageValue(first[sortBy]) - getAverageValue(second[sortBy])
          : getAverageValue(second[sortBy]) - getAverageValue(first[sortBy]);
    }
  });

  return copyStudents;
}
