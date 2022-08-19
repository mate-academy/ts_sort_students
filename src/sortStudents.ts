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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let theSortOrder: number = 1;

  if (order === 'desc') {
    theSortOrder = -1;
  }

  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case SortType.Surname:
      studentsCopy.sort(
        (a, b) => a.surname.localeCompare(b.surname) * theSortOrder,
      );
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => (a.age - b.age) * theSortOrder);
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => (+a.married - +b.married) * theSortOrder);
      break;

    default:
      studentsCopy.sort((a, b) => (
        (a.grades
          .reduce((sum, current) => sum + current, 0) / a.grades.length)
        - (b.grades
          .reduce((
            sum, current,
          ) => sum + current, 0) / b.grades.length)) * theSortOrder);
      break;
  }

  return studentsCopy;
}
