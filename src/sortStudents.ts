// describe Student type
// create and export SortType enum
// create SortOrder type

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

type SortOrder = 'asc' | 'desc';

function sortStrings(
  array: Student[],
  sort: SortType.Name | SortType.Surname,
  order: SortOrder,
): Student[] {
  return array.sort((a: Student, b: Student) => {
    if (order === 'asc') {
      return a[sort].localeCompare(b[sort]);
    }

    return b[sort].localeCompare(a[sort]);
  });
}

function sortBoolean(
  array: Student[],
  sort: SortType.Married,
  order: SortOrder,
): Student[] {
  return array.sort((a: Student, b: Student) => {
    if (order === 'asc') {
      return +a[sort] - +b[sort];
    }

    return +b[sort] - +a[sort];
  });
}

function sortAverageGrade(
  array: Student[],
  sort: SortType.AverageGrade,
  order: SortOrder,
): Student[] {
  return array.sort((a: Student, b: Student) => {
    const sumA: number
        = a[sort].reduce((prev, next) => prev + next)
        / a[sort].length;

    const sumB: number
        = b[sort].reduce((prev, next) => prev + next)
        / b[sort].length;

    if (order === 'asc') {
      return sumA - sumB;
    }

    return sumB - sumA;
  });
}

function sortAge(
  array: Student[],
  sort: SortType.Age,
  order: SortOrder,
): Student[] {
  return array.sort((a: Student, b: Student) => {
    if (order === 'asc') {
      return a[sort] - b[sort];
    }

    return b[sort] - a[sort];
  });
}

export function sortStudents(students: Student[],
  sort: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = students.map((el: Student) => ({ ...el }));

  if (sort === SortType.Name || sort === SortType.Surname) {
    sortStrings(sortedStudents, sort, order);
  } else if (sort === SortType.Married) {
    sortBoolean(sortedStudents, sort, order);
  } else if (sort === SortType.AverageGrade) {
    sortAverageGrade(sortedStudents, sort, order);
  } else if (sort === SortType.Age) {
    sortAge(sortedStudents, sort, order);
  }

  return sortedStudents;
}
