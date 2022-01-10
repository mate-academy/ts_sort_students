
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    if (order === 'asc') {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return a[sortBy].localeCompare(b[sortBy]);
        case SortType.Age:
        case SortType.Married:
          return +a[sortBy] - +b[sortBy];

        case SortType.AverageGrade: {
          const AverageGradeA = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const AverageGradeB = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return AverageGradeA - AverageGradeB;
        }
        default:
          return 0;
      }
    } else {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return b[sortBy].localeCompare(a[sortBy]);
        case SortType.Age:
        case SortType.Married:
          return +b[sortBy] - +a[sortBy];

        case SortType.AverageGrade: {
          const AverageGradeA = a.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / a.grades.length;
          const AverageGradeB = b.grades.reduce((prev, next) => {
            return prev + next;
          }, 0) / b.grades.length;

          return AverageGradeB - AverageGradeA;
        }
        default:
          return 0;
      }
    }
  });

  return sortedStudents;
}
