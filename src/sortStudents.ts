
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

function getTotalMarks(marks : number[]): number {
  return marks.reduce((total: number, next: number) => total + next, 0)
   / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Surname):
    case (SortType.Name):
      return studentCopy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });

    case (SortType.Married):
    case (SortType.Age):
      return studentCopy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];
      });

    case (SortType.AverageGrade):
      return studentCopy.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return getTotalMarks(a[sortBy]) - getTotalMarks(b[sortBy]);
        }

        return getTotalMarks(b[sortBy]) - getTotalMarks(a[sortBy]);
      });

    default:
      throw new Error('wrong type of sort input, pls try again');
  }
}
