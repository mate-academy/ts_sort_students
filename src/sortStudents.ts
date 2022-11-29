
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
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Married:
      copyOfStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;

    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        copyOfStudents
          .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
          .reverse();
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        copyOfStudents.sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        copyOfStudents.sort((a, b) => b[sortBy] - a[sortBy]);
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyOfStudents.sort((a, b) => {
          return getAverage(a[sortBy]) - getAverage(b[sortBy]);
        });
      } else {
        copyOfStudents.sort((a, b) => {
          return getAverage(b[sortBy]) - getAverage(a[sortBy]);
        });
      }

      break;

    default:
      break;
  }

  return copyOfStudents;
}
