export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export enum SortOrder {
  ASC = 'asc',
  DES = 'desc'
}

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((accumulator, currentGrade) => (
    accumulator + currentGrade)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderCondition = (order === SortOrder.ASC ? 1 : -1);

  return [...students].sort((currtStudent, prevStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currtStudent[sortBy].localeCompare(prevStudent[sortBy])
          * orderCondition;

      case SortType.Age:
      case SortType.Married:
        return (+(currtStudent[sortBy]) - +(prevStudent[sortBy]))
          * orderCondition;

      case SortType.AverageGrade:
        return (calculateAverageGrade(currtStudent)
        - calculateAverageGrade(prevStudent))
          * orderCondition;

      default:
        throw new Error(`Sort type ${sortBy} is invalid`);
    }
  });
}
