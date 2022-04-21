
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(arr: Student): number {
  const average = arr.grades.reduce((a: number, b: number) => a + b, 0);

  return average / arr.grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];
      });
      break;

    case SortType.AverageGrade: copyStudents.sort((studentA, studentB) => {
      return order === 'asc'
        ? getAverage(studentA) - getAverage(studentB)
        : getAverage(studentB) - getAverage(studentA);
    });
      break;

    default:
      return copyStudents;
  }

  return copyStudents;
}
