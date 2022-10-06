
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

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / (grades.length || 1);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => (
          firstStudent[sortBy].localeCompare(secondStudent[sortBy])))
        : studentsCopy.sort((firstStudent, secondStudent) => (
          secondStudent[sortBy].localeCompare(firstStudent[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => (
          +firstStudent[sortBy] - +secondStudent[sortBy]))
        : studentsCopy.sort((firstStudent, secondStudent) => (
          +secondStudent[sortBy] - +firstStudent[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => (
          calculateAverageGrade(firstStudent[sortBy])
            - calculateAverageGrade(secondStudent[sortBy])))
        : studentsCopy.sort((firstStudent, secondStudent) => (
          calculateAverageGrade(secondStudent[sortBy])
            - calculateAverageGrade(firstStudent[sortBy])));

    default:
      return studentsCopy;
  }
}
