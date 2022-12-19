
export interface Student {
  name: string;
  surname: string
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((student1: Student, student2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student1[sortBy].localeCompare(student2[sortBy]);

        case SortType.Married:
          return order === 'asc'
            ? Number(student1[sortBy]) - Number(student2[sortBy])
            : Number(student2[sortBy]) - Number(student1[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? student1[sortBy] - student2[sortBy]
            : student2[sortBy] - student1[sortBy];

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverage(student1[sortBy]) - getAverage(student2[sortBy])
            : getAverage(student2[sortBy]) - getAverage(student1[sortBy]);

        default:
          return 0;
      }
    });
}
