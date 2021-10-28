
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

export function getAverageGrade(grades: number[]): number {
  let result = grades.reduce((sum, curr) => sum + curr, 0);

  result /= grades.length;

  return result;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortSt: Student[] = [...students];
  const isAscending = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      sortSt.sort((fSt, sSt) => (isAscending
        ? fSt.name.localeCompare(sSt.name)
        : sSt.name.localeCompare(fSt.name)
      ));
      break;

    case SortType.Surname:
      sortSt.sort((fSt, sSt) => (isAscending
        ? fSt.surname.localeCompare(sSt.surname)
        : sSt.surname.localeCompare(fSt.surname)
      ));
      break;

    case SortType.Age:
      sortSt.sort((fSt, sSt) => (isAscending
        ? fSt.age - sSt.age
        : sSt.age - fSt.age
      ));
      break;

    case SortType.Married:
      sortSt.sort((fSt, sSt) => (isAscending
        ? Number(fSt.married) - Number(sSt.married)
        : Number(sSt.married) - Number(fSt.married)
      ));
      break;

    case SortType.AverageGrade:
      sortSt.sort((fSt, sSt) => (isAscending
        ? getAverageGrade(fSt.grades) - getAverageGrade(sSt.grades)
        : getAverageGrade(sSt.grades) - getAverageGrade(fSt.grades)
      ));
      break;

    default: break;
  }

  return sortSt;
}
