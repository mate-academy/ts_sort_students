
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  function getAverageGrade(grades: number[]): number {
    return grades.reduce((accumulator, item) => accumulator + item)
     / grades.length;
  }

  if (sortBy === 'grades') {
    return (order === 'asc'
      ? copyOfStudents.sort((a, b) => getAverageGrade(a[sortBy])
       - getAverageGrade(b[sortBy]))
      : copyOfStudents.sort((a, b) => getAverageGrade(b[sortBy])
       - getAverageGrade(a[sortBy])));
  }

  if (sortBy === 'age' || sortBy === 'married') {
    return (order === 'asc'
      ? copyOfStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
      : copyOfStudents.sort((a, b) => +b[sortBy] - +a[sortBy]));
  }

  return (order === 'asc'
    ? copyOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : copyOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy])));
}
