
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

function getAverage(grades: number[]): number {
  return grades.reduce((sum, value) => sum + value, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort((studentA, studentB) => {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        });
      }

      return sortedStudents.sort((studentA, studentB) => {
        return studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents.sort((studentA, studentB) => {
          return +studentA[sortBy] - +studentB[sortBy];
        });
      }

      return sortedStudents.sort((studentA, studentB) => {
        return +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort((studentA, studentB) => {
          return getAverage(studentA[sortBy]) - getAverage(studentB[sortBy]);
        });
      }

      return sortedStudents.sort((studentA, studentB) => {
        return getAverage(studentB[sortBy]) - getAverage(studentA[sortBy]);
      });

    default:
      throw new Error('Invalid parameters received!');
  }
}
