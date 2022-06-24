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
  AverageGrade = 'average grade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(arrayOfGrades: number[]): number {
  return arrayOfGrades.reduce((prevResult, currentGrade) => {
    return (prevResult + currentGrade);
  }, 0) / arrayOfGrades.length;
}

function sortByName(objectOfStudents: Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents
      .sort((firstStudent, secondStudent) => firstStudent.name
        .localeCompare(secondStudent.name));
  }

  return objectOfStudents
    .sort((firstStudent, secondStudent) => secondStudent.name
      .localeCompare(firstStudent.name));
}

function sortBySurname(objectofStudents: Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectofStudents
      .sort((firstStudent, secondStudent) => firstStudent.surname
        .localeCompare(secondStudent.surname));
  }

  return objectofStudents
    .sort((firstStudent, secondStudent) => secondStudent.surname
      .localeCompare(firstStudent.surname));
}

function sortByAge(objectOfStudents: Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectOfStudents.sort(
      (firstStudent, secondStudent) => firstStudent.age - secondStudent.age,
    );
  }

  return objectOfStudents.sort(
    (firstStudent, secondStudent) => secondStudent.age - firstStudent.age,
  );
}

function sortByMarried(objectofStudents: Student[], order: string): Student[] {
  if (order === 'asc') {
    return objectofStudents.sort((
      firstStudent, secondStudent,
    ) => Number(firstStudent.married) - Number(secondStudent.married));
  }

  return objectofStudents.sort((
    firstStudent, secondStudent,
  ) => Number(secondStudent.married) - Number(firstStudent.married));
}

function sortByAverageGrade(
  objectofStudents: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return objectofStudents.sort((
      firstStudent, secondStudent,
    ) => getAverageGrade(firstStudent.grades)
    - getAverageGrade(secondStudent.grades));
  }

  return objectofStudents.sort((
    firstStudent, secondStudent,
  ) => getAverageGrade(secondStudent.grades)
  - getAverageGrade(firstStudent.grades));
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByName(copyStudents, order);

    case SortType.Surname:
      return sortBySurname(copyStudents, order);

    case SortType.Age:
      return sortByAge(copyStudents, order);

    case SortType.Married:
      return sortByMarried(copyStudents, order);

    case SortType.AverageGrade:
      return sortByAverageGrade(copyStudents, order);

    default:
      break;
  }

  return copyStudents;
}
