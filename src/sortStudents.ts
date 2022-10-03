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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((prev: Student, curr: Student) => {
        return prev[sortBy].localeCompare(curr[sortBy]);
      });

      if (order === 'asc') {
        return sortedStudents;
      }

      return sortedStudents.reverse();

    case SortType.Age:
      sortedStudents.sort((prev: Student, curr: Student) => {
        if (order === 'asc') {
          return prev[sortBy] - curr[sortBy];
        }

        return curr[sortBy] - prev[sortBy];
      });
      break;

    case SortType.Married:
      sortedStudents.sort((prev: Student, curr: Student) => {
        if (order === 'asc') {
          return Number(prev[sortBy]) - Number(curr[sortBy]);
        }

        return Number(curr[sortBy]) - Number(prev[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((prev: Student, curr: Student) => {
        const previousAverage = prev[sortBy].reduce(
          (acc:number, current:number) => acc + current,
        ) / prev[sortBy].length;

        const currentAverage = curr[sortBy].reduce(
          (previous:number, current:number) => previous + current,
        ) / curr[sortBy].length;

        if (order === 'asc') {
          return previousAverage - currentAverage;
        }

        return currentAverage - previousAverage;
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}
