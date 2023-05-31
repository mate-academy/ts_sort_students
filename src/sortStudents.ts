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
  const averageGrade = (gradesArray:number[]):number => (
    gradesArray.reduce((sum, grade) => sum + grade, 0) / gradesArray.length
  );

  return [...students].sort((firstStudent, nextStudent) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? (+firstStudent[sortBy] - +nextStudent[sortBy])
          : (+nextStudent[sortBy] - +firstStudent[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return firstStudent[sortBy] > nextStudent[sortBy] ? 1 : -1;

      case SortType.AverageGrade: {
        const firstStudAverage = averageGrade(firstStudent[sortBy]);
        const nextStudAverage = averageGrade(nextStudent[sortBy]);

        return order === 'asc'
          ? firstStudAverage - nextStudAverage
          : nextStudAverage - firstStudAverage;
      }
      default:
        throw new Error('Something went wrong!');
    }
  });
}
