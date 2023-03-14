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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc'| 'desc';

export function sortStudents(
  students : Student[], sortBy: SortType, order: SortOrder,
) : Student[] {
  // write your function
  const resultArray : Student[] = [...students];

  function callbackGrades(
    previousValue: number, currentValue: number,
  ) : number {
    return previousValue + currentValue;
  }

  switch (sortBy) {
    case SortType.Age:
      if (order === 'asc') {
        resultArray.sort((a, b) => +a.age - +b.age);
      } else {
        resultArray.sort((b, a) => +a.age - +b.age);
      }
      break;

    case 'married':
      if (order === 'asc') {
        resultArray.sort((a, b) => +a.married - +b.married);
      } else {
        resultArray.sort((b, a) => +a.married - +b.married);
      }
      break;

    case 'name':
    case 'surname':
      if (order === 'asc') {
        resultArray.sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        );
      } else {
        resultArray.sort(
          (a, b) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case 'grades':
      if (order === 'asc') {
        resultArray.sort((a, b) => (
          a.grades.reduce(callbackGrades) / a.grades.length
        ) - (b.grades.reduce(callbackGrades) / b.grades.length));
      } else {
        resultArray.sort((b, a) => (
          a.grades.reduce(callbackGrades) / a.grades.length
        ) - (b.grades.reduce(callbackGrades) / b.grades.length));
      }
      break;

    default:
      break;
  }

  return resultArray;
}
