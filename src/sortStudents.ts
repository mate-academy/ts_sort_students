
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean | number;
  grades: number[];
  averageGrade?: number;
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
  const studentsCopy = students.map((student) => {
    const average = student.grades
      .reduce((prev, currernt) => prev + currernt, 0) / student.grades.length;

    return {
      ...student,
      averageGrade: average,
    };
  });

  if (sortBy === 'surname' || sortBy === 'name') {
    if (order === 'asc') {
      studentsCopy
        .sort((student1, student2) => {
          return student1[sortBy].localeCompare(student2[sortBy]);
        });
    } else {
      studentsCopy
        .sort((student1, student2) => {
          return student2[sortBy].localeCompare(student1[sortBy]);
        });
    }
  }

  if (sortBy === 'age' || sortBy === 'averageGrade') {
    if (order === 'asc') {
      studentsCopy
        .sort((student1, student2) => {
          return student1[sortBy] - student2[sortBy];
        });
    } else {
      studentsCopy
        .sort((student1, student2) => {
          return student2[sortBy] - student1[sortBy];
        });
    }
  }

  if (sortBy === 'married') {
    studentsCopy
      .sort((student1, student2) => {
        return Number(student2.married) - Number(student1.married);
      });
  }

  return studentsCopy;
}
