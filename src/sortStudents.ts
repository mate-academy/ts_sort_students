
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((acc, val) => acc + val) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case 'age':
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case 'married':
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });

    case 'grades':
      return copyOfStudents.sort((a, b) => {
        return order === 'asc'
          ? getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy])
          : getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy]);
      });

    default:
      return copyOfStudents;
  }
}
