
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrades(grades: number[]): number {
  return grades.reduce((prev, grade) => prev + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          student[sortBy].localeCompare(nextStudent[sortBy])))
        : sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          nextStudent[sortBy].localeCompare(student[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          Number(student[sortBy]) - Number(nextStudent[sortBy])))
        : sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          Number(nextStudent[sortBy]) - Number(student[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          averageGrades(student[sortBy]) - averageGrades(nextStudent[sortBy])))
        : sortedStudent.sort((
          student,
          nextStudent,
        ) => (
          averageGrades(nextStudent[sortBy]) - averageGrades(student[sortBy])));

    default:
      return sortedStudent;
  }
}
