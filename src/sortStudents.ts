
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

export type SortOrder = 'desc' | 'asc';

function findAverageGrade(studentGrades: number[]): number {
  const sumOfGrades = studentGrades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0);

  return sumOfGrades / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents = copyStudents.sort((first, second) => {
        if (order === 'asc') {
          return first[sortBy].localeCompare(second[sortBy]);
        }

        return second[sortBy].localeCompare(first[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents = copyStudents.sort(
        (first, second) => Number(second[sortBy])
          - Number(first[sortBy]),
      );

      break;

    case SortType.AverageGrade:
      copyStudents = copyStudents.sort((first, second) => {
        if (order === 'asc') {
          return findAverageGrade(first.grades)
          - findAverageGrade(second.grades);
        }

        return findAverageGrade(second.grades)
          - findAverageGrade(first.grades);
      });

      break;

    default:
      break;
  }

  return copyStudents;
}
