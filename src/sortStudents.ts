export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

export type SortOrder = 'asc' | 'desc';
type Sort = (prev: Student, cur: Student) => number;

function getAvg(student: Student): number {
  return student.grades.reduce((ac, mark) => ac + mark) / student.grades.length;
}

const byAvgAsc: Sort = (prev, cur) => getAvg(prev) - getAvg(cur);
const byAvgDesc: Sort = (prev, cur) => getAvg(cur) - getAvg(prev);

export function sortStudents(
  students: object[], sortBy: SortType, order: SortOrder,
): object[] {
  const studCopy: object[] = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return order === 'asc'
        ? studCopy.sort(byAvgAsc)
        : studCopy.sort(byAvgDesc);

    case SortType.Name:
    case SortType.Surname:
      return studCopy.sort((prev, cur) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(cur[sortBy])
          : cur[sortBy].localeCompare(prev[sortBy]);
      });

    case SortType.Married:
    case SortType.Age:
      return studCopy.sort((prev, cur) => {
        return order === 'asc'
          ? prev[sortBy] - cur[sortBy]
          : cur[sortBy] - prev[sortBy];
      });

    default:
      throw new Error('Error! Check sortBy param');
  }
}
