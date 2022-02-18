
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

function meanValue(student: Student): number {
  return student.grades.reduce((prev, item) => prev + item, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArr: Student[] = [...students];
  let result: Student[];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        result = copyArr.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        result = copyArr.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        result = copyArr.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        result = copyArr.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        result = copyArr.sort((a, b) => a.married - b.married);
      } else {
        result = copyArr.sort((a, b) => b.married - a.married);
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        result = copyArr.sort((a, b) => a.age - b.age);
      } else {
        result = copyArr.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        result = copyArr.sort((a, b) => meanValue(a) - meanValue(b));
      } else {
        result = copyArr.sort((a, b) => meanValue(b) - meanValue(a));
      }
      break;

    default:
      result = [];
  }

  return result;
}
