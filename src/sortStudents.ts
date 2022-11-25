
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const resultArray: Student[] = [...students];
  const orderModifier: 1 | -1 = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return resultArray.sort(
        (a, b) => a[sortBy].localeCompare(b[sortBy]) * orderModifier,
      );
    case SortType.Age:
    case SortType.Married:
      return resultArray.sort(
        (a, b) => (+a[sortBy] - +b[sortBy]) * orderModifier,
      );
    default:
      return resultArray.sort((a, b) => {
        const avarageA = a.grades.reduce((sum, grade) => sum + grade)
          / a.grades.length;
        const avarageB = b.grades.reduce((sum, grade) => sum + grade)
          / b.grades.length;

        return (avarageA - avarageB) * orderModifier;
      });
  }
}
