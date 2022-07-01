
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

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const signum: number = (order === SortOrder.asc)
    ? 1
    : -1;

  const sort = (student1: Student, student2: Student): number => {
    const reduce = (prev: number, item: number): number => prev + item;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return signum * (
          student1[sortBy].localeCompare(student2[sortBy]));
      case SortType.Age:
      case SortType.Married:
        return signum * (Number(student1[sortBy])
            - Number(student2[sortBy]));
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
