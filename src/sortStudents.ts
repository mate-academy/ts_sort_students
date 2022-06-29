
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const signum: number = (order === 'asc')
    ? 1
    : -1;

  const sort = (student1: Student, student2: Student): number => {
    const reduce = (prev: number, item: number): number => prev + item;

    switch (sortBy) {
      case SortType.Name:
        return signum * (
          student1[SortType.Name].localeCompare(student2[SortType.Name]));
      case SortType.Surname:
        return signum * (
          student1[SortType.Surname]
            .localeCompare(student2[SortType.Surname]));
      case SortType.Age:
        return signum * (student1[SortType.Age] - (student2[SortType.Age]));
      case SortType.Married:
        return signum * (Number(student1[SortType.Married])
            - Number(student2[SortType.Married]));
      case SortType.AverageGrade:
        return signum * (
          student1[SortType.AverageGrade].reduce(reduce)
              / student1[SortType.AverageGrade].length
                - student2[SortType.AverageGrade].reduce(reduce)
                    / student2[SortType.AverageGrade].length);
      default: return 0;
    }
  };

  return [...students].sort(sort);
}
