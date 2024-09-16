export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(students: Student[], order: SortOrder): Student[] {
  return students.sort((
    prev: Student, current: Student,
  ) => {
    const prevAverageGrades: number = prev.grades.reduce((
      gradesAcc: number, grade: number,
    ) => gradesAcc + grade, 0) / prev.grades.length;
    const currentAverageGrades: number = current.grades.reduce((
      gradesAcc: number, grade: number,
    ) => gradesAcc + grade, 0) / current.grades.length;

    return order === 'asc'
      ? prevAverageGrades - currentAverageGrades
      : currentAverageGrades - prevAverageGrades;
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents.sort((
        prev: Student, current: Student,
      ) => (
        order === 'asc'
          ? prev[sortBy].localeCompare(current[sortBy])
          : current[sortBy].localeCompare(prev[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return copiedStudents.sort((
        prev: Student, current: Student,
      ) => (order === 'asc'
        ? Number(prev[sortBy]) - Number(current[sortBy])
        : Number(current[sortBy]) - Number(prev[sortBy])
      ));

    case SortType.AverageGrade:
      return getAverage(copiedStudents, order);

    default:
      throw new Error(`Wrong value ${order} for sorting`);
  }
}
