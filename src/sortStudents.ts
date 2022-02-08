
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sorted.sort((s1, s2) => {
        switch (order) {
          case 'desc':
            return s2[sortBy].localeCompare(s1[sortBy]);

          default:
            return s1[sortBy].localeCompare(s2[sortBy]);
        }
      });
      break;

    case SortType.Age:
      sorted.sort((s1, s2) => {
        switch (order) {
          case 'desc':
            return s2[sortBy] - s1[sortBy];

          default:
            return s1[sortBy] - s2[sortBy];
        }
      });
      break;

    case SortType.Married:
      sorted.sort((s1, s2) => {
        if (s1[sortBy] === s2[sortBy]) {
          return 0;
        }

        switch (order) {
          case 'desc':
            return s1[sortBy] ? -1 : 1;

          default:
            return s1[sortBy] ? 1 : -1;
        }
      });
      break;

    case SortType.AverageGrade:
      sorted.sort((s1, s2) => {
        const avg1 = s1[sortBy].reduce((a, b) => a + b) / s1[sortBy].length;
        const avg2 = s2[sortBy].reduce((a, b) => a + b) / s2[sortBy].length;

        switch (order) {
          case 'desc':
            return avg2 - avg1;
          default:
            return avg1 - avg2;
        }
      });
      break;

    default:
      break;
  }

  return sorted;
}
