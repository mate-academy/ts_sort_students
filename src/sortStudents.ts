
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
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
):Student[] {
  const copy = [...students];

  if (sortBy === 'name' || sortBy === 'surname') {
    if (order === 'asc') {
      return copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (order === 'desc') {
      return copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }
  }

  if (sortBy === 'age' || sortBy === 'married') {
    if (order === 'asc') {
      return copy.sort((a, b) => +a[sortBy] - +b[sortBy]);
    }

    if (order === 'desc') {
      return copy.sort((a, b) => +b[sortBy] - +a[sortBy]);
    }
  }

  if (sortBy === 'grades') {
    if (order
      === 'asc') {
      return copy.sort((a, b) => (
        a.grades.reduce((sum, el) => sum + el, 0) / a.grades.length)
        - (b.grades.reduce((sum, el) => sum + el, 0) / b.grades.length));
    }

    if (order === 'desc') {
      return copy.sort((a, b) => (
        b.grades.reduce((sum, el) => sum + el, 0) / b.grades.length)
        - (a.grades.reduce((sum, el) => sum + el, 0) / a.grades.length));
    }
  }

  return students;
}
