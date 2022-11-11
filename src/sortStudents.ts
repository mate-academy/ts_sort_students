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

function calcAvgGrade(grades: number[]): number {
  return grades.reduce((prev, cur) => prev + cur, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const sortedStudents: Student[] = [...students];
  const values = Object.values(SortType);

  return sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? calcAvgGrade(a[sortBy]) - calcAvgGrade(b[sortBy])
          : calcAvgGrade(b[sortBy]) - calcAvgGrade(a[sortBy]);

      default:
        throw new Error(`Invalid data, use on of these: ${values.join(', ')}`);
    }
  });
}
