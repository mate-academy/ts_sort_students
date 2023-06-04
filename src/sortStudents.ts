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
    case SortType.Married:
      if (order === 'asc') {
        resultArray.sort((a, b) => +a[sortBy] - +b[sortBy]);
      } else {
        resultArray.sort((b, a) => +a[sortBy] - +b[sortBy]);
      }
      break;

    case SortType.Name:
    case SortType.Surname:
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

    case SortType.AverageGrade:
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
