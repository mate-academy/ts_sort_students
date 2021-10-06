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
): Student[] {
  const cloneStudents: Student[] = JSON.parse(JSON.stringify(students));

  function average(items: number[]): number {
    return items.reduce((x, z) => x + z) / items.length;
  }

  return cloneStudents.sort(
    (a, b) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return (order === 'asc')
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return (order === 'asc')
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);

        case SortType.AverageGrade:
          return (order === 'asc')
            ? average(a[sortBy]) - average(b[sortBy])
            : average(b[sortBy]) - average(a[sortBy]);

        default:
          return 0;
      }
    },
  );
}
