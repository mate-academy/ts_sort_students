
export interface Student {
  name: string;
  surname: string,
  age: number,
  married: boolean,
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

function calculateAverageMark(marks: number[]): number {
  const sumOfMarks = marks.reduce((prev, current) => prev + current, 0);

  return sumOfMarks / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => calculateAverageMark(a[sortBy])
        - calculateAverageMark(b[sortBy]))
        : studentsCopy.sort((a, b) => calculateAverageMark(b[sortBy])
        - calculateAverageMark(a[sortBy]));

    default:
      return studentsCopy;
  }
}
