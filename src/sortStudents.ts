
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
  AverageGrade = 'grades'
}

type SortOrder = 'asc' | 'desc';

export type { SortOrder };

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let studentsList = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsList = studentsList
        .sort((a: Student, b: Student) => {
          return order === 'asc' ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        });
      break;
    case SortType.Age:
    case SortType.Married:
      studentsList = studentsList
        .sort((a: Student, b: Student) => {
          return order === 'asc' ? a[sortBy] - b[sortBy]
            : b[sortBy] - a[sortBy];
        });
      break;
    case SortType.AverageGrade:
      studentsList = studentsList
        .sort((a: Student, b: Student) => {
          const first = a[sortBy].reduce((prev, curr) => {
            return prev + curr;
          }, 0) / a[sortBy].length;
          const second = b[sortBy].reduce((prev, curr) => {
            return prev + curr;
          }, 0) / b[sortBy].length;

          return order === 'asc' ? first - second
            : second - first;
        });
      break;
  }

  return studentsList;
}
