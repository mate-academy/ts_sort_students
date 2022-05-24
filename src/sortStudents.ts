
export interface Student {
  name: string;
  surname: string;
  age: number
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrage',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce((sum, el) => sum + el, 0)
  / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return getAverageGrade(a) - getAverageGrade(b);
        }

        return getAverageGrade(b) - getAverageGrade(a);
      });

    default:
      return [];
  }
}
