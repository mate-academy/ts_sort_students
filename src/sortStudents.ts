
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
// write your function

  const copiedStudents = [...students];

  function compareStudents(student1: Student, student2: Student): number {
    switch (sortBy) {
      case SortType.Name: {
        return student1.name.localeCompare(student2.name);
      }

      case SortType.Surname: {
        return student1.surname.localeCompare(student2.surname);
      }

      case SortType.Age: {
        return student1.age - student2.age;
      }

      case SortType.Married: {
        return (student1.married ? 1 : 0) - (student2.married ? 1 : 0);
      }

      case SortType.AverageGrade: {
        const sumGrades1: number = student1.grades
          .reduce((sum, grade) => sum + grade, 0);
        const average1: number = sumGrades1 / student1.grades.length;
        const sumGrades2: number = student2.grades
          .reduce((sum, grade) => sum + grade, 0);
        const average2: number = sumGrades2 / student2.grades.length;

        return average1 - average2;
      }

      default:
        return 0;
    }
  }

  const sign: number = order === 'asc' ? 1 : -1;

  copiedStudents
    .sort((student1, student2) => sign * compareStudents(student1, student2));

  return copiedStudents;
}
