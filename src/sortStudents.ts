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
  order: SortOrder = 'asc',
): Student[] {
  const copy = [...students].map((student) => ({
    ...student,
  }));

  type SortingCallback = (x: Student, y: Student) => number;

  const makeSortingCallback = (
    type: SortType,
    sortOrder: SortOrder,
  ): SortingCallback => {
    const isAscendingOrder = (sortOrder) === 'asc';

    switch (type) {
      case SortType.Surname:
        return isAscendingOrder
          ? (x, y): number => x.surname.localeCompare(y.surname)
          : (x, y): number => y.surname.localeCompare(x.surname);

      case SortType.Age:
        return isAscendingOrder
          ? (x, y): number => x.age - y.age
          : (x, y): number => y.age - x.age;

      case SortType.Married:
        return isAscendingOrder
          ? (x, y): number => +x.married - +y.married
          : (x, y): number => +y.married - +x.married;

      case SortType.AverageGrade:
        return (x, y): number => {
          const getTotalGrade = (total: number, current: number): number => {
            return total + current;
          };

          const currentTotal = x.grades.reduce(getTotalGrade, 0)
            / x.grades.length;
          const nextTotal = y.grades.reduce(getTotalGrade, 0)
            / y.grades.length;

          return isAscendingOrder
            ? currentTotal - nextTotal
            : nextTotal - currentTotal;
        };

      default:
        return isAscendingOrder
          ? (x, y): number => x.name.localeCompare(y.name)
          : (x, y): number => y.name.localeCompare(x.name);
    }
  };

  return copy.sort(makeSortingCallback(sortBy, order));
}
