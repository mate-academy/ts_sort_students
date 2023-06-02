
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  function sortByOrder(n: number): number {
    return order === 'asc' ? n : -n;
  }

  function averageGrades(grades: number[]): number {
    const sum = grades.reduce((prev, current) => prev + current, 0);

    return sum / grades.length;
  }

  studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortByOrder(a[sortBy].localeCompare(b[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return sortByOrder(Number(a[sortBy]) - Number(b[sortBy]));

      case SortType.AverageGrade:
        return sortByOrder(averageGrades(a[sortBy]) - averageGrades(b[sortBy]));

      default:
        throw new Error(
          `Huston, we have a problem! Wrong value: ${sortBy}`,
        );
    }
  });

  return studentsCopy;
}
