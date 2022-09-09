
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function sortNum(numA: number, numB: number, order: SortOrder): number {
  return (order === 'asc'
    ? numA - numB
    : numB - numA);
}

function sortString(strA: string, strB: string, order: SortOrder): number {
  return (order === 'asc'
    ? strA.localeCompare(strB)
    : strB.localeCompare(strA));
}

function sortAverage(numA: number[], numB: number[], order: SortOrder): number {
  return (order === 'asc'
    ? (numA.reduce((sum, n) => sum + n) / numA.length)
        - (numB.reduce((sum, n) => sum + n) / numB.length)
    : (numB.reduce((sum, n) => sum + n) / numB.length)
      - (numA.reduce((sum, n) => sum + n) / numA.length));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let result: Student[] = [];
  let arrayObjTrue: Student[] = [];
  let arrayObjFalse: Student[] = [];

  switch (sortBy) {
    case SortType.Name:
      result = [...students]
        .sort((a, b) => sortString(
          a.name,
          b.name,
          order,
        ));
      break;
    case SortType.Surname:
      result = [...students]
        .sort((a, b) => sortString(
          a.surname,
          b.surname,
          order,
        ));
      break;
    case SortType.Age:
      result = [...students]
        .sort((a, b) => sortNum(a.age, b.age, order));
      break;

    case SortType.Married:
      arrayObjTrue = [...students].filter((a) => a.married);
      arrayObjFalse = [...students].filter((a) => !a.married);

      result = order === 'asc'
        ? [...arrayObjFalse, ...arrayObjTrue]
        : [...arrayObjTrue, ...arrayObjFalse];
      break;
    case SortType.AverageGrade:
      result = [...students]
        .sort((a, b) => sortAverage(a.grades, b.grades, order));
      break;
    default:
  }

  return result;
}
