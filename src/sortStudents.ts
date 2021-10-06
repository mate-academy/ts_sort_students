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
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
      default:
        return 0;
    }

    // if (typeof curr === 'string' && typeof prev === 'string') {
    //   return curr.localeCompare(prev);
    // }
    //
    // if (typeof curr === 'number' && typeof prev === 'number') {
    //   return curr - prev;
    // }
    //
    // if (sortBy === SortType.AverageGrade
    //   && Array.isArray(curr)
    //   && Array.isArray(prev)
    // ) {
    //   return getAverageGrade(curr) - getAverageGrade(prev);
    // }
    //
    // if (sortBy === SortType.Married
    //   && typeof curr === 'boolean'
    //   && typeof prev === 'boolean'
    // ) {
    //   return Number(curr) - Number(prev);
    // }
    //
    // return 0;
  };
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort(sorter(sortBy, order));
}
