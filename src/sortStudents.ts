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

function getAvarage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function sortTwoStudent(
  pastStudent: Student,
  nextStudent: Student,
  sortBy: SortType,
  order: SortOrder,
): number {
  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? pastStudent.name.localeCompare(nextStudent.name)
        : nextStudent.name.localeCompare(pastStudent.name);

    case SortType.Surname:
      return order === 'asc'
        ? pastStudent.surname.localeCompare(nextStudent.surname)
        : nextStudent.surname.localeCompare(pastStudent.surname);

    case SortType.Age:
      return order === 'asc'
        ? pastStudent.age - nextStudent.age
        : nextStudent.age - pastStudent.age;

    case SortType.Married:
      return order === 'asc'
        ? Number(pastStudent.married) - Number(nextStudent.married)
        : Number(nextStudent.married) - Number(pastStudent.married);

    case SortType.AverageGrade:
      return order === 'asc'
        ? getAvarage(pastStudent.grades) - getAvarage(nextStudent.grades)
        : getAvarage(nextStudent.grades) - getAvarage(pastStudent.grades);

    default:
      throw new Error('Wrong data');
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((pastStudent: Student, nextStudent: Student) => {
    return sortTwoStudent(pastStudent, nextStudent, sortBy, order);
  });
}
