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
  Married = 'true',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function average(arr: number[]): number {
  return arr.reduce((acc, item) => acc + item) / arr.length;
}

function sortByFullNamePart(
  students: Student[],
  sortBy: SortType.Name | SortType.Surname,
  order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((
      student,
      compareStudent,
    ) => student[sortBy].localeCompare(compareStudent[sortBy]))

    : students.sort((
      student,
      compareStudent,
    ) => compareStudent[sortBy].localeCompare(student[sortBy]));
}

function sortByAge(
  students: Student[],
  order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((
      student,
      compareStudent,
    ) => student.age - compareStudent.age)

    : students.sort((
      student,
      compareStudent,
    ) => compareStudent.age - student.age);
}

function sortByMarried(
  students: Student[],
  order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((
      student,
      compareStudent,
    ) => Number(student.married) - Number(compareStudent.married))

    : students.sort((
      student,
      compareStudent,
    ) => Number(compareStudent.married) - Number(student.married));
}

function sortByAverageGrade(
  students: Student[],
  order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((
      student,
      compareStudent,
    ) => average(student.grades) - average(compareStudent.grades))

    : students.sort((
      student,
      compareStudent,
    ) => average(compareStudent.grades) - average(student.grades));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByFullNamePart(studentsCopy, sortBy, order);

    case SortType.Surname:
      return sortByFullNamePart(studentsCopy, sortBy, order);

    case SortType.Age:
      return sortByAge(studentsCopy, order);

    case SortType.Married:
      return sortByMarried(studentsCopy, order);

    case SortType.AverageGrade:
      return sortByAverageGrade(studentsCopy, order);

    default:
      return studentsCopy;
  }
}
