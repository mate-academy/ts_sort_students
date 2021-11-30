
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

function avarageGrades(person: Student): number {
  return person.grades.reduce((a, b) => a + b, 0) / person.grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  let studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => (
        order === 'asc'
          ? avarageGrades(a) - avarageGrades(b)
          : avarageGrades(b) - avarageGrades(a)
      ));
      break;

    default: {
      studentsCopy = [];
    }
  }

  return studentsCopy;
}
