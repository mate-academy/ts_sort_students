
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  function calculateAverage(grades: number[]):number {
    return grades.reduce((sum, value) => sum + value, 0) / grades.length;
  }

  copyStudents.sort((a: Student, b: Student) => {
    const direction = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]) * direction;

      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * direction;

      case SortType.AverageGrade:
        return (calculateAverage(a.grades)
        - calculateAverage(b.grades)) * direction;

      default:
        throw new Error('Wrong data');
    }
  });

  return copyStudents;
}
