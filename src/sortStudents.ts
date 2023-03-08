
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

function avarageGrade({ grades }: Student): number {
  return grades.reduce((prev, next) => prev + next, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((aStudent, bStudent) => {
    const sortOrder = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          aStudent[sortBy].localeCompare(bStudent[sortBy])
        ) * sortOrder;

      case SortType.Age:
      case SortType.Married:
        return (
          +(aStudent[sortBy]) - +(bStudent[sortBy])
        ) * sortOrder;

      case SortType.AverageGrade:
        return (
          avarageGrade(aStudent) - avarageGrade(bStudent)
        ) * sortOrder;

      default:
        throw new Error('Provided type is not valid');
    }
  });
}
