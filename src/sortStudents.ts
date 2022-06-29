
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(student: Student):number {
  const gradesSum = student.grades.reduce(
    (total :number, grade :number) => total + grade,
  );

  return gradesSum / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) :object[] {
  let studentsSorted: Student[] = students;

  switch (sortBy) {
    case (SortType.Name):
      if (order === 'asc') {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student1.name.localeCompare(student2.name),
        );
      } else {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student2.name.localeCompare(student1.name),
        );
      }
      break;
    case (SortType.Surname):
      if (order === 'asc') {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student1.surname.localeCompare(student2.surname),
        );
      } else {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student2.surname.localeCompare(student1.surname),
        );
      }
      break;
    case (SortType.Age):
      if (order === 'asc') {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student1.age - student2.age,
        );
      } else {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => student2.age - student1.age,
        );
      }
      break;
    case (SortType.Married):
      if (order === 'asc') {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => Number(student1.married) - Number(student2.married),
        );
      } else {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => Number(student2.married) - Number(student1.married),
        );
      }
      break;
    case (SortType.AverageGrade):
      if (order === 'asc') {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => getAverageGrade(student1) - getAverageGrade(student2),
        );
      } else {
        studentsSorted = studentsSorted.sort(
          (
            student1: Student,
            student2: Student,
          ) => getAverageGrade(student2) - getAverageGrade(student1),
        );
      }
      break;
    default:
      break;
  }

  return studentsSorted;
}
