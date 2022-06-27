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

function getAverageAge(grades:number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

function sortedByName(objectOfStudents : Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((first, second) => first.name.localeCompare(second.name));
  }

  return objectOfStudents
    .sort((first, second) => second.name.localeCompare(first.name));
}

function sortedBySurname(
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

function sortedByAge(objectOfStudents : Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents.sort((first, second) => first.age - second.age);
  }

  return objectOfStudents.sort((first, second) => second.age - first.age);
}

function sortedByAverageGrade(
  objectOfStudents: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectOfStudents.sort((first, second) => getAverageAge(first.grades)
      - getAverageAge(second.grades));
  }

  return objectOfStudents.sort((first, second) => getAverageAge(second.grades)
    - getAverageAge(first.grades));
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
