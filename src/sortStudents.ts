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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(item: number[]): number {
  return item.reduce((a, b) => a + b) / item.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction: number = order === 'asc' ? 1 : -1;

  return students.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return a[sortBy].localeCompare(b[sortBy]) * direction;

      case 'age':
      case 'married':
        return (+b.age - +a.age) * direction;

      case 'grade':
        return (average(a.grades) - average(b.grades));

      default:
        return 0;
    }
  });
}
