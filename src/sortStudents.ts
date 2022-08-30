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
    gradesArray.reduce((sum, num) => sum + num, 0) / gradesArray.length
  );

  return [...students].sort((firstStudent, nextStudent) => {
    switch (sortBy) {
      case 'age':
      case 'married':
        return order === 'asc'
          ? (+firstStudent[sortBy] - +nextStudent[sortBy])
          : (+nextStudent[sortBy] - +firstStudent[sortBy]);

      case 'name':
      case 'surname':
        return firstStudent[sortBy] > nextStudent[sortBy] ? 1 : -1;

      case 'grades': {
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
