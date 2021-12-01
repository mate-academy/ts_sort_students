
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(person:Student):number {
  return person.grades.reduce((a, b) => a + b)
  / person.grades.length;
}

export function sortStudents(s:Student[],
  sortBy:SortType, order:SortOrder):Student[] {
  const students = [...s];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      students.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      students.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]));
      break;

    case SortType.AverageGrade:
      students.sort((a, b) => (order === 'asc'
        ? getAverage(a) - getAverage(b)
        : getAverage(b) - getAverage(a)));
      break;

    default:
      return students;
  }

  return students;
}
