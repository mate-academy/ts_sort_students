
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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const newArray = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        newArray.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        newArray.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        newArray.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        newArray.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        newArray.sort((a, b) => a.age - b.age);
      } else {
        newArray.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        newArray.sort((a, b) => Number(a.married) - Number(b.married));
      } else {
        newArray.sort((a, b) => Number(b.married) - Number(a.married));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        newArray.sort((a, b) => {
          const averegePrev = a.grades.reduce((sum, x) => sum + x, 0)
            / a.grades.length;
          const averegeNext = b.grades.reduce((sum, x) => sum + x, 0)
            / b.grades.length;

          return averegePrev - averegeNext;
        });
      } else {
        newArray.sort((a, b) => {
          const averegePrev = a.grades.reduce((sum, x) => sum + x, 0)
            / a.grades.length;
          const averegeNext = b.grades.reduce((sum, x) => sum + x, 0)
            / b.grades.length;

          return averegeNext - averegePrev;
        });
      }
      break;
    default:
  }

  return newArray;
}
