
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const newStudents = [...students];
  const orderValue = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudents.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]) * orderValue;
      });
      break;

    case SortType.Age:
    case SortType.Married:
      newStudents.sort((a, b) => {
        return (+a[sortBy] - (+b[sortBy])) * orderValue;
      });
      break;

    case SortType.AverageGrade:
      newStudents.sort((a, b) => {
        const averageA = a.grades.reduce((sum, grade) => sum + grade, 0)
          / a.grades.length;
        const averageB = b.grades.reduce((sum, grade) => sum + grade, 0)
          / b.grades.length;

        return (averageA - averageB) * orderValue;
      });
      break;

    default:
      throw new Error('Check parameters one more time');
  }

  return newStudents;
}
