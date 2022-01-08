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
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

      break;

    case SortType.AverageGrade: {
      sortedStudents.sort((student1: Student, student2: Student) => {
        const averagraGrades1 = student1.grades
          .reduce((sum, grade) => sum + grade) / student1.grades.length;
        const averagraGrades2 = student2.grades
          .reduce((sum, grade) => sum + grade) / student2.grades.length;

        return order === 'asc'
          ? averagraGrades1 - averagraGrades2
          : averagraGrades2 - averagraGrades1;
      });

      break;
    }

    default:
      return sortedStudents;
  }

  return sortedStudents;
}
