
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return newStudents.sort((student1, student2) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return newStudents.sort((student1, student2) => (
        order === 'asc'
          ? +student1[`${sortBy}`] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy]
      ));

    case SortType.AverageGrade:
      return newStudents.sort((student1, student2) => (
        order === 'asc'
          ? getAverageGrade(student1.grades)
              - getAverageGrade(student2.grades)
          : getAverageGrade(student2.grades)
              - getAverageGrade(student1.grades)
      ));

    default:
      break;
  }

  return newStudents;
}
