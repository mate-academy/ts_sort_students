interface Student{
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
  AverageGrade = 'grades',
}

const CalcAvrg = (arr: number[]): number => {
  return arr.reduce((sum: number, n: number) => sum + n, 0) / arr.length;
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStud = [...students];

  copyStud.sort((a, b) => {
    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      if (order === 'asc') {
        return Number(a[sortBy]) - Number(b[sortBy]);
      }

      if (order === 'desc') {
        return Number(b[sortBy]) - Number(a[sortBy]);
      }
    }

    if (sortBy === SortType.AverageGrade) {
      const AvrgA = CalcAvrg(a[sortBy]);
      const AvrgB = CalcAvrg(b[sortBy]);

      if (order === 'asc') {
        return AvrgA - AvrgB;
      }

      if (order === 'desc') {
        return AvrgB - AvrgA;
      }
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      if (order === 'asc') {
        return a[sortBy].localeCompare(b[sortBy]);
      }

      if (order === 'desc') {
        return b[sortBy].localeCompare(a[sortBy]);
      }
    }

    return 0;
  });

  return copyStud;
}
