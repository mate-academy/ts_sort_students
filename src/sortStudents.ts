
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

function sortedByName(objectOfStudents : Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => first.name.localeCompare(second.name));
  }

  return objectOfStudents
    .sort((first, second) => second.name.localeCompare(first.name));
}

function sortedBySurname(
  objectOfStudents : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => first.surname.localeCompare(second.surname));
  }

  return objectOfStudents
    .sort((first, second) => second.surname.localeCompare(first.surname));
}

function sortedByAge(objectOfStudents : Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => first.age - second.age);
  }

  return objectOfStudents
    .sort((first, second) => second.age - first.age);
}

function sortedByMarried(
  objectOfStudents : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => Number(first.married) - Number(second.married));
  }

  return objectOfStudents
    .sort((first, second) => Number(second.married) - Number(first.married));
}

function getAverageAge(grades:number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

function sortedByAverageGrade(
  objectOfStudents : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => getAverageAge(first.grades)
      - getAverageAge(second.grades));
  }

  return objectOfStudents
    .sort((first, second) => getAverageAge(second.grades)
      - getAverageAge(first.grades));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const array: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name): {
      return sortedByName(array, order);
    }

    case (SortType.Surname): {
      return sortedBySurname(array, order);
    }

    case (SortType.Age): {
      return sortedByAge(array, order);
    }

    case (SortType.AverageGrade): {
      return sortedByAverageGrade(array, order);
    }

    default: {
      const newArray = sortedByMarried(array, order);

      return newArray;
    }
  }
}
