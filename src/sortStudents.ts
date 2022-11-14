export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
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

function getAvgGrade(studentsGrade: number[]): number {
  return studentsGrade.reduce((prevGrade: number, currGrade: number) => (
    prevGrade + currGrade
  ), 0) / studentsGrade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((student1: Student, student2: Student) => (
          student1[sortBy].localeCompare(student2[sortBy])
        ))
        : studentsCopy.sort((student1: Student, student2: Student) => (
          student2[sortBy].localeCompare(student1[sortBy])
        ));

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((
        student1: Student,
        student2: Student,
      ) => (
        order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy])
      ));

    case SortType.AverageGrade:
      return studentsCopy.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? getAvgGrade(student1[sortBy]) - getAvgGrade(student2[sortBy])
          : getAvgGrade(student2[sortBy]) - getAvgGrade(student1[sortBy])));

    default:
      throw new Error('Program can not sort by that parameters');
  }
}
