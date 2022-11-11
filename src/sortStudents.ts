
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

function countAverage(arr: number[]): number {
  return arr.reduce((prev, item) => prev + item, 0) / arr.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((student: Student, nextStudent: Student) => {
        return order === 'asc'
          ? student[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(student[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((student: Student, nextStudent: Student) => {
        return order === 'asc'
          ? student[sortBy] - nextStudent[sortBy]
          : nextStudent[sortBy] - student[sortBy];
      });

    case SortType.Married:
      return studentsCopy.sort((student: Student, nextStudent: Student) => {
        return order === 'asc'
          ? +student[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +student[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((student: Student, nextStudent: Student) => {
        return order === 'asc'
          ? countAverage(student[sortBy]) - countAverage(nextStudent[sortBy])
          : countAverage(nextStudent[sortBy]) - countAverage(student[sortBy]);
      });

    default: throw new Error('Something went wrong');
  }
}
