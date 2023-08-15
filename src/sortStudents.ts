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

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (
  grades: Student['grades'],
): number => grades.length && grades.reduce(
  (avg, grade) => avg + grade, 0,
) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort(
        (s1, s2) => (
          order === 'asc'
            ? s1[sortBy].localeCompare(s2[sortBy])
            : s2[sortBy].localeCompare(s1[sortBy])
        ),
      );

    case SortType.Age:
      return sortedStudents.sort(
        (s1, s2) => (
          order === 'asc'
            ? s1.age - s2.age
            : s2.age - s1.age
        ),
      );

    case SortType.Married:
      return sortedStudents.sort(
        (s1, s2) => (
          order === 'asc'
            ? Number(s1.married) - Number(s2.married)
            : Number(s2.married) - Number(s1.married)
        ),
      );

    case SortType.AverageGrade:
      return sortedStudents.sort((s1, s2) => (
        order === 'asc'
          ? getAverageGrade(s1.grades) - getAverageGrade(s2.grades)
          : getAverageGrade(s2.grades) - getAverageGrade(s1.grades)
      ));

    default:
      throw new Error('Sort type is invalid');
  }
}
