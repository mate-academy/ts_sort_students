
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

function average(values: number[]): number {
  return values
    .reduce((total: number, value: number) => total + value) / values.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSort = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSort
        .sort((studentOne: Student, studentTwo: Student) => (
          order === 'asc'
            ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
            : studentTwo[sortBy].localeCompare(studentOne[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsSort
        .sort((studentOne: Student, studentTwo: Student): number => (
          order === 'asc'
            ? Number(studentOne[sortBy]) - Number(studentTwo[sortBy])
            : Number(studentTwo[sortBy]) - Number(studentOne[sortBy])));
      break;

    case SortType.AverageGrade:
      studentsSort
        .sort((studentOne: Student, studentTwo: Student): number => (
          order === 'asc'
            ? average(studentOne[sortBy]) - average(studentTwo[sortBy])
            : average(studentTwo[sortBy]) - average(studentOne[sortBy])));
      break;

    default: break;
  }

  return studentsSort;
}
