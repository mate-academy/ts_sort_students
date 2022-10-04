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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((previous: number, current: number) => previous + current, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
      return sortedStudents.sort(
        (studentA: Student, studentB: Student) => (
          order === 'asc'
            ? studentA[sortBy] - studentB[sortBy]
            : studentB[sortBy] - studentA[sortBy]),
      );

    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort(
        (studentA: Student, studentB: Student) => (
          order === 'asc'
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentB[sortBy].localeCompare(studentA[sortBy])),
      );

    case SortType.Married:
      return sortedStudents.sort(
        (studentA: Student, studentB: Student) => (
          order === 'asc'
            ? Number(studentA[sortBy]) - Number(studentB[sortBy])
            : Number(studentB[sortBy]) - Number(studentA[sortBy])),
      );

    case SortType.AverageGrade:
      return sortedStudents.sort(
        (studentA: Student, studentB: Student) => {
          const averageGradeA = getAverageGrade(studentA);
          const averageGradeB = getAverageGrade(studentB);

          return order === 'asc'
            ? averageGradeA - averageGradeB
            : averageGradeB - averageGradeA;
        },
      );
    default:
      return sortedStudents;
  }
}
