
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsInAnyOrder = [...students];

  function getAvaregeGrade(student: Student): number {
    return student.grades.reduce((total, grade) => total + grade, 0)
    / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.name.localeCompare(nextStudent.name)
          : nextStudent.name.localeCompare(prevStudent.name);
      });
      break;

    case SortType.Surname:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.surname.localeCompare(nextStudent.surname)
          : nextStudent.surname.localeCompare(prevStudent.surname);
      });
      break;

    case SortType.Age:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? prevStudent.age - nextStudent.age
          : nextStudent.age - prevStudent.age;
      });
      break;

    case SortType.Married:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? +prevStudent.married - +nextStudent.married
          : +nextStudent.married - +prevStudent.married;
      });
      break;

    default:
      studentsInAnyOrder.sort((prevStudent: Student,
        nextStudent: Student): number => {
        return (order === 'asc')
          ? getAvaregeGrade(prevStudent) - getAvaregeGrade(nextStudent)
          : getAvaregeGrade(nextStudent) - getAvaregeGrade(prevStudent);
      });
      break;
  }

  return studentsInAnyOrder;
}
