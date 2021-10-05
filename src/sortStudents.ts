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
  AverageGrade = 'averageGrade',
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
          return (order === 'asc')
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);

        case SortType.Surname:
          return (order === 'asc')
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname);

        case SortType.Age:
          return (order === 'asc')
            ? a.age - b.age
            : b.age - a.age;

        case SortType.Married:
          return (order === 'asc')
            ? Number(a.married) - Number(b.married)
            : Number(b.married) - Number(a.married);

        case SortType.AverageGrade:
          return (order === 'asc')
            ? average(a.grades) - average(b.grades)
            : average(b.grades) - average(a.grades);

        default:
          return 0;
      }
    },
  );
}
