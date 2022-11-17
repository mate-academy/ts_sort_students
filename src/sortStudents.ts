
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function Average(arr: number[]): number {
  return arr.reduce((sum: number, num: number) => sum + num, 0)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const StudentsCopy: Student[] = [...students];

  return StudentsCopy.sort(
    (currentStudent: Student, nextStudent: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
            : nextStudent[sortBy].localeCompare(currentStudent[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? +currentStudent[sortBy] - +nextStudent[sortBy]
            : +nextStudent[sortBy] - +currentStudent[sortBy];

        case SortType.AverageGrade:
          return order === 'asc'
            ? Average(currentStudent[sortBy]) - Average(nextStudent[sortBy])
            : Average(nextStudent[sortBy]) - Average(currentStudent[sortBy]);

        default:
          throw new Error('Wrong sort type!');
      }
    },
  );
}
