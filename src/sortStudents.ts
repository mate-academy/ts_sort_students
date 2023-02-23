export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avGrade',
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(gradesArr: number[]):number {
  const sum = gradesArr.reduce(
    (accumulator, current) => accumulator + current, 0,
  );

  return sum / gradesArr.length;
}

export function sortAsc(objArr: Student[], sortBy: SortType): Student[] {
  if (sortBy === SortType.Name) {
    return objArr.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === SortType.Surname) {
    return objArr.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === SortType.Age) {
    return objArr.sort((a, b) => a.age - b.age);
  }

  if (sortBy === SortType.AverageGrade) {
    return objArr.sort(
      (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
    );
  }

  return objArr.sort((a, b) => Number(a.married) - Number(b.married));
}

export function sortDesc(objArr: Student[], sortBy: SortType): Student[] {
  if (sortBy === SortType.Name) {
    return objArr.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    return objArr.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    return objArr.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.AverageGrade) {
    return objArr.sort(
      (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
    );
  }

  return objArr.sort((a, b) => Number(b.married) - Number(a.married));
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (order) {
    case 'asc':
      return sortAsc(studentsCopy, sortBy);

    case 'desc':
      return sortDesc(studentsCopy, sortBy);

    default: return studentsCopy;
  }
}
