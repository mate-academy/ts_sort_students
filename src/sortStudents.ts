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

const getAverageGrades = (grades: number[]): number => {
  return grades.reduce((acc, item) => acc + item, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const isReversed = order === 'asc';

  const sortedStudents: Student[] = [...students].sort(
    (a: Student, b: Student): number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return isReversed
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return isReversed ? +a[sortBy] - +b[sortBy] : +b[sortBy] - +a[sortBy];

        case SortType.AverageGrade:
          return isReversed
            ? getAverageGrades(a.grades) - getAverageGrades(b.grades)
            : getAverageGrades(b.grades) - getAverageGrades(a.grades);

        default:
          return 0;
      }
    },
  );

  return sortedStudents;
}
