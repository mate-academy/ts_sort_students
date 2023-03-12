
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'ave',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function AverageGrade({ grades }: Student): number {
  return grades.reduce((a, b) => a + b / grades.length);
}

export function sortStudents(
    students: Student[],
    sortBy: SortType,
    order: SortOrder
  ): Student[] {
  const studentCopy = [...students];
  const orderName = order === 'asc'
    ? 1
    : -1;

  return studentCopy.sort((prevStudent, currentStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return orderName
          * prevStudent[sortBy].localeCompare(currentStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return orderName
          * (Number(prevStudent[sortBy]) - Number(currentStudent[sortBy]));

      case SortType.AverageGrade:
        return orderName
          * (AverageGrade(prevStudent) - AverageGrade(currentStudent));

      default:
        throw new Error('OrderName is wrong');
    }
  });
}
