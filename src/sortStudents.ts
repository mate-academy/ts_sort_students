
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number [];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
):Student [] {
  const studentsNew: Student [] = [...students];

  switch (sortBy) {
    case SortType.Married: {
      const result: Student[] = studentsNew.sort((x, y) => {
        return (order === 'asc' ? Number(x[sortBy]) - Number(y[sortBy])
          : Number(y[sortBy]) - Number(x[sortBy]));
      });

      return result;
    }

    case SortType.Age: {
      const result: Student[] = studentsNew.sort((x, y) => {
        return (order === 'asc' ? x[sortBy] - y[sortBy]
          : y[sortBy] - x[sortBy]);
      });

      return result;
    }

    case SortType.Name:

    // eslint-disable-next-line no-fallthrough
    case SortType.Surname: {
      const result: Student[] = studentsNew.sort((x, y) => {
        return (order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy])
        );
      });

      return result;
    }

    case SortType.AverageGrade: {
      const result: Student[] = studentsNew.sort((x, y) => {
        const sumA = x[sortBy].reduce((a, summ) => a + summ);
        const sumB = y[sortBy].reduce((b, summ) => b + summ);

        return (
          order === 'asc'
            ? (sumA) / x[sortBy].length - (sumB) / y[sortBy].length
            : (sumB) / y[sortBy].length - (sumA) / x[sortBy].length
        );
      });

      return result;
    }

    default: {
      return [];
    }
  }
}
