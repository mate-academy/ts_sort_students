export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  average?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

export type SortOrder = 'asc' | 'desc';

function makeAverage(students: Student[]): Student[] {
  const newStudents: Student[] = [...students];

  for (let i: number = 0; i < newStudents.length; i += 1) {
    newStudents[i].average = newStudents[i].grades.reduce((x, y) => x + y, 0)
      / newStudents[i].grades.length;
  }

  return newStudents;
}

function sortedString(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  return order === 'asc'
    ? newStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : newStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
}

function sortedDefault(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  return order === 'asc'
    ? newStudents.sort((a, b) => a[sortBy] - b[sortBy])
    : newStudents.sort((a, b) => b[sortBy] - a[sortBy]);
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  let newStudents: Student[];

  switch (sortBy) {
    case SortType.Name:
      newStudents = sortedString(students, SortType.Name, order);
      break;

    case SortType.Surname:
      newStudents = sortedString(students, SortType.Surname, order);
      break;

    case SortType.Age:
      newStudents = sortedDefault(students, SortType.Age, order);
      break;

    case SortType.Married:
      newStudents = sortedDefault(students, SortType.Married, order);
      break;

    case SortType.AverageGrade:
      newStudents = sortedDefault(makeAverage(students),
        SortType.AverageGrade, order);
      break;

    default:
      newStudents = sortedDefault(students, sortBy, order);
  }

  return newStudents;
}
