
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function reduceCallback(sum: number, grade: number): number {
  return sum + grade;
}

function createCallback<E>(
  sortby: SortType, order: SortOrder,
): (a: E, b: E) => number {
  return (a, b): number => {
    if (typeof a[sortby] === 'string') {
      return order === 'asc'
        ? a[sortby].localeCompare(b[sortby])
        : b[sortby].localeCompare(a[sortby]);
    }

    if (typeof a[sortby] === 'boolean') {
      return order === 'asc'
        ? Number(a[sortby]) - Number(b[sortby])
        : Number(b[sortby]) - Number(a[sortby]);
    }

    if (Array.isArray(a[sortby])) {
      const aSum: number = a[sortby].reduce(reduceCallback, 0);
      const bSum: number = b[sortby].reduce(reduceCallback, 0);

      return order === 'asc'
        ? aSum / a[sortby].length - bSum / b[sortby].length
        : bSum / b[sortby].length - aSum / a[sortby].length;
    }

    return order === 'asc'
      ? a[sortby] - b[sortby]
      : b[sortby] - a[sortby];
  };
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return [...students]
          .sort(createCallback<Student>(SortType.Name, 'asc'));
      case SortType.Surname:
        return [...students]
          .sort(createCallback<Student>(SortType.Surname, 'asc'));
      case SortType.Age:
        return [...students]
          .sort(createCallback<Student>(SortType.Age, 'asc'));
      case SortType.Married:
        return [...students]
          .sort(createCallback<Student>(SortType.Married, 'asc'));
      default:
        return [...students]
          .sort(createCallback<Student>(SortType.AverageGrade, 'asc'));
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        return [...students]
          .sort(createCallback<Student>(SortType.Name, 'desc'));
      case SortType.Surname:
        return [...students]
          .sort(createCallback<Student>(SortType.Surname, 'desc'));
      case SortType.Age:
        return [...students]
          .sort(createCallback<Student>(SortType.Age, 'desc'));
      case SortType.Married:
        return [...students]
          .sort(createCallback<Student>(SortType.Married, 'desc'));
      default:
        return [...students]
          .sort(createCallback<Student>(SortType.AverageGrade, 'desc'));
    }
  }
}
