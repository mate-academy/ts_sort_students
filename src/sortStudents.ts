
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
  let sortedStudents = [...students];

  const getAverage: (grades: number[]) => number = (grades) => {
    return (grades.reduce((a, b) => a + b, 0) / grades.length);
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents = (order === 'asc')
        ? sortedStudents
          .sort((studentA, studentB) => studentA[sortBy]
            .localeCompare(studentB[sortBy]))
        : sortedStudents
          .sort((studentA, studentB) => studentB[sortBy]
            .localeCompare(studentA[sortBy]));
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents = (order === 'asc')
        ? sortedStudents.sort((studentA, studentB) => Number(studentA[sortBy])
          - Number(studentB[sortBy]))
        : sortedStudents.sort((studentA, studentB) => Number(studentB[sortBy])
          - Number(studentA[sortBy]));
      break;

    case SortType.AverageGrade:
      sortedStudents = (order === 'asc')
        ? sortedStudents
          .sort((studentA, studentB) => getAverage(studentA[sortBy])
            - getAverage(studentB[sortBy]))
        : sortedStudents
          .sort((studentA, studentB) => getAverage(studentB[sortBy])
            - getAverage(studentA[sortBy]));
      break;

    default:
  }

  return sortedStudents;
}
