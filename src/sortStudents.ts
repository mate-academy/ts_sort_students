
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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((first, second) => first + second) / grades.length;
}

export function sortStudents(students: Student,
  sortBy: SortType,
  order: SortOrder): Student[] {
  const copy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copy.sort((idx1, idx2) => idx1.name.localeCompare(idx2.name))
        : copy.sort((idx1, idx2) => idx2.name.localeCompare(idx1.name));

    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((idx1, idx2) => idx1.surname.localeCompare(idx2.surname))
        : copy.sort((idx1, idx2) => idx2.surname.localeCompare(idx1.surname));

    case SortType.Age:
      return order === 'asc'
        ? copy.sort((idx1, idx2) => idx1.age - idx2.age)
        : copy.sort((idx1, idx2) => idx2.age - idx1.age);

    case SortType.Married:
      return order === 'asc'
        ? copy.sort((idx1, idx2) => Number(idx1.married) - Number(idx2.married))
        : copy.sort((idx1, idx2) => {
          const becuseOfsemicolon = Number(idx2.married) - Number(idx1.married);

          return becuseOfsemicolon;
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((idx1, idx2) => {
          return getAverage(idx1.grades) - getAverage(idx2.grades);
        })
        : copy.sort((idx1, idx2) => {
          return getAverage(idx2.grades) - getAverage(idx1.grades);
        });

    default:
      return copy;
  }
}
