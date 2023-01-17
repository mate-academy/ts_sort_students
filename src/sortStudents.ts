
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
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGradeFunc(grades: number[]): number {
  let avarage: number = 0;
  let sum: number = 0;

  for (let i: number = 0; i < grades.length; i += 1) {
    sum += grades[i];
    avarage = sum / grades.length;
  }

  return avarage;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  // write your function
  let newArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      newArr = newArr.sort((a, b) => (a.name).localeCompare(b.name));
      break;

    case SortType.Surname:
      newArr = newArr.sort((a, b) => (a.surname).localeCompare(b.surname));
      break;

    case SortType.Age:
      newArr = newArr.sort((a, b) => (a.age) - (b.age));
      break;

    case SortType.Married:
      newArr = newArr.sort((a, b) => Number(a.married) - Number(b.married));
      break;

    case SortType.AverageGrade:
      newArr = newArr.sort((a, b) => (
        averageGradeFunc(a.grades)) - (averageGradeFunc(b.grades)));
      break;

    default:
        // do nothing
  }

  if (order === 'asc') {
    return newArr;
  }

  return [...newArr].reverse();
}
