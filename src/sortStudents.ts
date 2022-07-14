export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  average?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

export type SortOrder = 'asc' | 'desc';

function sortedString(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return students.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  return students.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
}

function sortedAll(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return students.sort((a, b) => a[sortBy] - b[sortBy]);
  }

  return students.sort((a, b) => b[sortBy] - a[sortBy]);
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  let newStudents: Student[] = [...students];

  for (let i: number = 0; i < newStudents.length; i += 1) {
    newStudents[i].average = newStudents[i].grades.reduce((x, y) => x + y, 0)
      / newStudents[i].grades.length;
  }

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    newStudents = sortedString(newStudents, sortBy, order);
  } else {
    newStudents = sortedAll(newStudents, sortBy, order);
  }

  return newStudents;
}
