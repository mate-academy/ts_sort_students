
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

  function makeAvgGrade(student: Student): number {
    return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((studentA, studentB) => (
          studentA.name.localeCompare(studentB.name)))
        : copyStudents.sort((studentA, studentB) => (
          studentB.name.localeCompare(studentA.name)));

    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((studentA, studentB) => (
          studentA.surname.localeCompare(studentB.surname)))
        : copyStudents.sort((studentA, studentB) => (
          studentB.surname.localeCompare(studentA.surname)));

    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((studentA, studentB) => (
          studentA.age - studentB.age))
        : copyStudents.sort((studentA, studentB) => (
          studentB.age - studentA.age));

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((studentA, studentB) => (
          +studentA.married - +studentB.married))
        : copyStudents.sort((studentA, studentB) => (
          +studentB.married - +studentA.married));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((studentA, studentB) => (
          makeAvgGrade(studentA) - makeAvgGrade(studentB)))
        : copyStudents.sort((studentA, studentB) => (
          makeAvgGrade(studentB) - makeAvgGrade(studentA)));

    default:
      return students;
  }
}
