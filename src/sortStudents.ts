
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedList: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedList = sortedList
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        });
      break;

    case SortType.Married:
    case SortType.Age:
      sortedList = sortedList
        .sort((a: Student, b: Student) => {
          return order === 'asc'
            ? +a[sortBy] - +b[sortBy]
            : +b[sortBy] - +a[sortBy];
        });
      break;

    case SortType.AverageGrade:
      sortedList = sortedList
        .sort((a: Student, b: Student) => {
          const AverageA = a.grades
            .reduce((sum, prev) => sum + prev, 0) / a.grades.length;
          const AverageB = b.grades
            .reduce((sum, prev) => sum + prev, 0) / b.grades.length;

          return order === 'asc'
            ? AverageA - AverageB
            : AverageB - AverageA;
        });
      break;

    default:
      break;
  }

  return sortedList;
}
