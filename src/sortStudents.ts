export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
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
  const sortedStudents: Student[] = [...students];
  const orderBy: number = order === 'asc' ? 1 : -1;

  const getAverageGrade = (grades: number[]): number => {
    const sum: number = grades
      .reduce((prev: number, grade: number) => prev + grade);

    return sum / grades.length;
  };

  if (sortBy) {
    sortedStudents.sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return orderBy * a[sortBy].localeCompare(b[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return orderBy * (+a[sortBy] - +b[sortBy]);

        case SortType.AverageGrade:
          return orderBy * (getAverageGrade(a[sortBy])
            - getAverageGrade(b[sortBy]));

        default:
          return 0;
      }
    });
  }

  return sortedStudents;
}
