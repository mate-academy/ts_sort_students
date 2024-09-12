
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
  const sortedStudents = [...students];

  const getAverage: (grades: number[]) => number = (grades) => {
    return (grades.reduce((a, b) => a + b, 0) / grades.length);
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents
        .sort((studentA, studentB) => (order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents
        .sort((studentA, studentB) => (order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])));
      break;

    case SortType.AverageGrade:
      sortedStudents
        .sort((studentA, studentB) => (order === 'asc'
          ? getAverage(studentA[sortBy]) - getAverage(studentB[sortBy])
          : getAverage(studentB[sortBy]) - getAverage(studentA[sortBy])));
      break;

    default:
  }

  return sortedStudents;
}
