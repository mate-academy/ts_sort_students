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
  AverageGrade = 'average grade'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(arrayOfGrades: number[]): number {
  return arrayOfGrades.reduce((prevResult, currentGrade) => {
    return (prevResult + currentGrade);
  }, 0) / arrayOfGrades.length;
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
        sortedStudents.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]));
      } else {
        sortedStudents.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort(
            (a: Student, b: Student) => Number(a[sortBy]) - Number(b[sortBy]),
          );
      } else {
        sortedStudents
          .sort(
            (a: Student, b: Student) => Number(b[sortBy]) - Number(a[sortBy]),
          );
      }
      break;

    default:
      if (order === 'asc') {
        sortedStudents.sort(
          (a: Student, b: Student) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades),
        );
      } else {
        sortedStudents.sort(
          (a: Student, b: Student) => getAverageGrade(b.grades)
          - getAverageGrade(a.grades),
        );
      }
      break;
  }

  return sortedStudents;
}
