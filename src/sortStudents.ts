
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AvaregeGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsInAnyOrder = students;

  switch (sortBy) {
    case SortType.Name:
      return studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.name.localeCompare(nextStudent.name)
          : nextStudent.name.localeCompare(prevStudent.name);
      });

    case SortType.Surname:
      return studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.surname.localeCompare(nextStudent.surname)
          : nextStudent.surname.localeCompare(prevStudent.surname);
      });

    case SortType.Age:
      return studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.age - nextStudent.age
          : nextStudent.age - prevStudent.age;
      });

    case SortType.Married:
      return studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        const prevStudentMarried = (prevStudent.married === true) ? 1 : 0;
        const nextStudentMarried = (nextStudent.married === true) ? 1 : 0;

        return (order === 'asc')
          ? prevStudentMarried - nextStudentMarried
          : nextStudentMarried - prevStudentMarried;
      });

    case SortType.AvaregeGrade:
      return studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        const prevStudentAvaregeGrade = prevStudent.grades
          .reduce((total, grade) => total + grade, 0)
          / prevStudent.grades.length;
        const nextStudentAvaregeGrade = nextStudent.grades
          .reduce((total, grade) => total + grade, 0)
          / nextStudent.grades.length;

        return (order === 'asc')
          ? prevStudentAvaregeGrade - nextStudentAvaregeGrade
          : nextStudentAvaregeGrade - prevStudentAvaregeGrade;
      });

    default:
      throw new Error();
  }
}
