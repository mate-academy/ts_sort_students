
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc'| 'desc';

export function sortStudents(
  students:[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((itemA: Student, itemB: Student) => {
    const a: number = (
      itemA.grades.reduce((acc: number, item: number) => acc + item, 0)
    ) / (itemA.grades).length;

    const b: number = (
      itemB.grades.reduce((acc: number, item: number) => acc + item, 0)
    ) / (itemB.grades).length;

    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? itemA.name.localeCompare(itemB.name)
          : itemB.name.localeCompare(itemA.name);

      case SortType.Surname:
        return order === 'asc'
          ? itemA.surname.localeCompare(itemB.surname)
          : itemB.surname.localeCompare(itemA.surname);

      case SortType.Age:
        return (order === 'asc')
          ? itemA.age - itemB.age
          : itemB.age - itemA.age;

      case SortType.Married:
        return (order === 'asc')
          ? Number(itemA.married) - Number(itemB.married)
          : Number(itemB.married) - Number(itemA.married);

      default:
        return order === 'asc' ? a - b : b - a;
    }
  });

  return copyStudents;
}
