
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
): Student[] {
  const sortedStudents = JSON.parse(JSON.stringify(students));

  return sortedStudents.sort((a: Student, b: Student): number => {
    if (sortBy === 'name' || sortBy === 'surname') {
      return a[sortBy].localeCompare(b[sortBy]);
    }

    if (sortBy === 'age' || sortBy === 'married') {
      return a[sortBy] - b[sortBy];
    }
  });
}
