
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
  AverageGrade = ' grades'
}

function averageGrade(array: number[]): number {
  return array.reduce((z: number, q: number) => z + q)
  / array.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const result: Student[] = students.map(
    (person: Student) => ({
      ...person,
    }),
  );

  return result.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(a.grades) - averageGrade(b.grades)
          : averageGrade(b.grades) - averageGrade(a.grades);

      default:
        throw new Error('Please enter valid SortType');
    }
  });
}
