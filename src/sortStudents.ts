export interface Student {
  name: string,
  surname: string,
  age: number,
  married?: boolean,
  grades?: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export
function sortStudents(students: [], sortBy: SortType, order: string): [] {
  const copyArrayStudents = Object.assign([], students);

  function avarage(array: []): number {
    return (array.reduce((sum: number, x: number) => sum + x, 0))
    / array.length;
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? copyArrayStudents.sort((a, b) => a[sortBy] - b[sortBy])
      : copyArrayStudents.sort((a, b) => b[sortBy] - a[sortBy]);
  }

  if (sortBy === SortType.Married) {
    return order === 'asc'
      ? copyArrayStudents.sort((a, b) => a[sortBy] - b[sortBy])
      : copyArrayStudents.sort((a, b) => b[sortBy] - a[sortBy]);
  }

  if (sortBy === SortType.AverageGrade) {
    return order === 'asc'
      ? copyArrayStudents.sort((a, b) => avarage(a.grades) - avarage(b.grades))
      : copyArrayStudents.sort((a, b) => avarage(b.grades) - avarage(a.grades));
  }

  if (typeof sortBy === 'string') {
    return order === 'asc'
      ? copyArrayStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : copyArrayStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  return [];
}
