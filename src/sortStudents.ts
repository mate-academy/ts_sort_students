
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
type SortOrder = 'asc' | 'desc';

export type { SortOrder };

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, value) => (
    acc + value), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedObject = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedObject.sort((current, next): number => (
        order === 'asc'
          ? current[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(current[sortBy])
      ));

    case SortType.Married:
    case SortType.Age:
      return sortedObject.sort((current, next) => (
        order === 'asc'
          ? Number(current[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(current[sortBy])
      ));

    case SortType.AverageGrade:
      return sortedObject.sort((current, next) => (
        order === 'asc'
          ? getAverageGrade(current.grades) - getAverageGrade(next.grades)
          : getAverageGrade(next.grades) - getAverageGrade(current.grades)
      ));
    default:
      throw new Error('Unknown sort type');
  }
}
