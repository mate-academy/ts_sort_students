
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

export type SortOrder = 'asc' |'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => grade + sum) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];
  const orderMultiply = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfStudents.sort((prev, current) => {
        return prev[sortBy].localeCompare(current[sortBy]) * orderMultiply;
      });

    case SortType.Age:
    case SortType.Married:
      return copyOfStudents.sort((prev, current) => {
        return (+prev[sortBy] - +current[sortBy]) * orderMultiply;
      });

    case SortType.AverageGrade:
      return copyOfStudents.sort((prev, current) => {
        return (getAverageGrade(prev.grades) - getAverageGrade(current.grades))
          * orderMultiply;
      });

    default:
      throw new Error('Please, input correct value for sorting!');
  }
}
