
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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  let newArray: Student[] = students.slice();

  if (sortBy === 'grades') {
    return newArray.sort((a: Student, b: Student): number => {
      const valueA: number = a[sortBy].reduce(
        (prev: number, curr: number) => prev + curr,
      ) / a[sortBy].length;

      const valueB: number = b[sortBy].reduce(
        (prev: number, curr: number) => prev + curr,
      ) / b[sortBy].length;

      return order === 'asc' ? valueA - valueB : valueB - valueA;
    });
  }

  if (sortBy === 'married') {
    const arrA: Student[] = newArray
      .filter((student: Student) => !!student.married);
    const arrB: Student[] = newArray
      .filter((student: Student) => !student.married);

    return order === 'asc' ? arrB.concat(arrA) : arrA.concat(arrB);
  }

  if (order === 'asc') {
    newArray = newArray.sort((a: Student, b: Student): number => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }

      if (a[sortBy] > b[sortBy]) {
        return 1;
      }

      return 0;
    });
  }

  if (order === 'desc') {
    newArray = newArray.sort((a: Student, b: Student): number => {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return -1;
      }

      return 0;
    });
  }

  return newArray;
}
