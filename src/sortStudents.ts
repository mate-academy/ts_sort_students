
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function averageGrades(grades: number[]): number {
  return grades
    .reduce((a: number, b: number) => (a + b), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = students.map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')

        ? newStudents.sort((stud1: Student, stud2: Student) => (
          stud1[sortBy].localeCompare(stud2[sortBy])))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          stud1[sortBy].localeCompare(stud2[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud1[sortBy]) - Number(stud2[sortBy])))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud2[sortBy]) - Number(stud1[sortBy])));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          averageGrades(stud1.grades) - averageGrades(stud2.grades)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          averageGrades(stud2.grades) - averageGrades(stud1.grades)));

    default:
      throw new Error('invalid values!');
  }
}
