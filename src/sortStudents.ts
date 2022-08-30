
export interface Student {
  name: string;
  surname: string;
  age: number;
  married?: true,
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
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  let arrCopyStudents:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      arrCopyStudents = (order === 'asc')
        ? arrCopyStudents
          .sort((a:Student, b:Student) => a[sortBy].localeCompare(b[sortBy]))
        : arrCopyStudents
          .sort((a:Student, b:Student) => b[sortBy].localeCompare(a[sortBy]));
      break;

    case SortType.AverageGrade:
      arrCopyStudents = (order === 'asc')
        ? arrCopyStudents.sort((a:Student, b:Student) => (
          getAverageGrade(a.grades) - getAverageGrade(b.grades)))

        : arrCopyStudents.sort((a:Student, b:Student) => (
          getAverageGrade(b.grades) - getAverageGrade(a.grades)));
      break;

    case SortType.Age:
    case SortType.Married:
      arrCopyStudents = (order === 'asc')
        ? arrCopyStudents
          .sort((a:Student, b:Student) => (
            Number(a[sortBy]) - Number(b[sortBy])))
        : arrCopyStudents
          .sort((a:Student, b:Student) => (
            Number(b[sortBy]) - Number(a[sortBy])));
      break;

    default: throw new Error('Impossible! But parameter is wrong.');
  }

  return arrCopyStudents;
}
