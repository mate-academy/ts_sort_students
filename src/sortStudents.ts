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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? students
          .sort((std1, std2) => std1[sortBy].localeCompare(std2[sortBy]))
        : students
          .sort((std1, std2) => std2[sortBy].localeCompare(std1[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? students.sort((std1, std2) => +std1[sortBy] - +std2[sortBy])
        : students.sort((std1, std2) => +std2[sortBy] - +std1[sortBy]);
    case SortType.AverageGrade:
      return order === 'asc'
        ? students.sort((std1, std2) => {
          return (std1.grades.reduce((a, b) => a + b) / std1.grades.length)
            - (std2.grades.reduce((a, b) => a + b) / std2.grades.length);
        })
        : students.sort((std1, std2) => {
          return (std2[sortBy].reduce((a, b) => a + b) / std2[sortBy].length)
            - (std1[sortBy].reduce((a, b) => a + b) / std1[sortBy].length);
        });
    default:
      return students;
  }
}
