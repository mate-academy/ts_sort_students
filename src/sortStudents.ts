// describe Student type
// create and export SortType enum
// create SortOrder type

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

export function averageGrade(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);
      });
      break;

    case SortType.Age:
      copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first[sortBy] - second[sortBy]
          : second[sortBy] - first[sortBy];
      });
      break;

    case SortType.Married:
      copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? +first[sortBy] - +second[sortBy]
          : +second[sortBy] - +first[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? averageGrade(first[sortBy]) - averageGrade(second[sortBy])
          : averageGrade(second[sortBy]) - averageGrade(first[sortBy]);
      });
      break;

    default:
      break;
  }

  return copy;
}
