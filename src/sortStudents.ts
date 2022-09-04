
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function averageGrade(grades: number[]): number {
    return grades.reduce((prev, grade) => prev + grade, 0) / grades.length;
  }

  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents
          .sort((prevStudent, nextStudent) => prevStudent[sortBy]
            .localeCompare(nextStudent[sortBy]))
        : sortedStudents
          .sort((prevStudent, nextStudent) => nextStudent[sortBy]
            .localeCompare(prevStudent[sortBy]));

    case SortType.AverageGrade:
      return sortedStudents
        .sort((prevStudent, nextStudent) => (order === 'asc'
          ? averageGrade(prevStudent.grades) - averageGrade(nextStudent.grades)
          : averageGrade(nextStudent.grades) - averageGrade(prevStudent.grades)
        ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents
          .sort((prevStudent, nextStudent) => +(prevStudent[sortBy])
          - +(nextStudent[sortBy]))
        : sortedStudents
          .sort((prevStudent, nextStudent) => +(nextStudent[sortBy])
          - +(prevStudent[sortBy]));

    default: throw new Error('Invalid param');
  }
}
