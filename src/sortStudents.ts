export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  avarageGrade?: number;
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArr: Student[] = Array.from(students);

  switch (order) {
    case 'asc':
      newArr.sort((studentCurrent: Student, studentNext: Student) => {
        if (sortBy === SortType.AverageGrade) {
          return ((
            studentCurrent[SortType.AverageGrade]
              .reduce((a: number, b:number) => a + b, 0)
                / studentCurrent[SortType.AverageGrade].length)
            - studentNext[SortType.AverageGrade]
              .reduce((a: number, b:number) => a + b, 0)
                / studentNext[SortType.AverageGrade].length
          );
        }

        if (sortBy === SortType.Name || sortBy === SortType.Surname) {
          return studentCurrent[sortBy].localeCompare(studentNext[sortBy]);
        }

        return studentCurrent[sortBy] - studentNext[sortBy];
      });

      break;

    case 'desc':
      newArr.sort((studentCurrent: Student, studentNext: Student) => {
        if (sortBy === SortType.AverageGrade) {
          return ((studentNext[SortType.AverageGrade].reduce((a: number, b:number) => a + b, 0) / studentNext[SortType.AverageGrade].length)
            - studentCurrent[SortType.AverageGrade].reduce((a: number, b:number) => a + b, 0) / studentCurrent[SortType.AverageGrade].length)
        }

        if (sortBy === SortType.Name || sortBy === SortType.Surname) {
          return studentNext[sortBy].localeCompare(studentCurrent[sortBy]);
        }

        return studentNext[sortBy] - studentCurrent[sortBy];
      });

      break;

    default:
      break;
  }

  return newArr;
}
