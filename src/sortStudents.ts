
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avarageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAvg(array: number[]): number {
  return array.reduce((sum, number) => sum + number) / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((first, second) => {
        if (order === 'asc') {
          return first[sortBy].localeCompare(second[sortBy]);
        }

        return second[sortBy].localeCompare(first[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((first, second) => {
        if (order === 'asc') {
          return first[sortBy] - second[sortBy];
        }

        return second[sortBy] - first[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((first, second) => {
        if (order === 'asc') {
          return getAvg(first.grades) - getAvg(second.grades);
        }

        return getAvg(second.grades) - getAvg(first.grades);
      });

    default:
      break;
  }

  return sortedStudents;
}
