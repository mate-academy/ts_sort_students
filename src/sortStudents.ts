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

function getAverageGrade(studentGrade: number[]): number {
  return studentGrade
    .reduce((sum, grade) => (sum + grade)) / studentGrade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const people: Student[] = [...students];
  const orderSort = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      people.sort((student1, student2) => student1[sortBy]
        .localeCompare(student2[sortBy]) * orderSort);
      break;

    case SortType.Age:
    case SortType.Married:
      people
        .sort((student1, student2) => (Number(student1[sortBy])
          - Number(student2[sortBy])) * orderSort);
      break;

    case SortType.AverageGrade:
      people
        .sort((student1, student2) => (getAverageGrade(student1.grades)
          - getAverageGrade(student2.grades)) * orderSort);
      break;

    default:
      break;
  }

  return people;
}
