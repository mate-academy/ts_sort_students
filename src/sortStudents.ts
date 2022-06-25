
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

function sortByName(students: Student[], order: SortOrder): Student[] {
  return students.sort((firstStudent, secondStudent) => {
    return order === 'asc'
      ? firstStudent.name.localeCompare(secondStudent.name)
      : secondStudent.name.localeCompare(firstStudent.name);
  });
}

function sortBySurname(students: Student[], order: SortOrder): Student[] {
  return students.sort((firstStudent, secondStudent) => {
    return order === 'asc'
      ? firstStudent.surname.localeCompare(secondStudent.surname)
      : secondStudent.surname.localeCompare(firstStudent.surname);
  });
}

function sortByAge(students: Student[], order: SortOrder): Student[] {
  return students.sort((firstStudent, secondStudent) => {
    return order === 'asc'
      ? firstStudent.age - secondStudent.age
      : secondStudent.age - firstStudent.age;
  });
}

function sortByMarried(students: Student[], order: SortOrder): Student[] {
  return students.sort((firstStudent, secondStudent) => {
    return order === 'asc'
      ? Number(firstStudent.married) - Number(secondStudent.married)
      : Number(secondStudent.married) - Number(firstStudent.married);
  });
}

function averageCallback(firstValue: number[], secondValue: number[]): number {
  const firstNumber: number = firstValue
    .reduce((prev, total) => prev + total, 0)
    / firstValue.length;

  const secondNumber: number = secondValue
    .reduce((prev, total) => prev + total, 0)
    / secondValue.length;

  return firstNumber - secondNumber;
}

function sortByAverageGrade(students: Student[], order: SortOrder): Student[] {
  return students.sort((firstStudent, secondStudent) => {
    return order === 'asc'
      ? averageCallback(firstStudent.grades, secondStudent.grades)
      : averageCallback(secondStudent.grades, firstStudent.grades);
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByName(sortedStudents, order);

    case SortType.Surname:
      return sortBySurname(sortedStudents, order);

    case SortType.Age:
      return sortByAge(sortedStudents, order);

    case SortType.Married:
      return sortByMarried(sortedStudents, order);

    case SortType.AverageGrade:
      return sortByAverageGrade(sortedStudents, order);

    default:
      return sortedStudents;
  }
}
