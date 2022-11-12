
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const arrAvg = (arr:number[]): number => (
  arr.reduce((a, b) => a + b, 0) / arr.length);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student [] {
  const toSortStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return toSortStudents.sort(
        (currentStudent: Student, nextStudent: Student): number => {
          return (order === 'asc')
            ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
            : nextStudent[sortBy].localeCompare(currentStudent[sortBy]);
        },
      );

    case SortType.Age:
    case SortType.Married:
      return toSortStudents.sort(
        (currentStudent: Student, nextStudent: Student): number => {
          return (order === 'asc')
            ? Number(currentStudent[sortBy]) - Number(nextStudent[sortBy])
            : Number(nextStudent[sortBy]) - Number(currentStudent[sortBy]);
        },
      );

    case SortType.AverageGrade:
      return toSortStudents.sort(
        (currentStudent: Student, nextStudent: Student): number => {
          return (order === 'asc')
            ? arrAvg(currentStudent[sortBy]) - arrAvg(nextStudent[sortBy])
            : arrAvg(nextStudent[sortBy]) - arrAvg(currentStudent[sortBy]);
        },
      );

    default:
      throw new Error('bad input: Check "bySort"');
  }
}
