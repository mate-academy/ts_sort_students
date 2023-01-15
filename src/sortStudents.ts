
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(numbers: number[]): number {
  const totalGrade = [...numbers].reduce((acc: number, current: number) => {
    return acc + current;
  }, 0);

  return totalGrade / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];
  const isASC = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a, b) => {
        return isASC
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((a, b) => {
        if (isASC) {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }

        return a[sortBy] > b[sortBy] ? -1 : 1;
      });
    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => {
        return isASC
          ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
          : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      });
    default:
      return copyStudents;
  }
}
