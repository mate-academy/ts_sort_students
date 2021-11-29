
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
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
      sortedArray.sort((prev, cur) => (orderIsAsc
        ? (prev.name).localeCompare(cur.name)
        : (cur.name).localeCompare(prev.name)));
      break;

    case SortType.Surname:
      sortedArray.sort((prev, cur) => (orderIsAsc
        ? (prev.surname).localeCompare(cur.surname)
        : (cur.surname).localeCompare(prev.surname)));
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
