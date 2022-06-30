
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
    case SortType.Surname:
      if (order === 'asc') {
        return newStudents
          .sort((nameA, nameB) => nameA[sortBy].localeCompare(nameB[sortBy]));
      }

      return newStudents
        .sort((nameA, nameB) => nameB[sortBy].localeCompare(nameA[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return newStudents
          .sort((ageA, ageB) => +ageA[sortBy] - +ageB[sortBy]);
      }

      return newStudents
        .sort((ageA, ageB) => +ageB[sortBy] - +ageA[sortBy]);

    case SortType.AverageGrade:
      return sortAverageGrade(newStudents, order);

    default:
      return newStudents;
  }
}
