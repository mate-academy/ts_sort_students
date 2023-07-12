export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?:number;
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
  const sortedStudents = students.map((student) => {
    let averageGrade = 0;

    if (student.grades.length > 0) {
      averageGrade = student.grades.reduce(
        (acc, grade) => acc + grade, 0,
      ) / student.grades.length;
    }

    return {
      ...student, averageGrade,
    };
  });

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    if (a[sortBy] < b[sortBy]) {
      comparison = -1;
    } else if (a[sortBy] > b[sortBy]) {
      comparison = 1;
    }

    return order === 'desc' ? comparison * -1 : comparison;
  });

  return sortedStudents;
}
