
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];

  let sortOrder = 0;

  if (order === 'asc') {
    sortOrder = 1;
  } else {
    sortOrder = -1;
  }

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((current,
        prev) => current[sortBy].localeCompare(prev[sortBy]) * sortOrder);
      break;

    case SortType.Surname:
      sortedStudents.sort((current,
        prev) => current[sortBy].localeCompare(prev[sortBy]) * sortOrder);
      break;

    case SortType.Age:
      sortedStudents.sort((current,
        prev) => (current[sortBy] - prev[sortBy]) * sortOrder);
      break;

    case SortType.Married:
      sortedStudents.sort((current, prev) => {
        if (current[sortBy] === prev[sortBy]) {
          return 0;
        }

        if (current[sortBy] && !prev[sortBy]) {
          return 1 * sortOrder;
        }

        return -1 * sortOrder;
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((current, prev) => {
        const prevSum = prev[sortBy].reduce((sum, el) => sum + el, 0);
        const currentSum = current[sortBy].reduce((sum, el) => sum + el, 0);

        if (currentSum / current[sortBy].length
          === prevSum / prev[sortBy].length) {
          return 0;
        }

        if (currentSum / current[sortBy].length
          > prevSum / prev[sortBy].length) {
          return 1 * sortOrder;
        }

        return -1 * sortOrder;
      });
      break;
    default:
  }

  return sortedStudents;
}
