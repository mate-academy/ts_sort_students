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

function sortedByName(
  students: Student[],
  order: string,
) :Student[] {
  if (order === 'asc') {
    return students
      .sort((first, second) => first.name.localeCompare(second.name));
  }

  return students
    .sort((first, second) => second.name.localeCompare(first.name));
}

function sortedBySurname(
  students: Student[],
  order: string,
) :Student[] {
  if (order === 'asc') {
    return students
      .sort((first, second) => first.surname.localeCompare(second.surname));
  }

  return students
    .sort((first, second) => second.surname.localeCompare(first.surname));
}

function sortedByAverageGrade(
  students: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return students
      .sort((first, second) => getAverageGrade(first.grades)
        - getAverageGrade(second.grades));
  }

  return students.sort((first, second) => getAverageGrade(second.grades)
    - getAverageGrade(first.grades));
}

function sortedByAge(students : Student[], order: string): Student[] {
  if (order === 'asc') {
    return students.sort((first, second) => first.age - second.age);
  }

  return students.sort((first, second) => second.age - first.age);
}

function sortedByMarried(
  students: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return students.sort((first, second) => {
      return Number(first.married) - Number(second.married);
    });
  }

  return students.sort((first, second) => {
    return Number(second.married) - Number(first.married);
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrStudent: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name):
      return sortedByName(arrStudent, order);
    case (SortType.Surname):
      return sortedBySurname(arrStudent, order);
    case (SortType.Age):
      return sortedByAge(arrStudent, order);

    case (SortType.AverageGrade):
      return sortedByAverageGrade(arrStudent, order);

    case (SortType.Married):
      return sortedByMarried(arrStudent, order);

    default:
      break;
  }

  return arrStudent;
}
