
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

function sortName(
  objectPerson: Student[],
  order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return objectPerson
      .sort((nameA, nameB) => nameA.name.localeCompare(nameB.name));
  }

  return objectPerson
    .sort((nameA, nameB) => nameB.name.localeCompare(nameA.name));
}

function sortSurname(
  objectPerson: Student[],
  order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return objectPerson
      .sort((nameA, nameB) => nameA.surname.localeCompare(nameB.surname));
  }

  return objectPerson
    .sort((nameA, nameB) => nameB.surname.localeCompare(nameA.surname));
}

function sortAge(objectPerson: Student[], order: SortOrder): Student[] {
  if (order === 'asc') {
    return objectPerson
      .sort((agePersonA, agePersonB) => agePersonA.age - agePersonB.age);
  }

  return objectPerson
    .sort((agePersonA, agePersonB) => agePersonB.age - agePersonA.age);
}

function sortMarried(objectPerson: Student[], order: SortOrder): Student[] {
  if (order === 'asc') {
    return objectPerson
      .sort((marriedPersonA, marriedPersonB) => (
        (+marriedPersonA.married) - (+marriedPersonB.married)));
  }

  return objectPerson
    .sort((marriedPersonA, marriedPersonB) => (
      (+marriedPersonB.married) - (+marriedPersonA.married)));
}

function sortAverageGrade(
  objectPerson: Student[],
  order: SortOrder,
): Student[] {
  if (order === 'asc') {
    return objectPerson
      .sort((averageGradeA, averageGradeB) => (
        averageGradeA.grades
          .reduce((a, b) => (a + b)) / averageGradeA.grades.length
        - averageGradeB.grades
          .reduce((a, b) => (a + b)) / averageGradeB.grades.length));
  }

  return objectPerson
    .sort((averageGradeA, averageGradeB) => (
      averageGradeB.grades
        .reduce((a, b) => (a + b)) / averageGradeB.grades.length
      - averageGradeA.grades
        .reduce((a, b) => (a + b)) / averageGradeA.grades.length));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortName(newStudents, order);

    case SortType.Surname:
      return sortSurname(newStudents, order);

    case SortType.Age:
      return sortAge(newStudents, order);

    case SortType.Married:
      return sortMarried(newStudents, order);

    case SortType.AverageGrade:
      return sortAverageGrade(newStudents, order);

    default:
      return newStudents;
  }
}
