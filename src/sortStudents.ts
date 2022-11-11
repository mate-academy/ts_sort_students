
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
    case 'surname':
      return (order === 'asc')

        ? newStudents.sort((stud1: Student, stud2: Student) => (
          stud1[sortBy].localeCompare(stud2[sortBy])))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          stud1[sortBy].localeCompare(stud2[sortBy])));

    case 'age':
    case 'married':
      return (order === 'asc')
        ? newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud1[sortBy]) - Number(stud2[sortBy])))
        : newStudents.sort((stud1: Student, stud2: Student) => (
          Number(stud2[sortBy]) - Number(stud1[sortBy])));

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
