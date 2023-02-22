
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

}

// describe SortType enum
export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'desc' | 'asc';

export function
sortStudents(students: Student[], sortBy: SortType, order: SortOrder)
  : Student[] {
  const newobj = JSON.parse(JSON.stringify(students));

  function Sum(array: number[]): number {
    return array.reduce((accumulator: number, value:number) => {
      return accumulator + value;
    }, 0);
  }

  if (sortBy === SortType.Age && order === 'desc') {
    return newobj.sort((a: Student, b: Student) => b.age - a.age);
  }

  if (sortBy === SortType.Age && order === 'asc') {
    return newobj.sort((a: Student, b: Student) => a.age - b.age);
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    return newobj.sort((
      a: Student,
      b: Student,
    ) => Sum(b.grades) / b.grades.length
      - Sum(a.grades) / a.grades.length);
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    return newobj.sort((
      a: Student,
      b: Student,
    ) => Sum(a.grades) / a.grades.length
      - Sum(b.grades) / b.grades.length);
  }

  if (sortBy === SortType.Name && order === 'asc') {
    return newobj.sort((a:Student, b:Student) => a.name.localeCompare(b.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    return newobj.sort((
      a:Student,
      b:Student,
    ) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === SortType.Married && order === 'desc') {
    return newobj.sort((
      a:Student,
      b:Student,
    ) => Number(b.married) - Number(a.married));
  }

  return [];
}
