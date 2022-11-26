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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  const calcAvg: (arr: number[])=> number = (arr) => {
    return arr.reduce((sum, grade) => sum + (grade / arr.length), 0);
  };

  newStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case 0:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case 1:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case 2:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case 3:

        if (a.married === b.married) {
          return 0;
        }

        if (a.married === true) {
          return order === 'asc' ? 1 : -1;
        }

        return order === 'asc' ? -1 : 1;

      case 4:
        return order === 'asc'
          ? calcAvg(a.grades) - calcAvg(b.grades)
          : calcAvg(b.grades) - calcAvg(a.grades);
      default:
        return 1;
    }
  });

  return newStudents;
}
