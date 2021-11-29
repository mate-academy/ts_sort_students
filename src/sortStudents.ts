
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sorted = [...students].sort((a, b) => {
    const item1 = a[sortBy];
    const item2 = b[sortBy];

    if (typeof item1 === 'string' && typeof item2 === 'string') {
      switch (order) {
        case 'asc':
          return item1.localeCompare(item2);
        case 'desc':
          return item2.localeCompare(item1);
        default:
          return 0;
      }
    }

    if ((typeof item1 === 'number' && typeof item2 === 'number')) {
      switch (order) {
        case 'asc':
          return item1 - item2;
        case 'desc':
          return item2 - item1;
        default:
          return 0;
      }
    }

    if (Array.isArray(item1) && Array.isArray(item2)) {
      const firstAve: number
        = item1.reduce((x, y) => x + y) / item1.length;
      const secondAve: number
        = item2.reduce((x, y) => x + y) / item2.length;

      switch (order) {
        case 'asc':
          return firstAve - secondAve;
        case 'desc':
          return secondAve - firstAve;
        default:
          return 0;
      }
    }

    if (typeof item1 === 'boolean' && typeof item2 === 'boolean') {
      if (item1 === item2) {
        return 0;
      }

      if (order === 'asc') {
        return item1 ? 1 : -1;
      }

      if (order === 'desc') {
        return item1 ? -1 : 1;
      }
    }

    return 0;
  });

  return sorted;
}
