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

function calcAvgGrades({ grades }: Student): number {
  return grades.reduce((avgAcc, currGrade) => (
    avgAcc + currGrade)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderCondition = (order === SortOrder.ASC ? 1 : -1);

  return [...students].sort((currStud, prevStud): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currStud[sortBy].localeCompare(prevStud[sortBy])
          * orderCondition;

      case SortType.Age:
      case SortType.Married:
        return (+(currStud[sortBy]) - +(prevStud[sortBy]))
          * orderCondition;

      case SortType.AverageGrade:
        return (calcAvgGrades(currStud)
        - calcAvgGrades(prevStud))
          * orderCondition;

      default:
        throw new Error('Sort type is invalid');
    }
  });
}
