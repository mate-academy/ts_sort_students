
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
  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? student2[sortBy] - student1[sortBy]
          : student1[sortBy] - student2[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? student1[sortBy].reduce((a, b) => {
            return (a + b);
          }) / student1[sortBy].length
          - student2[sortBy].reduce((a, b) => {
            return (a + b);
          }) / student2[sortBy].length
          : student2[sortBy].reduce((a, b) => {
            return (a + b);
          }) / student2[sortBy].length
          - student1[sortBy].reduce((a, b) => {
            return (a + b);
          }) / student1[sortBy].length;

      default:
        return 1;
    }
  });
}
