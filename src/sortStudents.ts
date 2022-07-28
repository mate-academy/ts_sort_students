
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'desc' | 'asc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | undefined {
  const newStudents: Student[] = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      return newStudents
        .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (order === 'desc') {
      return newStudents
        .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      return newStudents
        .sort((a: Student, b: Student) => a.age - b.age);
    }

    if (order === 'desc') {
      return newStudents
        .sort((a: Student, b: Student) => b.age - a.age);
    }
  }

  if (sortBy === SortType.Married) {
    const married: Student[]
      = [...newStudents].filter((person: Student) => person.married);

    const notMarried: Student[]
      = [...newStudents].filter((person: Student) => !person.married);

    if (order === 'desc') {
      return [...married, ...notMarried];
    }

    if (order === 'asc') {
      return [...notMarried, ...married];
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return newStudents
        .sort((a: Student, b: Student) => {
          return (a.grades.reduce((x: number, y: number) => x + y)
          / a.grades.length)
          - (b.grades.reduce((x: number, y: number) => x + y)
          / b.grades.length);
        });
    }

    if (order === 'desc') {
      return newStudents
        .sort((a: Student, b: Student) => {
          return (b.grades.reduce((x: number, y: number) => x + y)
          / b.grades.length)
          - (a.grades.reduce((x: number, y: number) => x + y)
          / a.grades.length);
        });
    }
  }

  return undefined;
}
