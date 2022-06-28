// not my solution
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

export type SortOrder = 'asc' | 'desc';

function sortByName(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      return firstStudent.name.localeCompare(secondStudent.name);
    })
    : students.sort((firstStudent, secondStudent) => {
      return secondStudent.name.localeCompare(firstStudent.name);
    });
}

function sortBySurname(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      return firstStudent.surname.localeCompare(secondStudent.surname);
    })
    : students.sort((firstStudent, secondStudent) => {
      return secondStudent.surname.localeCompare(firstStudent.surname);
    });
}

function sortByAge(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      return firstStudent.age - secondStudent.age;
    })
    : students.sort((firstStudent, secondStudent) => {
      return secondStudent.age - firstStudent.age;
    });
}

function sortByMarried(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      return Number(firstStudent.married) - Number(secondStudent.married);
    })
    : students.sort((firstStudent, secondStudent) => {
      return Number(secondStudent.married) - Number(firstStudent.married);
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
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      return averageCallback(firstStudent.grades, secondStudent.grades);
    })
    : students.sort((firstStudent, secondStudent) => {
      return averageCallback(secondStudent.grades, firstStudent.grades);
    });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order:SortOrder,
): Student[] {
  const sorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByName(sorted, order);

    case SortType.Surname:
      return sortBySurname(sorted, order);

    case SortType.Age:
      return sortByAge(sorted, order);

    case SortType.Married:
      return sortByMarried(sorted, order);

    case SortType.AverageGrade:
      return sortByAverageGrade(sorted, order);

    default:
      return sorted;
  }
}
