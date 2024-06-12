export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export function getAverageAge({ grades }: Student): number {
  return grades.reduce((startValue, currentValue) => startValue + currentValue)
    / grades.length;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  return copyStudents.sort((firstStudent, secondStudent) => {
    const sortMethod = order === SortOrder.Ascending
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (firstStudent[sortBy].localeCompare(secondStudent[sortBy]))
        * sortMethod;

      case SortType.Age:
      case SortType.Married:
        return (Number(firstStudent[sortBy]) - Number(secondStudent[sortBy]))
        * sortMethod;

      case SortType.AverageGrade:
        return (getAverageAge(firstStudent) - getAverageAge(secondStudent))
        * sortMethod;

      default:
        throw new Error('Eneter a valid type');
    }
  });
}
