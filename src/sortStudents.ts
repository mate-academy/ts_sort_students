
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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

function averageGrade(student: Student): number {
  return student.grades.reduce((a, b) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sorted: Student[] = [];

  sorted = students.map((student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === SortOrder.Asc
        ? sorted.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]))
        : sorted.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));

    case SortType.Age:
      return order === SortOrder.Asc
        ? sorted.sort((a: Student, b: Student) => a[sortBy] - b[sortBy])
        : sorted.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return order === SortOrder.Asc
        ? sorted.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]))
        : sorted.sort((a: Student, b: Student) => (
          +b[sortBy] - +a[sortBy]));

    case SortType.AverageGrade:
      return order === SortOrder.Asc
        ? sorted.sort((a: Student, b: Student) => (
          averageGrade(a) - averageGrade(b)))
        : sorted.sort((a: Student, b: Student) => (
          averageGrade(b) - averageGrade(a)));

    default:
      return sorted;
  }
}
