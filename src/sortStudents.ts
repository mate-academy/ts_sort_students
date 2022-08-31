
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

function averageGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const listOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? listOfStudents
          .sort((studentOne, studentTwo) => (
            studentOne[sortBy].localeCompare(studentTwo[sortBy])))
        : listOfStudents
          .sort((studentOne, studentTwo) => (
            studentTwo[sortBy].localeCompare(studentOne[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? listOfStudents
          .sort((studentOne, studentTwo) => (
            +studentOne[sortBy] - +studentTwo[sortBy]))
        : listOfStudents
          .sort((studentOne, studentTwo) => (
            +studentTwo[sortBy] - +studentOne[sortBy]));

    default:
      return order === 'asc'
        ? listOfStudents
          .sort((studentOne, studentTwo) => (
            averageGrades(studentOne[sortBy])
            - averageGrades(studentTwo[sortBy])))
        : listOfStudents
          .sort((studentOne, studentTwo) => (
            averageGrades(studentTwo[sortBy])
            - averageGrades(studentOne[sortBy])));
  }
}
