
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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy: object[] = students.map((x: object) => x);

  function getAverageGrade(grade: number[]): number {
    return grade.reduce((sum: number, x: number) => sum + x, 0) / grade.length;
  }

  function mariedSort(a: boolean, b: boolean): number {
    if (a === false && b === true) {
      return -1;
    }

    return 1;
  }

  function sortStudent(
    studentFirst: object,
    studentSecond: object,
    sortType: number,
  ): number {
    switch (sortType) {
      case 0:
        return studentFirst.name.localeCompare(studentSecond.name);

      case 1:
        return studentFirst.surname.localeCompare(studentSecond.surname);

      case 2:
        return studentFirst.age - studentSecond.age;

      case 3:
        return mariedSort(studentFirst.married, studentSecond.married);

      case 4:
        return getAverageGrade(studentFirst.grades)
          - getAverageGrade(studentSecond.grades);

      default:
        return 1;
    }
  }

  if (order === 'asc') {
    return studentsCopy.sort((student1: object, student2: object) => {
      return sortStudent(student1, student2, sortBy);
    });
  }

  return studentsCopy.sort((student1: object, student2: object) => {
    return sortStudent(student2, student1, sortBy);
  });
}
