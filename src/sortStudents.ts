
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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray: Student[] = [...students];
  const orderIsAsc: boolean = order === 'asc';
  const reducer = (prev: number, cur: number): number => prev + cur;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedArray.sort((prev, cur) => (orderIsAsc
        ? (prev[sortBy]).localeCompare(cur[sortBy])
        : (cur[sortBy]).localeCompare(prev[sortBy])));
      break;

    case SortType.Age:
      sortedArray.sort((prev, cur) => (orderIsAsc
        ? prev.age - cur.age
        : cur.age - prev.age));
      break;

    case SortType.Married:
      sortedArray.sort((prev, cur) => (orderIsAsc
        ? (+prev.married - +cur.married)
        : (+cur.married - +prev.married)));
      break;

    case SortType.AverageGrade:
      sortedArray.sort((prev, cur) => {
        const prevAverGr = prev.grades.reduce(reducer, 0) / prev.grades.length;
        const curAverGr = cur.grades.reduce(reducer, 0) / cur.grades.length;

        return orderIsAsc
          ? prevAverGr - curAverGr
          : curAverGr - prevAverGr;
      });
      break;

    default:
      throw new Error('I don\'t understand you!');
  }

  return sortedArray;
}
