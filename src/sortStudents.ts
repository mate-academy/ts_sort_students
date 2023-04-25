
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
  AverageGrade = 'avgGrade'
}

function compareBools(a: boolean, b: boolean): number {
  if (a === b) {
    return 0;
  }

  if (a) {
    return -1;
  }

  return 1;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const resultArray = [...students];

  const average = (arr: number[]): number => {
    return arr.reduce((p: number, c: number) => p + c, 0) / arr.length;
  };

  switch (sortBy) {
    case 'name':
      if (order === 'desc') {
        resultArray.sort(
          (a: Student, b: Student): number => b.name.localeCompare(a.name),
        );
      } else {
        resultArray.sort(
          (a: Student, b: Student): number => a.name.localeCompare(b.name),
        );
      }
      break;
    case 'surname':
      if (order === 'desc') {
        resultArray.sort(
          (a: Student, b: Student):
          number => b.surname.localeCompare(a.surname),
        );
      } else {
        resultArray.sort(
          (a: Student, b: Student):
          number => a.surname.localeCompare(b.surname),
        );
      }
      break;
    case 'age':
      if (order === 'desc') {
        resultArray.sort((a: Student, b: Student): number => b.age - a.age);
      } else {
        resultArray.sort((a: Student, b: Student): number => a.age - b.age);
      }
      break;
    case 'married':
      if (order === 'desc') {
        resultArray.sort(
          (a: Student, b: Student):
          number => compareBools(a.married, b.married),
        );
      } else {
        resultArray.sort(
          (a: Student, b: Student):
          number => compareBools(b.married, a.married),
        );
      }
      break;
    case 'avgGrade':
      if (order === 'desc') {
        resultArray.sort(
          (a: Student, b: Student)
          : number => average(b.grades) - average(a.grades),
        );
      } else {
        resultArray.sort(
          (a: Student, b: Student)
          : number => average(a.grades) - average(b.grades),
        );
      }
      break;
    default:
  }

  return resultArray;
}
