
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

const avarageGrade = (grades: number[]): number => {
  return grades.reduce((x, y) => x + y) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const ascOrDecsOrder = order === 'asc';

  sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return ascOrDecsOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return ascOrDecsOrder
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.AverageGrade:
      default:
        return ascOrDecsOrder
          ? avarageGrade(a[sortBy]) - avarageGrade(b[sortBy])
          : avarageGrade(b[sortBy]) - avarageGrade(a[sortBy]);
    }
  });

  return sortedStudents;
}
