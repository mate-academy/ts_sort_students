
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

  function sortStudent(
    studentFirst: object,
    studentSecond: object,
    sortType: SortType,
  ): number {
    switch (sortType) {
      case SortType.Name:
        return studentFirst.name.localeCompare(studentSecond.name);

      case SortType.Surname:
        return studentFirst.surname.localeCompare(studentSecond.surname);

      case SortType.Age:
        return studentFirst.age - studentSecond.age;

      case SortType.Married:
        if (studentFirst.married === false && studentSecond.married === true) {
          return -1;
        }

        return 1;

      case SortType.AverageGrade:
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
