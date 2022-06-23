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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    // fallsthrough

    case SortType.Surname: {
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])
        ));

        break;
      }

      sortedArray.sort((a: Student, b: Student) => (
        b.name.localeCompare(a.name)
      ));
      break;
    }

    case SortType.Married:
    // fallsthrough

    case SortType.Age: {
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]
        ));

        break;
      }

      sortedArray.sort((a: Student, b: Student) => (
        +b[sortBy] - +a[sortBy]
      ));
      break;
    }

    case SortType.AverageGrade: {
      const reduceFn = (sum: number, accum: number): number => sum + accum;

      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => (
          a[sortBy].reduce(reduceFn, 0) / a[sortBy].length
          - b[sortBy].reduce(reduceFn, 0) / b[sortBy].length
        ));

        break;
      }

      sortedArray.sort((a: Student, b: Student) => (
        b[sortBy].reduce(reduceFn, 0) / b[sortBy].length
        - a[sortBy].reduce(reduceFn, 0) / a[sortBy].length
      ));
      break;
    }

    default:
      break;
  }

  return sortedArray;
}
