export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averagegrade',
}

export type SortOrder = 'asc' | 'desc';

export function calculateAverageGrade(student: Student): number {
  return student.grades.reduce((prev, current) => prev + current, 0)
    / student.grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = students.map((student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? calculateAverageGrade(student1) - calculateAverageGrade(student2)
          : calculateAverageGrade(student2) - calculateAverageGrade(student1);
      });
      break;

    default: break;
  }

  return studentsCopy;
}
