
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

export type SortOrder = 'asc' | 'desc';

function sortSwitch(a: Student, b: Student, sortBy: SortType): number {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return a[sortBy].localeCompare(b[sortBy]);

    case SortType.Age:
      return a[sortBy] - b[sortBy];

    case SortType.Married:
      if (a[sortBy] && !b[sortBy]) {
        return 1;
      }

      if (!a[sortBy] && b[sortBy]) {
        return -1;
      }

      return 0;

    case SortType.AverageGrade:
      return a[sortBy].reduce((acc, curr) => acc + curr, 0) / a[sortBy].length
        - b[sortBy].reduce((acc, curr) => acc + curr, 0) / b[sortBy].length;

    default:
      return 0;
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = JSON.parse(JSON.stringify(students));

  return sortedStudents.sort((a: Student, b: Student): number => {
    if (order === 'asc') {
      return sortSwitch(a, b, sortBy);
    }

    return sortSwitch(b, a, sortBy);
  });
}
