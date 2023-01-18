
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAvgGrade = (marks:number[]): number => {
  const averageMark:number = marks
    .reduce((prevNum: number, nextNum: number): number => prevNum + nextNum, 0)
    / marks.length;

  return averageMark;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
// return students.sort((elem) => elem = sortBy)
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvgGrade(a[sortBy]) - getAvgGrade(b[sortBy])
          : getAvgGrade(b[sortBy]) - getAvgGrade(a[sortBy]);
      default: return [...students];
    }
  });
}
