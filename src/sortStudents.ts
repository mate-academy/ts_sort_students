
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrades(grades: number[]): number {
  const gradesSum = grades.reduce((sum, grade) => sum + grade, 0);
  const averageGrade = gradesSum / (grades.length || 1);

  return averageGrade;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultOfSortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? resultOfSortedStudents.sort((studentA, studentB) => studentA.name
          .localeCompare(studentB.name))
        : resultOfSortedStudents.sort((studentA, studentB) => studentB.name
          .localeCompare(studentA.name));

    case SortType.Surname:
      return order === 'asc'
        ? resultOfSortedStudents.sort((studentA, studentB) => studentA.surname
          .localeCompare(studentB.surname))
        : resultOfSortedStudents.sort((studentA, studentB) => studentB.surname
          .localeCompare(studentA.surname));

    case SortType.Age:
      return order === 'asc'
        ? resultOfSortedStudents.sort(
          (studentA, studentB) => +studentA.age - +studentB.age,
        )
        : resultOfSortedStudents.sort(
          (studentA, studentB) => +studentB.age - +studentA.age,
        );

    case SortType.Married:
      return order === 'asc'
        ? resultOfSortedStudents.sort(
          (studentA, studentB) => +studentA.married - +studentB.married,
        )

        : resultOfSortedStudents.sort(
          (studentA, studentB) => +studentB.married - +studentA.married,
        );

    case SortType.AverageGrade:
      return order === 'asc'
        ? resultOfSortedStudents.sort((studentA, studentB) => averageGrades(
          studentA.grades,
        ) - averageGrades(studentB.grades))
        : resultOfSortedStudents.sort((studentA, studentB) => averageGrades(
          studentB.grades,
        ) - averageGrades(studentA.grades));

    default:
      return resultOfSortedStudents;
  }
}
