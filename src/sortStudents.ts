
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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const resultArray = [...students];

  switch (sortBy) {
    case SortType.Name:
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });
      break;

    case SortType.Married:
      resultArray.sort((a, b) => {
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);
      });
      break;

    case SortType.AverageGrade:
      resultArray.sort((a, b) => {
        const aElem = a.grades.reduce((prev, curr) => prev + curr, 0);
        const bElem = b.grades.reduce((prev, curr) => prev + curr, 0);

        if (order === 'asc') {
          return (aElem / a.grades.length) - (bElem / b.grades.length);
        }

        return (bElem / b.grades.length) - (aElem / a.grades.length);
      });
      break;

    default:
      return students;
  }

  return resultArray;
}
