interface Student {
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyOfStudents
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]))
        : copyOfStudents
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
      return order === 'asc'
        ? copyOfStudents
          .sort((a: Student, b: Student) => a[sortBy] - b[sortBy])
        : copyOfStudents
          .sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
    case SortType.Married:
      return order === 'asc'
        ? copyOfStudents
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy])
        : copyOfStudents
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      // I think, it is necessary to create a function for average grade
      // I will implement it in the next commit
      return order === 'asc'
        ? copyOfStudents
          .sort((a: Student, b: Student) => a[sortBy]
            .reduce((acc: number, grade: number) => acc + grade)
              / a[sortBy].length
            - b[sortBy]
              .reduce((acc: number, grade: number) => acc + grade)
                / b[sortBy].length)
        : copyOfStudents
          .sort((a: Student, b: Student) => b[sortBy]
            .reduce((acc: number, grade: number) => acc + grade)
              / b[sortBy].length
            - a[sortBy]
              .reduce((acc: number, grade: number) => acc + grade)
                / a[sortBy].length);
    default:
      return copyOfStudents;
  }
}
