interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted = [...students];

  function getAverageGrade(grades: number[]): number {
    return grades.reduce((sum: number, a: number) => sum + a) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => {
          return b[sortBy].localeCompare(a[sortBy]);
        })
        : sorted.sort((a: Student, b: Student):number => {
          return a[sortBy].localeCompare(b[sortBy]);
        });

    case SortType.Age:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => b[sortBy] - a[sortBy])
        : sorted.sort((a: Student, b: Student):number => a[sortBy] - b[sortBy]);

    case SortType.Married:
      sorted.sort((a: Student, b: Student): number => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === 'desc') {
          return a[sortBy] ? -1 : 1;
        }

        return a[sortBy] ? 1 : -1;
      });
      break;

    case SortType.AverageGrade:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => {
          return getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
        })
        : sorted.sort((a: Student, b: Student):number => {
          return getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]);
        });

    default:
      break;
  }

  return sorted;
}
