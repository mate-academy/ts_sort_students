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

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export function averageGrade(grades: number[]) :number {
  return (grades.reduce((prev, curr) => prev + curr, 0) / grades.length);
}

export function sortStudents(
  students: Student[],
  sortBy: keyof Student,
  order: SortOrder,
): Student[] {
  const orderCondition = (order === SortOrder.ASC ? 1 : -1);

  return [...students].sort((aStudent, bStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return aStudent[sortBy].localeCompare(bStudent[sortBy])
          * orderCondition;
      case SortType.Married:
        return (Number(aStudent[sortBy]) - Number(bStudent[sortBy]))
          * orderCondition;
      case SortType.Age:
        return (aStudent[sortBy] - bStudent[sortBy]) * orderCondition;
      case SortType.AverageGrade:
        return (averageGrade(aStudent[sortBy])
          - averageGrade(bStudent[sortBy])) * orderCondition;
      default:
        throw new Error('the data is invalid!');
    }
  });
}
