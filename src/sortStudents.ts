
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: number;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avarageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents = students.map((student: Student) => ({ ...student }));

  switch (true) {
    default:
      return copyStudents;

    case sortBy === 'name':
      return copyStudents.sort((student1: Student,
        student2: Student): number => {
        if (order === 'asc') {
          return student1.name.localeCompare(student2.name);
        }

        return student2.name.localeCompare(student1.name);
      });

    case sortBy === 'surname':
      return copyStudents.sort((student1: Student,
        student2: Student): number => {
        if (order === 'asc') {
          return student1.surname.localeCompare(student2.surname);
        }

        return student2.surname.localeCompare(student1.surname);
      });

    case sortBy === 'age' && order === 'desc':
      return copyStudents.sort((student1: Student,
        student2: Student): number => {
        if (order === 'desc') {
          return student2.age - student1.age;
        }

        return student1.age - student2.age;
      });

    case sortBy === 'married':
      return copyStudents.sort((student1: Student,
        student2: Student): number => {
        if (order === 'desc') {
          return student2.married - student1.married;
        }

        return student1.married - student2.married;
      });

    case sortBy === 'avarageGrade':
      return copyStudents.sort((student1: Student,
        student2: Student): number => {
        const firstStudentMarks = student1.grades.reduce((sum: number,
          grade: number) => sum + grade, 0) / student1.grades.length;
        const secondStudentMarks = student2.grades.reduce((sum: number,
          grade: number) => sum + grade, 0) / student2.grades.length;

        if (order === 'asc') {
          return firstStudentMarks - secondStudentMarks;
        }

        return secondStudentMarks - firstStudentMarks;
      });
  }
}
