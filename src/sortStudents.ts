
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((accumulator: number, current: number): number => (
      accumulator + current)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
        ));

    case SortType.Age:
    case SortType.Married:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
            : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy])
        ));

    case SortType.AverageGrade:
      return copyStudents
        .sort((firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? getAverageGrade(firstStudent[sortBy])
              - getAverageGrade(secondStudent[sortBy])
            : getAverageGrade(secondStudent[sortBy])
              - getAverageGrade(firstStudent[sortBy])
        ));

    default:
      return copyStudents;
  }
}
