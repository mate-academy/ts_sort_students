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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(gradeArray: number[]): number {
  return gradeArray.reduce((a: number, b: number) => a + b) / gradeArray.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const newStudentsArr: Student[] = [...students];

  newStudentsArr.sort((a, b) => {
    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades)
          : calculateAverageGrade(b.grades) - calculateAverageGrade(a.grades);

      default:
        throw new Error(`Sort type ${sortBy} not supported`);
    }
  });

  return newStudentsArr;
}
