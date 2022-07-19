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

function sortedString(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : students.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
}

function sortedDefault(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((a, b) => a[sortBy] - b[sortBy])
    : students.sort((a, b) => b[sortBy] - a[sortBy]);
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  let newStudents: Student[] = [...students];

  for (let i: number = 0; i < newStudents.length; i += 1) {
    newStudents[i].average = newStudents[i].grades.reduce((x, y) => x + y, 0)
      / newStudents[i].grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      newStudents = sortedString(newStudents, SortType.Name, order);
      break;

    case SortType.Surname:
      newStudents = sortedString(newStudents, SortType.Surname, order);
      break;

    case SortType.Age:
      newStudents = sortedDefault(newStudents, SortType.Age, order);
      break;

    case SortType.Married:
      newStudents = sortedDefault(newStudents, SortType.Married, order);
      break;

    case SortType.AverageGrade:
      newStudents = sortedDefault(newStudents, SortType.AverageGrade, order);
      break;

    default:
      newStudents = sortedDefault(newStudents, sortBy, order);
  }

  return newStudents;
}
