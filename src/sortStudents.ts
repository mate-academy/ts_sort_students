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

  function average(array: []): number {
    return (array.reduce((sum: number, x: number) => sum + x, 0))
    / array.length;
  }

  switch (sortBy) {
    case SortType.Age:
      return order === 'asc'
        ? copyArrayStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : copyArrayStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? copyArrayStudents.sort((a, b) => a[sortBy] - b[sortBy])
        : copyArrayStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyArrayStudents
          .sort((a, b) => average(a.grades) - average(b.grades))
        : copyArrayStudents
          .sort((a, b) => average(b.grades) - average(a.grades));

    default:
      return order === 'asc'
        ? copyArrayStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyArrayStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
}
