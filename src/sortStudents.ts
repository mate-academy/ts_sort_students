
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const copyStudents: Student[] = [...students];
  const sortByOrder = order === 'asc'
    ? 1
    : -1;

  type Sum = (sum: number, mark: number) => number;
  type Average = (grades: number[]) => number;

  const sumMarks: Sum = (sum, mark) => sum + mark;
  const avgMark: Average = (grades) => (
    grades.reduce(sumMarks, 0) / grades.length
  );

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((
        { name: personA },
        { name: personB },
      ) => personA.localeCompare(personB) * sortByOrder);
      break;

    case SortType.Surname:
      copyStudents.sort((
        { surname: personA },
        { surname: personB },
      ) => personA.localeCompare(personB) * sortByOrder);
      break;

    case SortType.Age:
      copyStudents.sort((
        { age: personA },
        { age: personB },
      ) => (personA - personB) * sortByOrder);
      break;

    case SortType.Married:
      copyStudents.sort((
        { married: personA },
        { married: personB },
      ) => (Number(personA) - Number(personB)) * sortByOrder);
      break;

    case SortType.AverageGrade:
      copyStudents.sort((
        { grades: personA },
        { grades: personB },
      ) => (avgMark(personA) - avgMark(personB)) * sortByOrder);
      break;

    default:
      throw new Error('Some value is wrong');
  }

  return copyStudents;
}
