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

function avgMark({ grades }: Student): number {
  return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderTurn = order === 'asc' ? 1 : -1;

  return [...students].sort((firstStud, secondStud): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return firstStud[sortBy].localeCompare(secondStud[sortBy])
          * orderTurn;

      case SortType.Age:
        return (firstStud.age - secondStud.age) * orderTurn;

      case SortType.Married:
        return (+(firstStud[sortBy]) - +(secondStud[sortBy]))
          * orderTurn;

      case SortType.AverageGrade:
        return (avgMark(firstStud) - avgMark(secondStud))
          * orderTurn;

      default:
        throw new Error('Something goes wrong');
    }
  });
}
