export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

function average(gradeArray: number[]): number {
  return gradeArray.reduce((a: number, b: number) => a + b, 0)
  / gradeArray.length;
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
  order:SortOrder,
): Student[] {
  const people: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return people.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student1[sortBy].localeCompare(student2[sortBy]) * -1;
      });

    case SortType.Age:
    case SortType.Married:
      return people.sort((student1, student2) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    case SortType.AverageGrade:
      return people.sort((student1, student2) => {
        return order === 'asc'
          ? average(student1[sortBy]) - average(student2[sortBy])
          : average(student2[sortBy]) - average(student1[sortBy]);
      });

    default:
      return people;
  }
}
