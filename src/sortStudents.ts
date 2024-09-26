
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

export function getAverageMark(marks: number[]): number {
  return marks.reduce((total: number, mark: number) => total + mark, 0)
    / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort(
    (a: Student, b: Student): number => {
      let sortedNum = 0;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          sortedNum = a[sortBy].localeCompare(b[sortBy]);
          break;

        case SortType.Age:
        case SortType.Married:
          sortedNum = +a[sortBy] - +b[sortBy];
          break;

        case SortType.AverageGrade:
          sortedNum = getAverageMark(a[sortBy]) - getAverageMark(b[sortBy]);
          break;

        default:
          return 0;
      }

      return order === 'desc' && sortedNum !== 0 ? -sortedNum : sortedNum;
    },
  );
}
