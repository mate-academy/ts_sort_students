
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

function AverageCallback({ grades }: Student): number {
  return grades.reduce((grade, current) => grade + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent, currStudent): number => {
    const orderType = (order === 'asc' ? 1 : -1);

    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return prevStudent[sortBy].localeCompare(currStudent[sortBy])
          * orderType;

      case SortType.Married:
      case SortType.Age:
        return (Number(prevStudent[sortBy]) - Number(currStudent[sortBy]))
          * orderType;

      case SortType.AverageGrade:
        return (AverageCallback(prevStudent) - AverageCallback(currStudent))
          * orderType;

      default:
        throw new Error('Sort type is invalid');
    }
  });
}
