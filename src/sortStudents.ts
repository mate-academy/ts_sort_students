
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
  ASC = 'asc',
  DESC = 'desc'
}

function getAverageGrade(student: Student): number {
  return student.grades.reduce((a, b) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // let sorted: Student[] = [];

  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === SortOrder.ASC
        ? studentsCopy.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])
        ))
        : studentsCopy.sort((a: Student, b: Student) => (
          b[sortBy].localeCompare(a[sortBy])
        ));

    case SortType.Age:
      return order === SortOrder.ASC
        ? studentsCopy.sort((a: Student, b: Student) => a[sortBy] - b[sortBy])
        : studentsCopy.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return order === SortOrder.ASC
        ? studentsCopy.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]
        ))
        : studentsCopy.sort((a: Student, b: Student) => (
          +b[sortBy] - +a[sortBy]
        ));

    case SortType.AverageGrade:
      return order === SortOrder.ASC
        ? studentsCopy.sort((a: Student, b: Student) => (
          getAverageGrade(a) - getAverageGrade(b)))
        : studentsCopy.sort((a: Student, b: Student) => (
          getAverageGrade(b) - getAverageGrade(a)));

    default:
      return studentsCopy;
  }
}
