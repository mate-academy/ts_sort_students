
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
  AverageGrade = 'grades'
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
    default:
      return sortededStudents;

    case SortType.Name:
    case SortType.Surname:
      sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));

      break;

    case SortType.Age:
    case SortType.Married:
      sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortededStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a)
      ));

      break;
  }

  return sortededStudents;
}
