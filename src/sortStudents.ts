
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

const getAverageGrade = (grades: number[]):number => {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  let result;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:

      result = copyStudents.sort((a, b) => Number(b[sortBy])
        - Number(a[sortBy]));

      return order === 'asc'
        ? result.reverse()
        : result;

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a, b) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades))
        : copyStudents.sort((a, b) => getAverageGrade(b.grades)
          - getAverageGrade(a.grades));
    default:
      throw new Error('Sort type not supported');
  }
}
