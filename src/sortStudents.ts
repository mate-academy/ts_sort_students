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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const averageGrade = (grades: number[]): number => {
    return grades.reduce(
      (grade1: number, grade2: number) => grade1 + grade2, 0,
    ) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        },
      );

    case SortType.Age:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? student1[sortBy] - student2[sortBy]
            : student2[sortBy] - student1[sortBy];
        },
      );

    case SortType.Married:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? Number(student1[sortBy]) - Number(student2[sortBy])
            : Number(student2[sortBy]) - Number(student1[sortBy]);
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? averageGrade(student1[sortBy]) - averageGrade(student2[sortBy])
            : averageGrade(student2[sortBy]) - averageGrade(student1[sortBy]);
        },
      );

    default:
      return studentsCopy;
  }
}
