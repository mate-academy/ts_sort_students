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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];
  const sortType: number = order === 'asc' ? 1 : -1;

  result.sort((a: Student, b: Student): number => {
    if (sortBy === SortType.AverageGrade) {
      const avgA: number = a.grades.reduce((acc, val): number => {
        return acc + val;
      }, 0) / a.grades.length;
      const avgB: number = b.grades.reduce((acc, val): number => {
        return acc + val;
      }, 0) / b.grades.length;

      return (avgA - avgB) * sortType;
    }

    const valA: string = a[sortBy].toString();
    const valB: string = b[sortBy].toString();

    return valA.localeCompare(valB) * sortType;
  });

  return result;
}
