
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

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = Object.values(students);

  studentsArr.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.Married:
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.AverageGrade:
        return (order === 'asc')
          ? (a[sortBy].reduce((acc, grade) => acc + grade, 0)
            / a[sortBy].length)
            - (b[sortBy].reduce((acc, grade) => acc + grade, 0)
            / b[sortBy].length)
          : (b[sortBy].reduce((acc, grade) => acc + grade, 0)
            / b[sortBy].length)
            - (a[sortBy].reduce((acc, grade) => acc + grade, 0)
            / a[sortBy].length);

      default:
        throw new Error('Wrong sort type parameter');
    }
  });

  return studentsArr;
}
