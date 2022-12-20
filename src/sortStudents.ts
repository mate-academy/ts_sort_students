
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (arrayOfGrades: number[]): number => {
  return arrayOfGrades.reduce((acc, curr) => acc + curr, 0)
  / arrayOfGrades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedArray.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : sortedArray.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedArray.sort((a, b) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades))
        : sortedArray.sort((a, b) => getAverageGrade(b.grades)
          - getAverageGrade(a.grades));

    default:
      return students;
  }
}
