
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order: SortOrder,
): Student[] {
  const countAverageGrade = (grades: number[]): number => {
    return grades.reduce((sum: number, grade: number) => (
      grade + sum
    ), 0) / grades.length;
  };

  const copiedStudents = [...students];
  const orderBy = order === 'desc'
    ? -1
    : 1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents.sort((student1, student2) => (
        orderBy * (student1[sortBy].localeCompare(student2[sortBy]))));

    case SortType.Age:
    case SortType.Married:
      return copiedStudents.sort((student1, student2) => (
        orderBy * (+student1[sortBy] - +student2[sortBy])));

    case SortType.AverageGrade:
      return copiedStudents.sort((student1, student2) => {
        const studentAverageMark1 = countAverageGrade(student1.grades);
        const studentAverageMark2 = countAverageGrade(student2.grades);

        return orderBy * (studentAverageMark1 - studentAverageMark2);
      });

    default:
      throw new Error('Wrong sortBy value');
  }
}
