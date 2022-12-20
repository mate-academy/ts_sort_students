
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

function countMarks(grades:number[]):number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort((firstStudent, secondStudent) => (
          firstStudent[sortBy].localeCompare(secondStudent[sortBy])));
      }

      return sortedStudents.sort((firstStudent, secondStudent) => (
        secondStudent[sortBy].localeCompare(firstStudent[sortBy])));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents.sort((firstStudent, secondStudent) => (
          firstStudent[sortBy] - secondStudent[sortBy]));
      }

      return sortedStudents.sort((firstStudent, secondStudent) => (
        secondStudent[sortBy] - firstStudent[sortBy]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort((firstStudent, secondStudent) => (
          countMarks(firstStudent[sortBy])
          - countMarks(secondStudent[sortBy])));
      }

      return sortedStudents.sort((firstStudent, secondStudent) => (
        countMarks(secondStudent[sortBy]) - countMarks(firstStudent[sortBy])));

    default:
      break;
  }

  return sortedStudents;
}
