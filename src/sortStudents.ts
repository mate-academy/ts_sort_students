
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      });

    case SortType.Married:
      return studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((el1: Student, el2: Student) => {
        const student1 = (el1.grades.reduce((sum, subject) => sum
          + subject, 0)) / el1.grades.length;
        const student2 = (el2.grades.reduce((sum, subject) => sum
          + subject, 0)) / el2.grades.length;

        return order === 'asc'
          ? student1 - student2
          : student2 - student1;
      });
    default:
      return studentsCopy;
  }
}
