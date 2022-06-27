export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades:number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

function sortedByNameAndSurname(
  objectOfStudents: Student[],
  order: string,
) :Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => first.surname.localeCompare(second.surname));
  }

  return objectOfStudents
    .sort((first, second) => second.surname.localeCompare(first.surname));
}

function sortedByAverageGrade(
  objectOfStudents: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => getAverageGrade(first.grades)
        - getAverageGrade(second.grades));
  }

  return objectOfStudents.sort((first, second) => getAverageGrade(second.grades)
    - getAverageGrade(first.grades));
}

function sortedByAge(objectOfStudents : Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents.sort((first, second) => first.age - second.age);
  }

  return objectOfStudents.sort((first, second) => second.age - first.age);
}

function sortedByMarried(
  objectOfStudents: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents.sort((first, second) => {
      return Number(first.married) - Number(second.married);
    });
  }

  return objectOfStudents.sort((first, second) => {
    return Number(second.married) - Number(first.married);
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const array: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return sortedByNameAndSurname(array, order);

    case (SortType.Age):
      return sortedByAge(array, order);

    case (SortType.AverageGrade):
      return sortedByAverageGrade(array, order);

    default: {
      const newArray = sortedByMarried(array, order);

      return newArray;
    }
  }
}
