export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name ='name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  const { grades } = student;

  return grades.reduce((prev: number, curr: number) => prev + curr, 0)
  / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortededStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy])
      ));

    case SortType.AverageGrade:
      return sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a)
      ));

    default:
      return sortededStudents;
  }
}
