
export interface Student {
  'name': string,
  'surname': string,
  'age': number,
  'married': boolean,
  'grades': number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  type CallBack = (student1: Student, student2: Student) => number;

  const callback: CallBack = (student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? student1[sortBy].reduce((sum, n) => sum + n, 0)
            / student1[sortBy].length
            - student2[sortBy].reduce((sum, n) => sum + n, 0)
            / student2[sortBy].length
          : student2[sortBy].reduce((sum, n) => sum + n, 0)
            / student2[sortBy].length
            - student1[sortBy].reduce((sum, n) => sum + n, 0)
              / student1[sortBy].length;

      default:
        return 0;
    }
  };

  return [...students].sort(callback);
}
