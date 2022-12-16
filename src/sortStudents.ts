
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
  Married = 'married',
  AverageGrade = 'grades'
}

type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyListOfSudents = students.slice();

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return copyListOfSudents.sort((currentStudent, nextStudent) => (
        order === 'asc'
          ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(currentStudent[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:

      return copyListOfSudents.sort((currentStudent, nextStudent) => (
        order === 'asc'
          ? Number(currentStudent[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(currentStudent[sortBy])
      ));

    case SortType.AverageGrade:

      return copyListOfSudents.sort((currentStudent, nextStudent) => (
        order === 'asc'
          ? getAverage(currentStudent[sortBy]) - getAverage(nextStudent[sortBy])
          : getAverage(nextStudent[sortBy]) - getAverage(currentStudent[sortBy])
      ));

    default:
      break;
  }

  return copyListOfSudents;
}
