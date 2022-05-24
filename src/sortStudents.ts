
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export function calculateAverage(student: number[]): number {
  return student
    .reduce((prev: number, curr: number) => (prev + curr), 0) / student.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const isSortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return isSortedStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return isSortedStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return isSortedStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return isSortedStudents.sort((a: Student, b: Student) => {
        return order === SortOrder.asc
          ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
          : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
      });

    default:
      return [];
  }
}
