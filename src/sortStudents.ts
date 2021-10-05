// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}
type SortOrder = 'asc' | 'desc';

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

function getAverageGrade(arr: number[]): number {
  return arr.reduce((sum, grade) => sum + grade, 0) / arr.length;
}

function sorter(sortBy: SortType, order: string) {
  return (a: Student, b: Student): number => {
    let curr = a[sortBy];
    let prev = b[sortBy];

    if (order === 'desc') {
      curr = b[sortBy];
      prev = a[sortBy];
    }

    if (typeof curr === 'string' && typeof prev === 'string') {
      return curr.localeCompare(prev);
    }

    if (typeof curr === 'number' && typeof prev === 'number') {
      return curr - prev;
    }

    if (sortBy === SortType.AverageGrade
      && Array.isArray(curr)
      && Array.isArray(prev)
    ) {
      return getAverageGrade(curr) - getAverageGrade(prev);
    }

    if (sortBy === SortType.Married
      && typeof curr === 'boolean'
      && typeof prev === 'boolean'
    ) {
      return Number(curr) - Number(prev);
    }

    return 0;
  };
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort(sorter(sortBy, order));
}
