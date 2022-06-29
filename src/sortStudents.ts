export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true | false,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(studentGrades: number[]): number {
  return studentGrades
    .reduce((sum, grade) => sum + grade, 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortedStudents.sort((studentA, studentB) => studentA.name
          .localeCompare(studentB.name))
        : sortedStudents
          .sort((studentA, studentB) => studentB.name
            .localeCompare(studentA.name));

    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents
          .sort((studentA, studentB) => studentA.surname
            .localeCompare(studentB.surname))
        : sortedStudents
          .sort((studentA, studentB) => studentB.surname
            .localeCompare(studentA.surname));

    case SortType.Age:
      return order === 'asc'
        ? sortedStudents
          .sort((studentA, studentB) => studentA.age - studentB.age)
        : sortedStudents
          .sort((studentA, studentB) => studentB.age - studentA.age);

    case SortType.Married:
      return order === 'asc'
        ? sortedStudents
          .sort((studentA, studentB) => +studentA.married - +studentB.married)
        : sortedStudents
          .sort((studentA, studentB) => +studentB.married - +studentA.married);

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents
          .sort((studentA, studentB) => getAverageGrade(studentA.grades)
            - getAverageGrade(studentB.grades))
        : sortedStudents
          .sort((studentA, studentB) => getAverageGrade(studentB.grades)
          - getAverageGrade(studentA.grades));

    default:
      break;
  }

  return sortedStudents;
}
