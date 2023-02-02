
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let resultSt: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
      resultSt = [...students].sort((a: Student, b: Student) => {
        const numA: number = a.age;
        const numB: number = b.age;

        if (order === 'asc') {
          return numA - numB;
        }

        return numB - numA;
      });
      break;

    case SortType.Name:
      resultSt.sort((a: Student, b: Student) => {
        let stringA: string;
        let stringB: string;

        if (order === 'asc') {
          stringA = a.name;
          stringB = b.name;
        } else {
          stringA = b.name;
          stringB = a.name;
        }

        return stringA.localeCompare(stringB);
      });
      break;

    case SortType.Surname:
      resultSt.sort((a: Student, b: Student) => {
        let stringA: string;
        let stringB: string;

        if (order === 'asc') {
          stringA = a.surname;
          stringB = b.surname;
        } else {
          stringA = b.surname;
          stringB = a.surname;
        }

        return stringA.localeCompare(stringB);
      });
      break;

    case SortType.Married:
      resultSt.sort((a: Student, b: Student) => {
        const numA: number = +a.married;
        const numB: number = +b.married;

        return (order === 'asc' ? numA - numB : numB - numA);
      });
      break;

    case SortType.AverageGrade:
      resultSt.sort((a: Student, b: Student) => {
        const numA: number = findAverageGrade(a.grades);
        const numB: number = findAverageGrade(b.grades);

        return (order === 'asc' ? numA - numB : numB - numA);
      });
      break;

    default:
      break;
  }

  return resultSt;
}
