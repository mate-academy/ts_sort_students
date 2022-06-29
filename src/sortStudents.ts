
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

function sortedByName(studentsList : Student[], order: string): Student[] {
  if (order === 'asc') {
    return studentsList
      .sort((first, second) => first.name.localeCompare(second.name));
  }

  return studentsList
    .sort((first, second) => second.name.localeCompare(first.name));
}

function sortedBySurname(
  studentsList : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return studentsList
      .sort((first, second) => first.surname.localeCompare(second.surname));
  }

  return studentsList
    .sort((first, second) => second.surname.localeCompare(first.surname));
}

function sortedByAge(studentsList : Student[], order: string): Student[] {
  if (order === 'asc') {
    return studentsList
      .sort((first, second) => first.age - second.age);
  }

  return studentsList
    .sort((first, second) => second.age - first.age);
}

function sortedByMarried(
  studentsList : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return studentsList
      .sort((first, second) => Number(first.married) - Number(second.married));
  }

  return studentsList
    .sort((first, second) => Number(second.married) - Number(first.married));
}

function getAverageAge(grades:number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

function sortedByAverageGrade(
  studentsList : Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return studentsList
      .sort((first, second) => getAverageAge(first.grades)
      - getAverageAge(second.grades));
  }

  return studentsList
    .sort((first, second) => getAverageAge(second.grades)
      - getAverageAge(first.grades));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name: {
      return sortedByName(arrayOfStudents, order);
    }

    case SortType.Surname: {
      return sortedBySurname(arrayOfStudents, order);
    }

    case SortType.Age: {
      return sortedByAge(arrayOfStudents, order);
    }

    case SortType.AverageGrade: {
      return sortedByAverageGrade(arrayOfStudents, order);
    }

    default: {
      const newArrayOfStudents = sortedByMarried(arrayOfStudents, order);

      return newArrayOfStudents;
    }
  }
}
