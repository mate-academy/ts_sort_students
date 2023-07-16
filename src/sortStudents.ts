
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SortType.Surname:
      copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      break;

    case SortType.Age:
      copyStudents.sort((a, b) => b.age - a.age);
      break;

    case SortType.Married:
      copyStudents.forEach((x) => ((x.married) ? 1 : 0));
      copyStudents.sort((a, b) => Number(b.married) - Number(a.married));
      copyStudents.forEach((x) => ((x.married) ? 'married' : ''));
      break;

    case SortType.AverageGrade:
      if (order === 'desc') {
        copyStudents.sort((a, b) => {
          const bAverage
           = b.grades.reduce((x, y) => x + y, 0) / b.grades.length;
          const aAverage
           = a.grades.reduce((x, y) => x + y, 0) / a.grades.length;

          return bAverage - aAverage;
        });
      } else {
        copyStudents.sort((a, b) => {
          const bAverage
           = b.grades.reduce((x, y) => x + y, 0) / b.grades.length;
          const aAverage
           = a.grades.reduce((x, y) => x + y, 0) / a.grades.length;

          return aAverage - bAverage;
        });
      }
      break;

    default:
      break;
  }

  return copyStudents;
}
