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

export type SortOrder = 'asc' | 'dsc';

function calcSum(numbers: number[]): number {
  const sum = numbers.reduce((prev: number, curr: number) => prev + curr);

  return sum / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const tempStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return tempStudents.sort((studentA, studentB) => {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        });
      }

      return tempStudents.sort((studentA, studentB) => {
        return studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return tempStudents.sort((studentA, studentB) => {
          return +studentA[sortBy] - +studentB[sortBy];
        });
      }

      return tempStudents.sort((studentA, studentB) => {
        return +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      if (order === 'asc') {
        return tempStudents.sort(
          (a, b) => calcSum(a[sortBy]) - calcSum(b[sortBy]),
        );
      }

      return tempStudents.sort(
        (a, b) => calcSum(b[sortBy]) - calcSum(a[sortBy]),
      );

    default:
      break;
  }

  return tempStudents;
}
