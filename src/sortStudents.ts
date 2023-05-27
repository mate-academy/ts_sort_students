
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const masResult = [...students].sort((a: Student, b: Student): number => {
    let res: number = 0;

    switch (true) {
      case (sortBy === SortType.Age || sortBy === SortType.Married): {
        res = order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
        break;
      }

      case sortBy === SortType.AverageGrade: {
        const everA = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
        const everB = b.grades.reduce((sum, x) => sum + x, 0) / b.grades.length;

        res = order === 'asc' ? everA - everB : everB - everA;
        break;
      }

      case (sortBy === SortType.Name || sortBy === SortType.Surname): {
        res = order === 'asc'
          ? a[sortBy].toString().localeCompare(b[sortBy].toString())
          : b[sortBy].toString().localeCompare(a[sortBy].toString());
        break;
      }

      default: return 0;
    }

    return res;
  });

  return masResult;
}
