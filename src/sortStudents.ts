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

function averageMark({ grades }: { grades: number[] }): number {
  return grades.reduce((acc, mark) => acc + mark, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  return copyStudents.sort((a, b): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return Number(a[sortBy]) - Number(b[sortBy]);
        }

        return Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageMark(a) - averageMark(b);
        }

        return averageMark(b) - averageMark(a);

      default:
        throw new Error('Enter valid sort type');
    }
  });
}
