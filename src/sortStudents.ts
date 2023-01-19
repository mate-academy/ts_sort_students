
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
  let newArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArr = (order === 'asc')
        ? newArr.sort((a, b) => (a[sortBy]).localeCompare(b[sortBy]))
        : newArr.sort((a, b) => (a[sortBy]).localeCompare(b[sortBy])).reverse();
      break;

    case SortType.Age:
    case SortType.Married:
      newArr = (order === 'asc')
        ? newArr.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : newArr.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;

    case SortType.AverageGrade:
      newArr = (order === 'asc')
        ? newArr.sort((a, b) => (
          averageGradeFunc(a.grades)) - (averageGradeFunc(b.grades)))
        : newArr.sort((a, b) => (
          averageGradeFunc(b.grades)) - (averageGradeFunc(a.grades)));
      break;

    default:
      break;
  }

  return newArr;
}
