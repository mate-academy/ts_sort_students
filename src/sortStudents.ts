
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

function getAvarageGrade(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = [...students];
  const isAsc: boolean = order === 'asc';

  function compareFunction(a: Student, b: Student): number {
    // const aMarried = Number(a.married);
    // const bMarried = Number(b.married);

    switch (sortBy) {
      case SortType.Name:
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return isAsc
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return isAsc ? a.age - b.age : b.age - a.age;

      case SortType.Married: {
        const aMarried = Number(a.married);
        const bMarried = Number(b.married);

        return isAsc
          ? aMarried - bMarried
          : bMarried - aMarried;
      }

      case SortType.AverageGrade:
        return isAsc
          ? getAvarageGrade(a.grades) - getAvarageGrade(b.grades)
          : getAvarageGrade(b.grades) - getAvarageGrade(a.grades);

      default:
        throw new Error('Cannot sort by unrecognized parameters!');
    }
  }

  studentsArr.sort((a, b) => compareFunction(a, b));

  return studentsArr;
}
