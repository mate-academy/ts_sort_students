
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  const getAvg = (arrNum: number[]): number => (
    arrNum.reduce((a, b) => a + b) / arrNum.length
  );

  sortedStudents.sort(
    (student1: Student, student2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student2[sortBy]);
        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? +student1[sortBy] - +student2[sortBy]
            : +student2[sortBy] - +student1[sortBy];
        case SortType.AverageGrade:
          return order === 'asc'
            ? getAvg(student1[sortBy]) - getAvg(student2[sortBy])
            : getAvg(student2[sortBy]) - getAvg(student1[sortBy]);
        default:
          throw new Error('Something wert wrong(invalid sort by)');
      }
    },
  );

  return sortedStudents;
}
