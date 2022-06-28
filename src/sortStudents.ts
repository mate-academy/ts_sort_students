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
  const sortedStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  const getAverageGrade = (studentGrades: number[]): number => {
    return studentGrades
      .reduce((total, grade) => total + grade) / studentGrades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortOrder
        ? sortedStudents.sort((student1, student2) => student1[sortBy]
          .localeCompare(student2[sortBy]))
        : sortedStudents.sort((student1, student2) => student2[sortBy]
          .localeCompare(student1[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((student1, student2) => (
        +student1[sortBy] - +student2[sortBy]) * sortOrder);

    case SortType.AverageGrade:
      return sortedStudents
        .sort((student1, student2) => (
          getAverageGrade(student1.grades)
        - getAverageGrade(student2.grades)) * sortOrder);

    default:
      return sortedStudents;
  }
}
