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

export type SortOrder = 'asc' | 'desk';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const studentArr: Student[] = [...students];

  function getGrades(arr: number[]): number {
    return arr.reduce((a: number, b: number) => a + b) / arr.length;
  }

  switch (sortBy) {
    case SortType.Name:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));
      break;

    case SortType.Surname:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));
      break;

    case SortType.Age:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));
      break;

    case SortType.Married:
      studentArr.sort((a: Student, b: Student) => {
        if (a.married === b.married) {
          return 0;
        }

        if ((a.married && order === 'asc') || b.married) {
          return 1;
        }

        return -1;
      });
      break;

    default:
      studentArr.sort((a: Student, b: Student) => (order === 'asc'
        ? getGrades(a.grades) - getGrades(b.grades)
        : getGrades(b.grades) - getGrades(a.grades)));
  }

  return studentArr;
}
