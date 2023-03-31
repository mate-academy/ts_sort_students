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
  AverageGrade = 'averageGrade',
}

function getAverageGrades({ grades }: Student): number {
  const gradesSum: number = grades.reduce(
    (prev: number, grade: number) => prev + grade, 0,
  );

  return gradesSum / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentArray: Student[] = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentArray.sort(
        (a: Student, b: Student): number => (isAscending
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])),
      );
      break;

    case SortType.Age:
    case SortType.Married:
      studentArray.sort((a: Student, b: Student): number => (isAscending
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      studentArray.sort(
        (isAscending
          ? (a: Student, b: Student): number => getAverageGrades(a)
            - getAverageGrades(b)
          : (a: Student, b: Student): number => getAverageGrades(b)
            - getAverageGrades(a)),
      );
      break;

    default:
      break;
  }

  return studentArray;
}
