
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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

function averageGrade(x: number[]): number {
  return x.reduce((prev, cur) => {
    return prev + cur;
  }, 0) / x.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const sortOrder = order === 'desc' ? -1 : 1;

  studentsCopy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortOrder * a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
        return sortOrder * (a[sortBy] - b[sortBy]);
      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }

        return sortOrder * (a.married ? 1 : -1);
      case SortType.AverageGrade:
        return sortOrder * (averageGrade(a[sortBy]) - averageGrade(b[sortBy]));
      default:
        return 1;
    }
  });

  return studentsCopy;
}
