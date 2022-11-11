
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

export function averageGrades(grade: number[]): number {
  return grade
    .reduce((a: number, b: number) => (a + b), 0) / grade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const newStudents = students.map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case 'name':
      return (order === 'asc')

        ? newStudents.sort((stud1: Student, stud2: Student) => (
          stud1.name.localeCompare(stud2.name)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          stud1.name.localeCompare(stud2.name)));

    case 'surname':
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          stud1.surname.localeCompare(stud2.surname)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          stud1.surname.localeCompare(stud2.surname)));

    case 'age':
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud1.age) - Number(stud2.age)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud2.age) - Number(stud1.age)));

    case 'married':
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud1.married) - Number(stud2.married)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud2.married) - Number(stud1.married)));

    case 'grades':
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          averageGrades(stud1.grades) - averageGrades(stud2.grades)))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          averageGrades(stud2.grades) - averageGrades(stud1.grades)));

    default:
      throw new Error('invalid values!');
  }
}
