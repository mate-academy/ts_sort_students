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
  const studentsCopy = students.map((user) => ({ ...user }));

  function getAverageGrade(array: number[]): number {
    const average = array.reduce((sum, current) => sum + current, 0);

    return average / array.length;
  }

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'asc') {
          return studentA.age - studentB.age;
        }

        return studentB.age - studentA.age;

      case SortType.Name:
        if (order === 'asc') {
          studentB.name.localeCompare(studentA.name);
        }

        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        if (order === 'asc') {
          studentB.surname.localeCompare(studentA.surname);
        }

        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Married:
        if (order === 'asc') {
          return +studentA.married - +studentB.married;
        }

        return +studentB.married - +studentA.married;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverageGrade(studentA.grades)
            - getAverageGrade(studentB.grades);
        }

        return getAverageGrade(studentB.grades)
          - getAverageGrade(studentA.grades);

      default:
        return 0;
    }
  });

  return studentsCopy;
}
