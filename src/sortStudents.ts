
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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

function getAverageGrade({ grades }: Student):number {
  return grades.reduce((acc, curGrade) => acc + curGrade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order:SortOrder,
):Student[] {
  const orderCondition = (order === 'asc' ? 1 : -1);

  return [...students].sort((curStudent, prevStudent):number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return (+curStudent[sortBy] - +prevStudent[sortBy]) * orderCondition;

      case SortType.Name:
      case SortType.Surname:
        return curStudent[sortBy].localeCompare(prevStudent[sortBy])
        * orderCondition;

      case SortType.AverageGrade:
        return (getAverageGrade(curStudent)
        - getAverageGrade(prevStudent)) * orderCondition;

      default:
        throw new Error('Wrong sort type');
    }
  });
}
