
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = students.map((el: Student) => ({ ...el }));

  const average = (numbers: number[]): number => {
    return numbers.reduce((acc, b) => acc + b, 0) / numbers.length;
  };

  const result = copy.sort((aEl: Student, bEl: Student) => {
    const a = (order === 'asc')
      ? aEl
      : bEl;
    const b = (order === 'asc')
      ? bEl
      : aEl;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:
        return +a.married - +b.married;

      default:
        return average(a.grades) - average(b.grades);
    }
  });

  return result;
}
