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

function getAvg(student: Student): number {
  return student.grades.reduce((ac, mark) => ac + mark) / student.grades.length;
}

type Sort = (prev: Student, cur: Student, sortBy?: string) => number;

const byAvgAsc: Sort = (prev, cur) => getAvg(prev) - getAvg(cur);
const byAvgDesc: Sort = (prev, cur) => getAvg(cur) - getAvg(prev);

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: object[], sortBy: SortType, order: SortOrder,
): object[] {
  const studCopy: object[] = [...students];

  switch (sortBy) {
    case 'average':
      return order === 'asc'
        ? studCopy.sort(byAvgAsc)
        : studCopy.sort(byAvgDesc);

    case 'name':
    case 'surname':
      return order === 'asc'
        ? studCopy.sort((prev, cur) => prev[sortBy].localeCompare(cur[sortBy]))
        : studCopy.sort((prev, cur) => cur[sortBy].localeCompare(prev[sortBy]));

    case 'married':
    case 'age':
      return order === 'asc'
        ? studCopy.sort((prev, cur) => prev[sortBy] - cur[sortBy])
        : studCopy.sort((prev, cur) => cur[sortBy] - prev[sortBy]);

    default:
      throw new Error('Error! Check sortBy param');
  }
}
