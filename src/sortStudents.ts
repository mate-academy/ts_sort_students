
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

function getAverage(numbers: number[]): number {
  return (numbers.reduce((acc, num) => acc + num)) / numbers.length;
}

function compareBooleans(boolA: boolean, boolB: boolean): number {
  if (boolA && !boolB) {
    return -1;
  }

  if (!boolA && boolB) {
    return 1;
  }

  return 0;
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
  const studentsSorted = [...students];

  return studentsSorted.sort((aStudent, bStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? aStudent[sortBy].localeCompare(bStudent[sortBy])
          : bStudent[sortBy].localeCompare(aStudent[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? aStudent[sortBy] - bStudent[sortBy]
          : bStudent[sortBy] - aStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(aStudent[sortBy]) - getAverage(bStudent[sortBy])
          : getAverage(bStudent[sortBy]) - getAverage(aStudent[sortBy]);

      case SortType.Married:
        return compareBooleans(aStudent[sortBy], bStudent[sortBy]);

      default:
        return 0;
    }
  });
}
