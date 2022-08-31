
export interface Student {
  name: string;
  surname: string;
  age: number;
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export type SortOrder = 'asc'|'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrCopyStudents:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? arrCopyStudents
          .sort((student1, student2) => (
            student1[sortBy].localeCompare(student2[sortBy])))
        : arrCopyStudents
          .sort((student1, student2) => (
            student2[sortBy].localeCompare(student1[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrCopyStudents.sort((student1, student2) => (
          getAverageGrade(student1.grades) - getAverageGrade(student2.grades)))

        : arrCopyStudents.sort((student1, student2) => (
          getAverageGrade(student2.grades) - getAverageGrade(student1.grades)));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? arrCopyStudents
          .sort((student1, student2) => (
            Number(student1[sortBy]) - Number(student2[sortBy])))
        : arrCopyStudents
          .sort((student1, student2) => (
            Number(student2[sortBy]) - Number(student1[sortBy])));

    default: throw new Error('Impossible! But parameter is wrong.');
  }
}
