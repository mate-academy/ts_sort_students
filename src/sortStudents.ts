
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avg',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const clonedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return clonedStudents.sort((student, student2) => {
        return order === 'asc'
          ? student[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return clonedStudents.sort((student, student2) => {
        return order === 'asc'
          ? +student[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student[sortBy];
      });

    case SortType.AverageGrade:
      return clonedStudents.sort((student, student2) => {
        const avg1: number = student.grades
          .reduce((previous, current) => previous + current, 0)
            / student.grades.length;
        const avg2: number = student2.grades
          .reduce((previous, current) => previous + current, 0)
            / student2.grades.length;

        return order === 'asc'
          ? avg1 - avg2
          : avg2 - avg1;
      });

    default:
      throw new Error('Invalid Sorting Parameter.');
  }
}
