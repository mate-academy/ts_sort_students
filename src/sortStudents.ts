
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
    case SortType.Surname:
      return order === 'asc'
        ? resultOfSortedStudents.sort((studentA, studentB) => studentA[sortBy]
          .localeCompare(studentB[sortBy]))
        : resultOfSortedStudents.sort((studentA, studentB) => studentB[sortBy]
          .localeCompare(studentA[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? resultOfSortedStudents.sort(
          (studentA, studentB) => +studentA[sortBy] - +studentB[sortBy],
        )
        : resultOfSortedStudents.sort(
          (studentA, studentB) => +studentB[sortBy] - +studentA[sortBy],
        );

    case SortType.AverageGrade:
      return order === 'asc'
        ? resultOfSortedStudents.sort((studentA, studentB) => averageGrades(
          studentA[sortBy],
        ) - averageGrades(studentB[sortBy]))
        : resultOfSortedStudents.sort((studentA, studentB) => averageGrades(
          studentB[sortBy],
        ) - averageGrades(studentA[sortBy]));

    default:
      return resultOfSortedStudents;
  }
}
