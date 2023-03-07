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

function getAverageGrade({ grades }: Student): number {
  return grades.reduce((grade, sum) => grade + sum, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  return copiedStudents.sort((previousStudent, currentStudent) => {
    const sortingMethod = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          previousStudent[sortBy].localeCompare(currentStudent[sortBy])
        ) * sortingMethod;

      case SortType.Age:
      case SortType.Married:
        return (
          +(previousStudent[sortBy]) - +(currentStudent[sortBy])
        ) * sortingMethod;

      case SortType.AverageGrade:
        return (
          getAverageGrade(previousStudent) - getAverageGrade(currentStudent)
        ) * sortingMethod;

      default:
        throw new Error('Provided type is not valid');
    }
  });
}
