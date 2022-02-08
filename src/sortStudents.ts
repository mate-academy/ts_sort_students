
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((st1, st2) => {
        return order === 'asc'
          ? st1[sortBy].localeCompare(st2[sortBy])
          : st2[sortBy].localeCompare(st1[sortBy]);
      });
      break;

    case SortType.Age:
      sortedStudents.sort((st1, st2) => {
        return order === 'asc'
          ? st1[sortBy] - st2[sortBy]
          : st2[sortBy] - st1[sortBy];
      });

      break;

    case SortType.Married:
      sortedStudents.sort((st1, st2) => {
        if (st1[sortBy] === st2[sortBy]) {
          return 0;
        }

        if (order === 'asc') {
          return st1[sortBy] ? 1 : -1;
        }

        return st1[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((st1, st2) => {
        const average1
        = st1[sortBy].reduce((a, b) => a + b) / st1[sortBy].length;
        const average2
        = st2[sortBy].reduce((a, b) => a + b) / st2[sortBy].length;

        return order === 'asc'
          ? average1 - average2
          : average2 - average1;
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}
