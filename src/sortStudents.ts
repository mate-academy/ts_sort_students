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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(arr: number[]): number {
  let sum: number = 0;

  for (let i: number = 0; i < arr.length; i + 1) {
    sum += arr[i];
  }

  return sum / arr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  if (sortBy === SortType.Name && order === 'asc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => a.name.localeCompare(b.name),
    );

    return result;
  }

  if (sortBy === SortType.Name && order === 'desc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => b.name.localeCompare(a.name),
    );

    return result;
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => a.surname.localeCompare(b.surname),
    );

    return result;
  }

  if (sortBy === SortType.Surname && order === 'desc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => b.surname.localeCompare(a.surname),
    );

    return result;
  }

  if (sortBy === SortType.Age && order === 'asc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => a.age - b.age,
    );

    return result;
  }

  if (sortBy === SortType.Age && order === 'desc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => b.age - a.age,
    );

    return result;
  }

  if (sortBy === SortType.Married && order === 'desc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => +b.married - +a.married,
    );

    return result;
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => averageGrade(
        a.grades,
      ) - averageGrade(b.grades),
    );

    return result;
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    const result: Student[] = [...students].sort(
      (a: Student, b: Student) => averageGrade(
        b.grades,
      ) - averageGrade(a.grades),
    );

    return result;
  }

  return students;
}
