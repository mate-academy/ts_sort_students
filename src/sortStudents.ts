
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
  AverageGrade = 'averagegrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b, 0) / (grades.length || 1);
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const newCopy = [...students];

  newCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);

      default:
        return 0;
    }
  });

  return newCopy;
}
