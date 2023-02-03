
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function findAverageGrade(grades: number[]): number {
  const average: number = (grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0,
  )) / grades.length;

  return average;
}

function compareNumbers(numA: number, numB: number, order: SortOrder): number {
  return (order === 'asc' ? numA - numB : numB - numA);
}

function compareStrings(strA: string, strB: string, order: SortOrder): number {
  let stringA: string;
  let stringB: string;

  if (order === 'asc') {
    stringA = strA;
    stringB = strB;
  } else {
    stringA = strB;
    stringB = strA;
  }

  return stringA.localeCompare(stringB);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultSt: Student[] = [...students];

  resultSt.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Age:
        return compareNumbers(a.age, b.age, order);
      case SortType.Name:
        return compareStrings(a.name, b.name, order);
      case SortType.Surname:
        return compareStrings(a.surname, b.surname, order);
      case SortType.Married:
        return compareNumbers(+a.married, +b.married, order);
      case SortType.AverageGrade:
        return compareNumbers(
          findAverageGrade(a.grades), findAverageGrade(b.grades), order,
        );
      default:
        return 0;
    }
  });

  return resultSt;
}
