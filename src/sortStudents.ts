
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
  let resultArray : Student[] = [...students];

  function callbackGrades(
    previousValue: number, currentValue: number,
  ) : number {
    return previousValue + currentValue;
  }

  switch (sortBy) {
    case 'age':
      resultArray = resultArray.sort((a, b) => +a.age - +b.age);
      break;

    case 'married':
      break;

    case 'name':
    case 'surname':
      resultArray = resultArray.sort(
        (a, b) => a[sortBy].localeCompare(b[sortBy]),
      );
      break;

    case 'grades':
      resultArray = [...resultArray].sort((a, b) => (
        a.grades.reduce(callbackGrades) / a.grades.length
      ) - (b.grades.reduce(callbackGrades) / b.grades.length));
      break;

    default:
      break;
  }

  return order === 'desc' ? resultArray.reverse() : resultArray;
}
