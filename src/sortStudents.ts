
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sumOfGrades: number, currentGrade: number) => (
    sumOfGrades + currentGrade
  ), 0) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // swrite your function
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        studentA[sortBy].localeCompare(studentB[sortBy])
      ));

      return order === 'asc'
        ? sortedStudents
        : sortedStudents.reverse();

    case SortType.Age:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy]
      ));
      break;

    case SortType.Married:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((studentA: Student, studentB: Student) => (
        order === 'asc'
          ? getAverageGrade(studentA[sortBy])
            - getAverageGrade(studentB[sortBy])
          : getAverageGrade(studentB[sortBy])
            - getAverageGrade(studentA[sortBy])
      ));
      break;

    default:
      break;
  }

  return sortedStudents;
}
