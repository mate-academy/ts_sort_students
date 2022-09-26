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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): object[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? sortedStudents.sort(
          (studentA, studentB) => studentA.name.localeCompare(studentB.name),
        )
        : sortedStudents.sort(
          (studentA, studentB) => studentB.name.localeCompare(studentA.name),
        );

    case SortType.Surname:
      return (order === 'asc')
        ? sortedStudents.sort(
          (studentA, studentB) => studentA.surname
            .localeCompare(studentB.surname),
        )
        : sortedStudents.sort(
          (studentA, studentB) => studentB.surname
            .localeCompare(studentA.surname),
        );

    case SortType.Age:
      return (order === 'asc')
        ? sortedStudents.sort((studentA, studentB) => +studentA.age
        - (+studentB.age))
        : sortedStudents.sort((studentA, studentB) => +studentB.age
        - (+studentA.age));

    case SortType.Married:
      return (order === 'asc')
        ? sortedStudents.sort((studentA, studentB) => +studentA.married
        - (+studentB.married))
        : sortedStudents.sort((studentA, studentB) => +studentB.married
        - (+studentA.married));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? sortedStudents.sort(
          (studentA, studentB) => (studentA.grades
            .reduce((sum, x) => sum + x)) / studentA.grades.length
            - (studentB.grades.reduce((sum, x) => sum + x))
            / studentB.grades.length,
        )
        : sortedStudents.sort(
          (studentA, studentB) => (studentB.grades
            .reduce((sum, x) => sum + x)) / studentB.grades.length
            - (studentA.grades.reduce((sum, x) => sum + x))
            / studentA.grades.length,
        );
    default:
      return sortedStudents;
  }
}
