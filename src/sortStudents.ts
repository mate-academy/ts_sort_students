
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

function sortString(
  array: [],
  parameter: 'name' | 'surname',
  order: SortOrder,
): [] {
  if (order === 'desc') {
    return array.sort(
      (a: Student, b: Student) => b[parameter].localeCompare(a[parameter]),
    );
  }

  return array.sort(
    (a: Student, b: Student) => a[parameter].localeCompare(b[parameter]),
  );
}

export function sortStudents(
  students: [],
  sortBy: SortType,
  order: SortOrder,
)
  :[] {
  const result: [] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortString(result, sortBy, order);
    case SortType.Age:
    case SortType.Married:
      return result.sort(
        (a: Student, b: Student) => {
          if (order === 'desc') {
            return +b[sortBy] - +a[sortBy];
          }

          return +a[sortBy] - +b[sortBy];
        },
      );
    case SortType.AverageGrade:
      return result.sort(
        (a: Student, b: Student) => {
          const AStudentAverage = calculateAverageGrade(a.grades);
          const BStudentAverage = calculateAverageGrade(b.grades);

          if (order === 'desc') {
            return BStudentAverage - AStudentAverage;
          }

          return AStudentAverage - BStudentAverage;
        },
      );

    default:
      return [];
  }
}
