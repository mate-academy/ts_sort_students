export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudens = [...students];

  sortedStudens.forEach((student) => {
    const changedStudent = student;

    changedStudent.averageGrade = student.grades.reduce((a, b) => a + b)
    / student.grades.length;
  });

  switch (order) {
    case 'asc':
      sortedStudens.sort((first: Student, second: Student) => {
        if (first[sortBy] < second[sortBy]) {
          return -1;
        }

        if (first[sortBy] > second[sortBy]) {
          return 1;
        }

        return 0;
      });
      break;

    case 'desc':
      sortedStudens.sort((first: Student, second: Student) => {
        if (first[sortBy] > second[sortBy]) {
          return -1;
        }

        if (first[sortBy] < second[sortBy]) {
          return 1;
        }

        return 0;
      });
      break;

    default:
      return sortedStudens;
  }

  return sortedStudens;
}
