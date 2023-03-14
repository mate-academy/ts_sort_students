
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: number,
  grades: number[],
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
  const sortedStudents = JSON.parse(JSON.stringify(students));

  sortedStudents.sort((a: Student, b: Student): number => {
    if (sortBy === 'name' || sortBy === 'surname') {
      return a[sortBy].localeCompare(b[sortBy]);
    }

    if (sortBy === 'age') {
      return a[sortBy] - b[sortBy];
    }

    if (sortBy === 'married') {
      return a[sortBy]- b[sortBy];
    }
  })

  return sortedStudents;
}
