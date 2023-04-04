
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

export function getAverage(marks: number[]): number {
  return marks.reduce(
    (sum, current) => sum + current, 0,
  ) / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const isAsc: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfStudents.sort(
        (firstStudent: Student, secondStudent: Student) => (isAsc
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
        ),
      );

    case SortType.Age:
      return copyOfStudents.sort(
        (firstStudent: Student, secondStudent: Student) => (isAsc
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy]
        ),
      );

    case SortType.Married:
      return copyOfStudents.sort(
        (firstStudent: Student, secondStudent: Student) => (isAsc
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy])
        ),
      );

    case SortType.AverageGrade:
      return copyOfStudents.sort(
        (firstStudent: Student, secondStudent: Student) => (isAsc
          ? getAverage(firstStudent[sortBy]) - getAverage(secondStudent[sortBy])
          : getAverage(secondStudent[sortBy]) - getAverage(firstStudent[sortBy])
        ),
      );

    default:
      throw new Error('Invalid input');
  }
}
