
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
  const studentsNew: Student [] = students;

  if (sortBy === 'age') {
    const result: Student[] = studentsNew.sort((x, y) => {
      return (order === 'asc' ? x[sortBy] - y[sortBy] : y[sortBy] - x[sortBy]);
    });

    return result;
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    const result: Student[] = studentsNew.sort((x, y) => {
      return (order === 'asc' ? x[sortBy].localeCompare(y[sortBy])
        : y[sortBy].localeCompare(x[sortBy]));
    });

    return result;
  }

  if (sortBy === 'grades') {
    const result: Student[] = studentsNew.sort((x, y) => {
      return (
        order === 'asc'
          ? (x[sortBy].reduce((a, summ) => a + summ)) / x[sortBy].length
        - (y[sortBy].reduce((b, summ) => b + summ)) / y[sortBy].length
          : (y[sortBy].reduce((b, summ) => b + summ)) / y[sortBy].length
        - (x[sortBy].reduce((a, summ) => a + summ)) / x[sortBy].length

      );
    });

    return result;
  }

  const result: Student[] = studentsNew.sort((x, y) => {
    return (order === 'asc' ? Number(x[sortBy]) - Number(y[sortBy])
      : Number(y[sortBy]) - Number(x[sortBy]));
  });

  return result;
}
